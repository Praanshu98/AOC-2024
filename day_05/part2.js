import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf8");
let [orderingRulesInput, updatesInput] = input.split("\n\n");

const orderingRules = {};

// Parse the ordering rules into a graph representation
orderingRulesInput.split("\n").forEach((rule) => {
  rule = rule.split("|");
  orderingRules[rule[0]]
    ? orderingRules[rule[0]].push(rule[1])
    : (orderingRules[rule[0]] = [rule[1]]);
});

const updates = updatesInput.split("\n").map((update) => update.split(","));
const validUpdates = [];
const invalidUpdates = [];

// Function to check if an update is valid
const checkIfFailingList = (update) => {
  let flag = true;
  update.forEach((value, index) => {
    if (index === 0) return true;
    if (!flag) return;

    if (Object.keys(orderingRules).includes(value)) {
      const elementsBeforeValueList = update.slice(0, index);
      if (
        !elementsBeforeValueList.every((v) => !orderingRules[value].includes(v))
      ) {
        flag = false;
        return;
      }
    }
  });
  return flag;
};

// Separate valid and invalid updates
updates.forEach((update) => {
  if (checkIfFailingList(update)) {
    validUpdates.push(update);
  } else {
    invalidUpdates.push(update);
  }
});

// Function to perform topological sort for invalid updates
const topologicalSort = (pages, rules) => {
  const graph = {};
  const inDegree = {};
  const sortedOrder = [];

  // Initialize the graph and in-degree map
  pages.forEach((page) => {
    graph[page] = [];
    inDegree[page] = 0;
  });

  // Build the graph and calculate in-degree
  Object.entries(rules).forEach(([from, tos]) => {
    tos.forEach((to) => {
      if (pages.includes(from) && pages.includes(to)) {
        graph[from].push(to);
        inDegree[to] += 1;
      }
    });
  });

  // Find all nodes with no incoming edges
  const queue = [];
  Object.keys(inDegree).forEach((node) => {
    if (inDegree[node] === 0) {
      queue.push(node);
    }
  });

  // Process the graph
  while (queue.length > 0) {
    const current = queue.shift();
    sortedOrder.push(current);

    graph[current].forEach((neighbor) => {
      inDegree[neighbor] -= 1;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    });
  }

  // If sortedOrder contains all pages, return it
  return sortedOrder.length === pages.length ? sortedOrder : [];
};

// Correct the invalid updates
const correctedUpdates = invalidUpdates.map((update) =>
  topologicalSort(update, orderingRules)
);

// Find the middle page numbers for corrected updates
let sum = 0;
correctedUpdates.forEach((update) => {
  const middleNumber = Number(update[parseInt(update.length / 2)]);
  sum += middleNumber;
});

console.log(sum);

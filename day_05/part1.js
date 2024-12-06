import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf8");
let [orderingRulesInput, updatesInput] = input.split("\n\n");

const orderingRules = {};

orderingRulesInput.split("\n").map((rule) => {
  rule = rule.split("|");
  orderingRules[rule[0]]
    ? orderingRules[rule[0]].push(rule[1])
    : (orderingRules[rule[0]] = [rule[1]]);
});

/*
updates:
[
  [ '75', '47', '61', '53', '29' ],
  [ '97', '61', '53', '29', '13' ],
  [ '75', '29', '13' ],
  [ '75', '97', '47', '61', '53' ],
  [ '61', '13', '29' ],
  [ '97', '13', '75', '29', '47' ]
]

orderingRules:
{
  '29': [ '13' ],
  '47': [ '53', '13', '61', '29' ],
  '53': [ '29', '13' ],
  '61': [ '13', '53', '29' ],
  '75': [ '29', '53', '47', '61', '13' ],
  '97': [ '13', '61', '47', '29', '53', '75' ]
}

*/

const updates = updatesInput.split("\n").map((update) => update.split(","));
const finalUpdateList = [];

updates.forEach((update) => {
  let flag = true;
  update.forEach((value, index) => {
    // Just to bypass first index
    if (index === 0) return true;
    if (!flag) return;

    // Check for value in keys of orderingList
    if (Object.keys(orderingRules).includes(value)) {
      //  [ '75', '47', '61', '53', '29' ],
      const elementsBeforeValueList = update.slice(0, index);
      if (
        !elementsBeforeValueList.every((v) => !orderingRules[value].includes(v))
      ) {
        flag = false;
        return;
      }
    }
  });
  if (flag) finalUpdateList.push(update);
});

let sum = 0;
finalUpdateList.forEach((update) => {
  const middleNumber = Number(update[parseInt(update.length / 2)]);
  sum += middleNumber;
});

console.log(sum);

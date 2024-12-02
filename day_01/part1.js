import fs from "fs";

// Read the input data
const inputData = fs.readFileSync("./input.text", "utf8");

const input_data = inputData.split("\n");

// Parse the input data
const leftList = [];
const rightList = [];

input_data.forEach((data) => {
  const [ leftListElement, rightListElement ] = data.split("   ");
  leftList.push(Number(leftListElement));
  rightList.push(Number(rightListElement));
})

// Sort the lists
leftList.sort();
rightList.sort();


// Calculate the difference
let difference = 0;

for (let i = 0; i < leftList.length; i++) {
    leftList[i] && rightList[i] ? 
    difference += Math.abs(leftList[i] - rightList[i]) : ""
  }
  

console.log(difference);
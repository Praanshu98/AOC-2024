import fs from "fs";

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

// Count frequency of location id
let frequency = {};

rightList.forEach((locationId) => {
  frequency[locationId] = frequency[locationId] ? frequency[locationId] + 1 : 1;
})

// Get similarity score
let similarityScore = 0;

leftList.forEach((locationId) => {
  frequency[locationId] ? similarityScore += frequency[locationId] * locationId : ""
})

console.log(similarityScore)
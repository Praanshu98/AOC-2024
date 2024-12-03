import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf-8");

const regex = /((don\'t)|(do)|(mul\(\d{1,3},\d{1,3}\)))/gm;

const matches = input.match(regex);
console.log(matches);

let flag = true;
const numberList = [];

matches.forEach((match) => {
  if (match == "don't") {
    flag = false;
  } else if (match == "do") {
    flag = true;
    return;
  }
  flag &&
    numberList.push(match.replace("mul(", "").replace(")", "").split(","));
});

console.log(numberList);

const sum = numberList.reduce(
  (acc, [a, b]) => acc + parseInt(a) * parseInt(b),
  0
);

console.log(sum);

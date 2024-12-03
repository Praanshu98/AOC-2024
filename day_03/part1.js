import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf-8");

const regex = /mul\(\d{1,3},\d{1,3}\)/gm;
const matches = input.match(regex);

const numberList = [];

matches.forEach((match) => {
  numberList.push(match.replace("mul(", "").replace(")", "").split(","));
});

const sum = numberList.reduce(
  (acc, [a, b]) => acc + parseInt(a) * parseInt(b),
  0
);

console.log(sum);

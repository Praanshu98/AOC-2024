import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf8");
const inputList = input.split("\n");

let safeListCount = 0;

inputList.forEach((report) => {
  const levels = report.split(" ").map((level) => Number(level));

  // Check for non duplicates
  if (new Set(levels).size === levels.length) {
    let descending = true;
    let ascending = true;

    for (let index = 1; index < levels.length; index++) {
      // Check of difference between each level
      if (Math.abs(levels[index - 1] - levels[index]) > 3) return;

      // Check if ascending or descending
      if (levels[index - 1] < levels[index]) {
        descending = false;
      }
      if (levels[index - 1] > levels[index]) {
        ascending = false;
      }
    }
    if (ascending || descending) safeListCount++;
  }
});

console.log(safeListCount);

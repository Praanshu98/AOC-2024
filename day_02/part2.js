import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf8");
const inputList = input.split("\n");

let safeListCount = 0;

const isSafe = (levels) => {
  if (new Set(levels).size === levels.length) {
    // Check for non duplicates
    let descending = true;
    let ascending = true;

    for (let index = 1; index < levels.length; index++) {
      // Check of difference between each level
      if (Math.abs(levels[index - 1] - levels[index]) > 3) return false;

      // Check if ascending or descending
      if (levels[index - 1] < levels[index]) {
        descending = false;
      }
      if (levels[index - 1] > levels[index]) {
        ascending = false;
      }
    }
    return ascending || descending;
  }
  return false;
};

const recheckIfSafe = (levels) => {
  for (let index = 0; index < levels.length; index++) {
    if (isSafe([...levels.slice(0, index), ...levels.slice(index + 1)])) {
      return true;
    }
  }
  return false;
};

inputList.forEach((report) => {
  const levels = report.split(" ").map((level) => Number(level));

  if (isSafe(levels)) {
    safeListCount++;
  } else if (recheckIfSafe(levels)) {
    safeListCount++;
  }
});

console.log(safeListCount);

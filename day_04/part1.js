import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf-8");

const data = input.split("\n").map((line) => line.split(""));

/* 
[
  [1, 2, 3, 4]
  [5, 6, 7, 8]
  [9, 10, 11, 12]
]
*/

const forwardString = "XMAS";

const foundList = [];

for (let y_index = 0; y_index < data[0].length; y_index++) {
  for (let x_index = 0; x_index < data.length; x_index++) {
    let check;
    if (data[y_index][x_index] == "X") {
      // Check if the next 4 characters are XMAS
      try {
        check = [
          data[y_index][x_index],
          data[y_index][x_index + 1],
          data[y_index][x_index + 2],
          data[y_index][x_index + 3],
        ];
        if (check.join("") == forwardString) {
          foundList.push([
            [[y_index], [x_index]].join(""),
            [[y_index], [x_index + 1]].join(""),
            [[y_index], [x_index + 2]].join(""),
            [[y_index], [x_index + 3]].join(""),
          ]);
        }
      } catch (error) {}
      // Check if the previous 4 characters are XMAS
      try {
        check = [
          data[y_index][x_index],
          data[y_index][x_index - 1],
          data[y_index][x_index - 2],
          data[y_index][x_index - 3],
        ];
        if (check.join("") == forwardString) {
          foundList.push([
            [[y_index], [x_index]].join(""),
            [[y_index], [x_index - 1]].join(""),
            [[y_index], [x_index - 2]].join(""),
            [[y_index], [x_index] - 3].join(""),
          ]);
        }
      } catch (error) {}
      // Check if above 4 characters are XMAS
      try {
        check = [
          data[y_index][x_index],
          data[y_index - 1][x_index],
          data[y_index - 2][x_index],
          data[y_index - 3][x_index],
        ];

        if (check.join("") == forwardString) {
          foundList.push([
            [[y_index], [x_index]].join(""),
            [[y_index - 1], [x_index]].join(""),
            [[y_index - 2], [x_index]].join(""),
            [[y_index - 3], [x_index]].join(""),
          ]);
        }
      } catch (error) {}
      // Check if below 4 characters are XMAS
      try {
        check = [
          data[y_index][x_index],
          data[y_index + 1][x_index],
          data[y_index + 2][x_index],
          data[y_index + 3][x_index],
        ];

        if (check.join("") == forwardString) {
          foundList.push([
            [[y_index], [x_index]].join(""),
            [[y_index + 1], [x_index]].join(""),
            [[y_index + 2], [x_index]].join(""),
            [[y_index + 3], [x_index]].join(""),
          ]);
        }
      } catch (error) {}
      // Check if forward down diagonal is XMAS
      try {
        check = [
          data[y_index][x_index],
          data[y_index + 1][x_index + 1],
          data[y_index + 2][x_index + 2],
          data[y_index + 3][x_index + 3],
        ];
        if (check.join("") == forwardString) {
          foundList.push([
            [[y_index], [x_index]].join(""),
            [[y_index + 1], [x_index + 1]].join(""),
            [[y_index + 2], [x_index + 2]].join(""),
            [[y_index + 3], [x_index + 3]].join(""),
          ]);
        }
      } catch (error) {}
      // Check if forward up diagonal is XMAS
      try {
        check = [
          data[y_index][x_index],
          data[y_index - 1][x_index + 1],
          data[y_index - 2][x_index + 2],
          data[y_index - 3][x_index + 3],
        ];
        if (check.join("") == forwardString) {
          foundList.push([
            [[y_index], [x_index]].join(""),
            [[y_index - 1], [x_index + 1]].join(""),
            [[y_index - 2], [x_index + 2]].join(""),
            [[y_index - 3], [x_index + 3]].join(""),
          ]);
        }
      } catch (error) {}
      // Check if backward up diagonal is XMAS
      try {
        check = [
          data[y_index][x_index],
          data[y_index - 1][x_index - 1],
          data[y_index - 2][x_index - 2],
          data[y_index - 3][x_index - 3],
        ];

        if (check.join("") == forwardString) {
          foundList.push([
            [[y_index], [x_index]].join(""),
            [[y_index - 1], [x_index - 1]].join(""),
            [[y_index - 2], [x_index - 2]].join(""),
            [[y_index - 3], [x_index - 3]].join(""),
          ]);
        }
      } catch (error) {}
      // Check if backward down diagonal is XMAS
      try {
        check = [
          data[y_index][x_index],
          data[y_index + 1][x_index - 1],
          data[y_index + 2][x_index - 2],
          data[y_index + 3][x_index - 3],
        ];

        if (check.join("") == forwardString) {
          foundList.push([
            [[y_index], [x_index]].join(""),
            [[y_index + 1], [x_index - 1]].join(""),
            [[y_index + 2], [x_index - 2]].join(""),
            [[y_index + 3], [x_index - 3]].join(""),
          ]);
        }
      } catch (error) {}
    }
  }
}

console.log(foundList.length);

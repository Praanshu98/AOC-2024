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

const forwardString = "MAS";
const backwardString = "SAM";

const foundList = [];

for (let y_index = 0; y_index < data[0].length; y_index++) {
  for (let x_index = 0; x_index < data.length; x_index++) {
    let check;
    if (data[y_index][x_index] == "M") {
      // Check if forward down diagonal is MAS
      try {
        check = [
          data[y_index][x_index],
          data[y_index + 1][x_index + 1],
          data[y_index + 2][x_index + 2],
        ];
        if (check.join("") == forwardString) {
          // foundList.push([
          //   [[y_index], [x_index]].join(""),
          //   [[y_index + 1], [x_index + 1]].join(""),
          //   [[y_index + 2], [x_index + 2]].join(""),
          // ]);

          // Check if other side is MAS
          try {
            check = [
              data[y_index][x_index + 2],
              data[y_index + 1][x_index + 1],
              data[y_index + 2][x_index],
            ];
            if (check.join("") == forwardString) {
              foundList.push([
                [
                  [[y_index], [x_index]].join(""),
                  [[y_index + 1], [x_index + 1]].join(""),
                  [[y_index + 2], [x_index + 2]].join(""),
                ],
                [
                  [[y_index], [x_index]].join(""),
                  [[y_index + 1], [x_index + 1]].join(""),
                  [[y_index + 2], [x_index + 2]].join(""),
                ],
              ]);
            }
          } catch (error) {}

          // Check if other side is SAM
          try {
            check = [
              data[y_index][x_index + 2],
              data[y_index + 1][x_index + 1],
              data[y_index + 2][x_index],
            ];
            if (check.join("") == backwardString) {
              foundList.push([
                [
                  [[y_index], [x_index]].join(""),
                  [[y_index + 1], [x_index + 1]].join(""),
                  [[y_index + 2], [x_index + 2]].join(""),
                ],
                [
                  [[y_index], [x_index]].join(""),
                  [[y_index + 1], [x_index + 1]].join(""),
                  [[y_index + 2], [x_index + 2]].join(""),
                ],
              ]);
            }
          } catch (error) {}
        }
      } catch (error) {}
    }
    if (data[y_index][x_index] == "S") {
      // Check if forward down diagonal is SAM
      try {
        check = [
          data[y_index][x_index],
          data[y_index + 1][x_index + 1],
          data[y_index + 2][x_index + 2],
        ];
        if (check.join("") == backwardString) {
          // Check if other side is MAS
          try {
            check = [
              data[y_index][x_index + 2],
              data[y_index + 1][x_index + 1],
              data[y_index + 2][x_index],
            ];
            if (check.join("") == forwardString) {
              foundList.push([
                [
                  [[y_index], [x_index]].join(""),
                  [[y_index + 1], [x_index + 1]].join(""),
                  [[y_index + 2], [x_index + 2]].join(""),
                ],
                [
                  [[y_index], [x_index]].join(""),
                  [[y_index + 1], [x_index + 1]].join(""),
                  [[y_index + 2], [x_index + 2]].join(""),
                ],
              ]);
            }
          } catch (error) {}

          // Check if other side is SAM
          try {
            check = [
              data[y_index][x_index + 2],
              data[y_index + 1][x_index + 1],
              data[y_index + 2][x_index],
            ];
            if (check.join("") == backwardString) {
              foundList.push([
                [
                  [[y_index], [x_index]].join(""),
                  [[y_index + 1], [x_index + 1]].join(""),
                  [[y_index + 2], [x_index + 2]].join(""),
                ],
                [
                  [[y_index], [x_index]].join(""),
                  [[y_index + 1], [x_index + 1]].join(""),
                  [[y_index + 2], [x_index + 2]].join(""),
                ],
              ]);
            }
          } catch (error) {}
        }
      } catch (error) {}
    }
  }
}

console.log(foundList.length);

/*

M * S        
* A *
M * S

*/

/*

.   M   .   S   .   .   .   .   .   .
.   .   A   .   .   M   S   M   S   .
.   M   .   S   .   M   A   A   .   .
.   .   A   .   A   S   M   S   M   .
.   M   .   S   .   M   .   .   .   .
.   .   .   .   .   .   .   .   .   .
S   .   S   .   S   .   S   .   S   .
.   A   .   A   .   A   .   A   .   .
M   .   M   .   M   .   M   .   M   .
.   .   .   .   .   .   .   .   .   .


*/

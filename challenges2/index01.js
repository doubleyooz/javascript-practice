"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'oddNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER l
 *  2. INTEGER r
 */

function oddNumbers(l, r) {
  // Write your code here
  const arr = [];
  let smallest = l < r ? l : r;
  let greatest = l < r ? r : l;

  while (smallest <= greatest) {
    if (smallest % 2 !== 0) arr.push(smallest);
    smallest++;
  }

  return arr;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const l = parseInt(readLine().trim(), 10);

  const r = parseInt(readLine().trim(), 10);

  const result = oddNumbers(l, r);

  ws.write(result.join("\n") + "\n");

  ws.end();
}

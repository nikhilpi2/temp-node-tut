const { readFileSync } = require("fs");
const first = readFileSync("./content/first.txt", "utf-8");
console.log(first);

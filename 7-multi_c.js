const { argv } = require("node:process");

let num = parseInt(argv[2]);

if (!num) {
  console.log("Missing number of occurrences");
} else {
  if (num < 1) {
    return;
  }
  while (num) {
    console.log("C is fun");
    num--;
  }
}

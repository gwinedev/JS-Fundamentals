const { argv } = require("node:process");

let num = argv[2];

if (!parseInt(argv[2])) {
  console.log("Missing number of occurrences");
} else {
  while (num) {
    console.log("C is fun");
    num--;
  }
}

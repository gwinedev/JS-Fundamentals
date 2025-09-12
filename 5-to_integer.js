const { argv } = require("node:process");

const len = argv.length;

if (len <= 2) {
  console.log("Not a number");
} else {
  num = parseInt(argv[2]);
  if (num) {
    console.log(`My number: ${num}`);
  } else {
    console.log("Not a number");
  }
}

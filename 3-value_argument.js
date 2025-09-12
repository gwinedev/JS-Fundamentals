const { argv } = require("node:process");
let length = 0;

for (length; argv[length]; length++);

if (length <= 2) {
  console.log("No argument");
} else {
  console.log(argv[2]);
}

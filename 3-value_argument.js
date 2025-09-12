const { argv } = require("node:process");
let length = 0;

for (length; argv[length]; length++);

if (length == 2) {
  console.log("No argument");
} else {
  while (argv[length]) {
    console.log(argv[length]);
  }
}

const { argv } = require("node:process");
let length = 0;

for (length; argv[length]; length++);

if (length <= 2) {
  console.log("No argument");
} else {
  const newArgs = argv.slice(2).join(" ");

  console.log(newArgs);
}

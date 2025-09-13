const { argv } = require("node:process");

const first = parseInt(argv[2]);

if (!first) {
  console.log("Missing size");
}

for (let i = 0; i < first; i++) {
  let row = "";
  for (let j = 0; j < first; j++) {
    row += "X";
  }
  console.log(row);
}

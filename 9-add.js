const { argv } = require("node:process");

const first = parseInt(argv[2]);
const second = parseInt(argv[3]);

function add(a, b) {
  const num = a + b;
  console.log(num);
}

add(first, second);

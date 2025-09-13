const { argv } = require("node:process");

const first = parseInt(argv[2]);

function fact(num) {
  if (isNaN(num)) {
    return 1;
  }
  if (num === 0 || num === 1) {
    return 1;
  }
  const ans = num * fact(num - 1);
  return ans;
}

console.log(fact(first));

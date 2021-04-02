const ratioOfNum = require("../ratio/index");
const factorialOfNum = require("../factorial/index");

// console.log(factorialOfNumber);
// console.log(ratioOfTwoNumbers);

const ratioAndFactorial = (num1, num2, num3) => {
  let ratio = ratioOfNum(num1, num2);
  let factorial = factorialOfNum(num3);
  return {
    ratio: ratio,
    factorial: factorial,
  };
};

// console.log(ratioAndFactorial(4, 2, 5));
module.exports = ratioAndFactorial;

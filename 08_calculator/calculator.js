const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arrayOfNums) {
	let sumOfNums = 0;
  arrayOfNums.forEach(
    (num) => {
      sumOfNums += num;
    }
  )
  return sumOfNums;
};

const multiply = function(arrayOfNums) {
  let answer = 1;
  arrayOfNums.forEach(
    (num) => {
      answer *= num;
    }
  )
  return answer;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	if (num == 0) return 1;
  let answer = 1;
  for (let i = num; i >= 1; i--) {
    answer *= i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const sumAll = function(num1, num2) {
    if (
        !Number.isInteger(num1) ||
        !Number.isInteger(num2) ||
        num1 < 0 ||
        num2 < 0
    ) {
        return "ERROR";
    }

    let sum = 0;
    let iSmall;
    let iBig;

    if (num1 <= num2) {
        iSmall = num1;
        iBig = num2;
    } else {
        iSmall = num2;
        iBig = num1;
    }

    for (let i = iSmall; i <= iBig; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

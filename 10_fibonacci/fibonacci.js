const fibonacci = function(num) {
    if (+num < 0) return "OOPS";
    if (+num == 0) return 0; 
    
    let answer = [];

    for (let i = 0; i < +num; i++) {
        if (i == 0) {
            answer.push(1);
            continue;
        }
        if (i == 1) {
            answer.push(1);
            continue;
        }

        let nextNumber = answer[i - 2] + answer[i - 1];
        answer.push(nextNumber);
    }

    return answer[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;

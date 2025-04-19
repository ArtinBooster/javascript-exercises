const repeatString = function(text, number) {
    let output = "";
    if (number >= 0) {
        for (let i = 0; i < number; i++) {
            output += text;
        }
        return output;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;

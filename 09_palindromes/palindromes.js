const palindromes = function (str) {
    let originalStr = [];
    let reversedStr = [];

    str.toLowerCase().split("").forEach(
        (letter) => {
            if (
                letter != " " &&
                letter != "!" &&
                letter != "," &&
                letter != "."
            ) {
                originalStr.push(letter);
                reversedStr.push(letter);
            }
        }
    )

    originalStr = originalStr.join("");
    reversedStr = reversedStr.reverse().join("");

    return (originalStr == reversedStr);
};

// Do not edit below this line
module.exports = palindromes;

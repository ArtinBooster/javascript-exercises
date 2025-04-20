const removeFromArray = function(customArray, ...args) {
    const newArray = [];
    for (item of customArray) {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

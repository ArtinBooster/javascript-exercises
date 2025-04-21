const leapYears = function(givenYear) {
    const isYearDivBy4 = givenYear % 4 == 0;
    const isYearDivBy400 = givenYear % 400 == 0;
    const isYearCentury = givenYear % 100 == 0;
    if (
        isYearDivBy4 &&
        (!isYearCentury || isYearDivBy400)
    ) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

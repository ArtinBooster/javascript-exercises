const convertToCelsius = function(degree) {
  let degreeInCelsius = (degree - 32) * 5/9;
  degreeInCelsius = Math.round(degreeInCelsius * 10) / 10;
  return degreeInCelsius;
};

const convertToFahrenheit = function(degree) {
  let degreeInFahrenheit = degree * 9/5 + 32;
  degreeInFahrenheit = Math.round(degreeInFahrenheit * 10) / 10;
  return degreeInFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

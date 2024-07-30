const convertToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit - 32) / 1.8;
  celsius = celsius.toFixed(1);
  let conversion = parseFloat(celsius);
  return conversion;
};

const convertToFahrenheit = function (celsius) {
  let fahrenheit = (celsius * 1.8) + 32;
  fahrenheit = fahrenheit.toFixed(1);
  let fConversion = parseFloat(fahrenheit);
  return fConversion;

};
//Celsius(°C)= (Fahrenheit(°F)−32) /1.8


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

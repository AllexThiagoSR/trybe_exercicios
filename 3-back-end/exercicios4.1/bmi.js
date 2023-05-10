const readLine = require('readline-sync');

const bmiCalculator = (weight, height) => {
  let heightInMeters = height;
  if (height >= 100) {
    heightInMeters /= 100;
  }
  return (weight / (heightInMeters ** 2)).toFixed(2);
};

const weight = readLine.questionFloat('Digite seu peso em kg: ');
const height = readLine.questionFloat('Digite sua altura em cm ou em m: ')

console.log(bmiCalculator(weight, height));

module.exports = bmiCalculator;

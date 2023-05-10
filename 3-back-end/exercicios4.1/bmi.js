const bmiCalculator = (weight, height) => {
  let heightInMeters = height;
  if (height >= 100) {
    heightInMeters /= 100;
  }
  return (weight / (heightInMeters ** 2)).toFixed(2);
};

console.log(bmiCalculator(74, 171));

module.exports = bmiCalculator;

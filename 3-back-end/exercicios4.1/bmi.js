const readLine = require('readline-sync');

const bmiCalculator = (weight, height) => {
  let heightInMeters = height;
  if (height >= 100) heightInMeters /= 100;
  const bmi = weight / (heightInMeters ** 2);
  const categoryRanges = [
    {
      min: 0,
      max: 18.4,
      category: 'Abaixo do peso (magreza)'
    },
    {
      min: 18.5,
      max: 24.9,
      category: 'Peso normal'
    },
    {
      min: 25,
      max: 29.9,
      category: 'Acima do peso (sobrepeso)'
    },
    {
      min: 30,
      max: 34.9,
      category: 'Obesidade grau I'
    },
    {
      min: 35,
      max: 39.9,
      category: '	Obesidade grau II'
    },
    {
      min: 40,
      max: 0,
      category: 'Obesidade graus III e IV'
    },
  ];

  const category = categoryRanges.reduce((choosedCategory, { min, max, category }) => {
    if (max === 0) return bmi >= min ? category : choosedCategory;
    if (min === 0) return bmi <= max ? category : choosedCategory;
    if (min <= bmi && bmi <= max) return category;
    return choosedCategory;
  }, '');

  return {
    bmi: bmi.toFixed(2),
    category,
  };
};

const weight = readLine.questionFloat('Digite seu peso em kg: ');
const height = readLine.questionFloat('Digite sua altura em cm ou em m: ');

console.log(bmiCalculator(weight, height));

module.exports = bmiCalculator;

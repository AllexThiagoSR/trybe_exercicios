// 2 - Calcule a área total de todos os países.
const countries = require('./countries');
const expectedResult = 4311757;

// Utilizando for
// const getArea = (countries) => {
//   let totalArea = 0;

//   for (const country of countries) {
//     totalArea += country.area;
//   }

//   return totalArea;
// };

// UtilizandoHOF's
const getArea = (countries) => countries.reduce((totArea, currCountry) => totArea + currCountry.area, 0);

console.log(getArea(countries));

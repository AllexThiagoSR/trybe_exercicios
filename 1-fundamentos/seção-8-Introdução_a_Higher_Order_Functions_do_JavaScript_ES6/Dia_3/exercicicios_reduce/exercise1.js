const countries = require('./countries');

// 120797034

// Utilizando for
// const getPopulation = (countries) => {
//   let totalPopulation = 0;
//   for (const country of countries) {
//     totalPopulation += country.population;
//   }
//   return totalPopulation;
// };

// Utilizando HOF's
const getPopulation = (countries) => countries.
reduce((totalPop, currCountry) => totalPop + currCountry.population, 0);

console.log(getPopulation(countries));

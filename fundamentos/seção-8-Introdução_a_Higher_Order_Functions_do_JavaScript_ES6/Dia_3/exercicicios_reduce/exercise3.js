const countries = require('./countries');
//3 - Encontre o país com o maior nome.

// Utilizando for
// const longgestName = (countries) => {
//   let longgest = countries[1];

//   for (let i = 1; i < countries.length; i += 1) {
//     if (longgest.name.length < countries[i].name.length) longgest = countries[i];
//   }
//   return longgest;
// };

// Utilizando HOF's
const longgestName = (countries) => countries.
reduce((longgest, currCountry) => longgest.name.length < currCountry.name.length ? currCountry : longgest);

console.log(longgestName(countries));

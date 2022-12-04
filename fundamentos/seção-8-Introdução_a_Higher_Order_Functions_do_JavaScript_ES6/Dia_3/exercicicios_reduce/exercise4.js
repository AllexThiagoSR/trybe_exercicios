const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

// Sem HOF's sem for
// const countLetter = (array, letter) => {
//   const allStrings = array.join('');
//   const regEx = new RegExp(`${letter}`, 'gi');
//   return allStrings.match(regEx).length;
// }

// Com HOFS
const creatRegExp = (letter) => new RegExp(`${letter}`, 'gi');

const countLetter = (array, letter) => array.
reduce((acc, curr) => acc + curr.match(creatRegExp(letter)).length, 0);

console.log(countLetter(names, 'a'));

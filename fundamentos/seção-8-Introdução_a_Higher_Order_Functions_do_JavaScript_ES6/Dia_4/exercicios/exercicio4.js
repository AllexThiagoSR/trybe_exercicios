const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
  // bornIn: nascido em
];

// const filterPeople = (people) => {
//   const foundPeople = [];
//   for (const person of people) {
//     const { nationality, bornIn } = person;
//     if (nationality === 'Australian' && (bornIn > 1900 && bornIn <= 2000)) foundPeople.push(person);
//   }
//   return foundPeople
// };

const filterPeople = (people) => people
.filter(({ nationality, bornIn }) => nationality === 'Australian' && 1900 < bornIn && bornIn <= 2001);

console.log(filterPeople(people));

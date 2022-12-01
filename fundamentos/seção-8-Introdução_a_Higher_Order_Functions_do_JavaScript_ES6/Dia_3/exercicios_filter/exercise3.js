const books = require('./books');

const expectedResult = [ 'Fundação', 'Duna' ];

// Utilizando for
// const booksByAuthorBirthYear = (books, birthYear) => {
//   const selectedBooks = [];

//   for (const book of books) {
//     const authorBirthYear = book.author.birthYear;
//     if (authorBirthYear === birthYear) selectedBooks.push(book.name);
//   }

//   return selectedBooks
// };

// Utilizando HOF's
const filterBirthYear = (books, birthYear) => books.filter((book) => book.author.birthYear === birthYear);

const booksByAuthorBirthYear = (books, birthYear, filterFunc) => filterFunc(books, birthYear).map((book) => book.name);

const result = booksByAuthorBirthYear(books, 1920, filterBirthYear);

console.log(result);

// 4 - Crie um array que possua apenas os nomes de todas as pessoas autoras de ficção científica ou fantasia e ordene por ordem alfabética.
const books = require('./books');
const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

// Utilizando o for
// const checkGenre = (first, second) => first === second;

// const filterFantasyOrScience = (books) => {
//   const filterdBooks = [];

//   for (const book of books) {
//     if (checkGenre(book.genre, 'Fantasia') || checkGenre(book.genre, 'Ficção Científica')) filterdBooks.push(book);
//   }

//   return filterdBooks;
// };

// const fantasyOrScienceFictionAuthors = (books) => {
//   const filterdBooks = filterFantasyOrScience(books);
//   const authorNames = [];

//   for (const book of filterdBooks) {
//     authorNames.push(book.author.name);
//   }

//   return authorNames.sort();
// };

// Utilizando HOF's
const checkGenre = (first, second) => first === second;

const filterFantasyOrScience = (books) => books.
filter((book) => checkGenre(book.genre, 'Fantasia') || checkGenre(book.genre, 'Ficção Científica'));

const fantasyOrScienceFictionAuthors = (books, filterFunc) => filterFunc(books)
.map((book) => book.author.name).sort();

console.log(fantasyOrScienceFictionAuthors(books, filterFantasyOrScience));

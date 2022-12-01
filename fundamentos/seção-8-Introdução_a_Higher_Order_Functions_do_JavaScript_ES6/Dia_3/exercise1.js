const books = require('./books');

const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  }
];

const checkGenre = (first, second) => first === second; 

// Utilizando o for
// const fantasyOrScienceFiction = (books) => {
//   const selectedBooks = [];

//   for (const book of books) {
//     const bookGenre = book.genre;
//     if (bookGenre === 'Fantasia' || bookGenre === 'Ficção Científica') selectedBooks.push(book);
//   }

//   return selectedBooks;
// };

// Utilizadno HOF - filter
const fantasyOrScienceFiction = (books) => books.
filter((book) => (checkGenre(book.genre, 'Fantasia') || checkGenre(book.genre, 'Ficção Científica')));

// Utilizando HOF - reduce
// const fantasyOrScienceFiction = (books) => books.reduce((finalArray, book) => {
//     if (checkGenre(book.genre, 'Fantasia') || checkGenre(book.genre, 'Ficção Científica')) finalArray.push(book);
//     return finalArray
//   }, []);

console.log(fantasyOrScienceFiction(books));

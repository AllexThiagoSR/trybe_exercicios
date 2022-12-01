const books = require('./books');
const expectedResult = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

// Utilizando for
// const oldBooks = (books) => {
//   const selectedBooks = [];

//   for (const book of books) {
//     const bookAge = 2022 - book.releaseYear;
//     if (bookAge > 60) selectedBooks.push(book);
//   }
  
//   return selectedBooks;
// };

// const oldBooksOrdered = (books) => {
//   return oldBooks(books).sort((book1, book2) => book1.releaseYear - book2.releaseYear);
// };

// // Utilizando filter - duas funções
const oldBooks = (books) => books.filter((book) => 2022 - book.releaseYear > 60);

const oldBooksOrdered = (books) => oldBooks(books).sort((book1, book2) => book1.releaseYear - book2.releaseYear);

// Utilizando filter - uma função
// const oldBooksOrdered = (books) => books.filter((book) => 2022 - book.releaseYear > 60)
// .sort((book1, book2) => book1.releaseYear - book2.releaseYear);

console.log(oldBooksOrdered(books));

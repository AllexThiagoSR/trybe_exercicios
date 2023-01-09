const books = require("./books");

// 5 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

// Utilizando o for
// const oldBooks = (books) => {
//   const booksFiltered = [];

//   for (const book of books) {
//     const bookAge = 2022 - book.releaseYear;
//     if (bookAge > 60) booksFiltered.push(book.name);
//   }

//   return booksFiltered;
// };

// Utilizando HOF's
const oldBooks = (books) => books.filter((book) => 2022 - book.releaseYear > 60)
.map((book) => book.name);

console.log(oldBooks(books));

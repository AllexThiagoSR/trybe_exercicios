const books = require("./books");

const expectedResult = 'O Senhor dos Anéis';

// const authorWith3DotsOnName = (books) => {
//   // Retorna o nome do livro que atender à condição
//   return books.find((book) => {
//     const nome = book.author.name; // Pega o nome do autor
//     // .split(' ') - separa o nome do autor por espaços e retorna uma string que contém cada parte da string que foi separada
//     const filteredNames = nome.split(' ').filter((string) => string[1] === '.'); // Filtra e retorna um array que contenha apenas strings que tenham um ponto no segundo índice dela
//     return filteredNames.length === 3; // Retorna true para se o array filtrado tiver exatamente 3 elementos e false caso contrário
//   }).name;
// };

const authorWith3DotsOnName = (books) => books.find((book) => book.author.name.
  split(' ').filter((string) => string[1] === '.')
  .length === 3).name;

console.log(authorWith3DotsOnName(books));

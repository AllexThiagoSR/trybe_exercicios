const books = require('./list');

const formatedBookNames = (books=[]) => {
  if (!Array.isArray(books)) throw new Error('O parâmetro deve ser um array');
  if (books.length === 0) throw new Error('O parâmetro passado está vazio');
  return books.map((book) => {
    if (typeof book !== 'object') throw new Error('Os valores do array devem ser um objetos');
    return `${book.name} - ${book.genre} - ${book.author.name}`;
  });
}

module.exports = formatedBookNames;

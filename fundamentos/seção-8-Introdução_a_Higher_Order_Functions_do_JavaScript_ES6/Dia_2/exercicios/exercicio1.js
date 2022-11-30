const books = require('./list');

const formatedBookNames = (books=[]) => {
  return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
}

module.exports = formatedBookNames;

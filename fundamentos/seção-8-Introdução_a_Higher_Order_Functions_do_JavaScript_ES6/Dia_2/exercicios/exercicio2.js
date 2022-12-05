const books = require('./list');

const formatedAuthorNamesBirth = (books) => {
  if (!Array.isArray(books)) throw new Error('O tipo da varíavel deve ser array');
  return books.map((book) => {
    if (typeof book !== 'object' && !Array.isArray(book)) throw new Error('Algum dos valores do array não é um objeto');
    return `${book.author.name} - ${book.author.birthYear}`;
  });
};

module.exports = formatedAuthorNamesBirth;

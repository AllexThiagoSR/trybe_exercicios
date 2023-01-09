const books = require('./list');

const nameAndAge = (books) => {
  const nameAndAgeObject = books.map((book) => {
    const age = book.releaseYear - book.author.birthYear;
    return {
      author: book.author.name,
      age,
    };
  });

  return nameAndAgeObject.sort((a, b) => a.age - b.age);
};

module.exports = nameAndAge;

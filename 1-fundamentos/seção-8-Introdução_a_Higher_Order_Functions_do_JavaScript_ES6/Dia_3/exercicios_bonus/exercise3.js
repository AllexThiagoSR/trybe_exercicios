const books = require('./books');

const expectedResult = 43;

const authorAge = (book) => book.releaseYear - book.author.birthYear;

const averageAge = (books) => books.reduce((acc, curr) => acc + authorAge(curr), 0) / books.length;

console.log(averageAge(books));

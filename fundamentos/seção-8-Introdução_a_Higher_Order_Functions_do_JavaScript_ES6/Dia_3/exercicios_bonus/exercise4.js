const books = require('./books');

const longgestNameBook = (books) => books
.reduce((longgest, currBook) => (longgest.name.length < currBook.name.length) ? currBook : longgest);

console.log(longgestNameBook(books));

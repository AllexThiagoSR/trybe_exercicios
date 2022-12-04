const books = require('./books');

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

const reduceNames = (books) => books.
  reduce((acc, curr, index) => acc + (index === books.length - 1 
    ? curr.author.name + '.' : curr.author.name + ', '), '');

console.log(reduceNames(books));

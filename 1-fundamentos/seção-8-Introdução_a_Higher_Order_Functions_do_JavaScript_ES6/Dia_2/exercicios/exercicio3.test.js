const books = require('./list');
const expectedResult = [
  {
    author: 'Isaac Asimov',
    age: 31,
  },
  {
    author: 'H. P. Lovecraft',
    age: 38,
  },
  {
    author: 'Stephen King',
    age: 39,
  },
  {
    author: 'George R. R. Martin',
    age: 43,
  },
  {
    author: 'Frank Herbert',
    age: 45,
  },
  {
    author: 'J. R. R. Tolkien',
    age: 62,
  },
];
const nameAndAge = require('./exercicio3');

it.todo('Testa se formatedAuthorNamesBirth é uma função');
it('Testa o retorno de formatedAuthorNamesBirth', () => {
  expect(nameAndAge(books)).toEqual(expectedResult);
});
it.todo('Testa se formatedAuthorNamesBirth lança os erros adequados');


const formatedAuthorNamesBirth = require('./exercicio2');
const books = require('./list');
const expectedResult = [
  'George R. R. Martin - 1948',
  'J. R. R. Tolkien - 1892',
  'Isaac Asimov - 1920',
  'Frank Herbert - 1920',
  'Stephen King - 1947',
  'H. P. Lovecraft - 1890',
];

it.todo('Testa se formatedAuthorNamesBirth é uma função');
it('Testa o retorno de formatedAuthorNamesBirth', () => {
  expect(formatedAuthorNamesBirth(books)).toEqual(expectedResult);
});
it.todo('Testa se formatedAuthorNamesBirth lança os erros adequados');

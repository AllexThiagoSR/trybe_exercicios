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

it('Testa se formatedAuthorNamesBirth é uma função', () => {
  expect(formatedAuthorNamesBirth).not.toBeUndefined();
  expect(typeof formatedAuthorNamesBirth).toBe('function');
  expect(formatedAuthorNamesBirth).toBeInstanceOf(Function);
});

it('Testa o retorno de formatedAuthorNamesBirth', () => {
  expect(formatedAuthorNamesBirth(books)).toEqual(expectedResult);
});

describe('Testa se formatedAuthorNamesBirth lança os erros adequados', () => {
  it('Teste: Se lança um erro alertando que o tipo da varíavel é inválido', () => {
    expect(() => formatedAuthorNamesBirth(1)).toThrow();
    expect(() => formatedAuthorNamesBirth(1)).toThrow('O tipo da varíavel deve ser array');
  });
  it('Teste: Se lança um erro alertando que o tipo de um dos valores dentro array é inválido', () => {
    expect(() => formatedAuthorNamesBirth([1])).toThrow();
    expect(() => formatedAuthorNamesBirth([{
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    }, 1])).toThrow('Algum dos valores do array não é um objeto');
  });
});

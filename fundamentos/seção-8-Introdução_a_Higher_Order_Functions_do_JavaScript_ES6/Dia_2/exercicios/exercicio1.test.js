const formatedBookNames = require('./exercicio1');
const books = require('./list');
const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

it.todo('Testa se a função existe');

it('Testa o retorno da função formatedBookName', () => {
  expect(formatedBookNames(books)).toEqual(expectedResult);
  expect(formatedBookNames(books)).not.toEqual([]);
  expect(formatedBookNames()).toEqual([]);
  expect(formatedBookNames([])).toEqual([]);
});

it.todo('Testa se são lançados erros (implementar o lançamento de erros)');

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

it('Testa se a função existe', () => {
  expect(typeof formatedBookNames).toBe('function');
  expect(formatedBookNames).toBeInstanceOf(Function);
});

describe('Testa o retorno da função formatedBookName', () => {
  it('Teste: Se quando são passados parâmetros válidos retorno esperado', () => {
    expect(formatedBookNames(books)).toEqual(expectedResult);
  });
  it('Teste: Se quando são passados parâmetros válidos retorno esperado', () => {
    expect(formatedBookNames(books)).not.toEqual([]);
  });
});

describe('Testa se são lançados erros', () => {
  it('Teste: Se lança o erro correto quando não é passado parâmetro nenhum', () => {
    expect(() => formatedBookNames()).toThrow('O parâmetro passado está vazio');
  });

  it('Teste: Se lança o erro correto quando é passado um parâmetro inválido', () => {
    expect(() => formatedBookNames(1)).toThrow('O parâmetro deve ser um array');
  });

  it('Teste: Se lança o erro correto quando é passado um parâmetro inválido', () => {
    expect(() => formatedBookNames([1])).toThrow('Os valores do array devem ser um objetos');
  });
});

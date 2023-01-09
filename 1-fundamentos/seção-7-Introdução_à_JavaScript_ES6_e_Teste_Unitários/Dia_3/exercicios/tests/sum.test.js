const sum = require('../functions/sum.js')

describe('Testes da função sum', () => {
  it('Tests: Se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('Tests: Se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
});

describe('Testes dos erros lançados pela função sum', () => {
  it('Teste: Se retorna um erro se algum dos parâmetros for uma string ex: sum(4, "5")', () => {
    expect(() => {sum(4, '5');}).toThrow();
  });
  it('Teste: Se retorna um erro se algum dos parâmetros for uma string ex: sum(4, "5")', () => {
    expect(() => {sum(4, '5');}).toThrow('parameters must be number');
  });
});

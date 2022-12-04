const { people, verifyAges } = require('../every');

describe('Testa se a função verifyAges realmente existe', () => {
  it('Teste: Se verifyAges realmente existe', () => {
    expect(typeof verifyAges).not.toBe('undefined');
  });

  it('Teste: Se verifyAges é realmente uma função', () => {
    expect(typeof verifyAges).toBe('function');
    expect(verifyAges).toBeInstanceOf(Function);
  });
});

describe('Testa se a função retorna os resultados esperados', () => {
  it('Teste: Se a função retorna false para os parâmetos objeto people e o número 18', () => {
    expect(verifyAges(people, 18)).toBe(false);
    expect(verifyAges(people, 14)).toBe(true);
    expect(verifyAges()).toBe(false);
  });
});

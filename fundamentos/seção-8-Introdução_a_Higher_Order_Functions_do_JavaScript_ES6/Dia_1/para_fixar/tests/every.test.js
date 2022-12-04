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

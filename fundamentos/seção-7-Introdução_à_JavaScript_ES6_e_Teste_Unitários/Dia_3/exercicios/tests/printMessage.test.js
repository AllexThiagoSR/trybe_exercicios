const {info, printMessage} = require('../functions/printMessage.js');

describe('Testes do objeto passado como parâmetro para a função printMessage', () => {
  it('Teste: Se o objeto tem a propriedade "personagem"', () => {
    expect(info). toHaveProperty('personagem');
  });
});

const {info, printMessage} = require('../functions/printMessage.js');

describe('Testes do objeto passado como parâmetro para a função printMessage', () => {
  it('Teste: Se o objeto tem a propriedade "personagem"', () => {
    expect(info). toHaveProperty('personagem');
  });
});

describe('Testes da função printMessage', () => {
  it('Teste: Se o retorno tem a informação "Boas vindas, ", antes de chamar o nome do personagem', () => {
    expect(printMessage(info)).toMatch('Boas vindas, ');
  });
  it('Teste: Se o retorno contém o nome do personagem que está no objeto', () => {
    expect(printMessage(info)).toMatch(info.personagem);
  });
});

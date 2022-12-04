const { RIGHT_ANSWERS, finalPontuation } = require('../exameAutoCorrector');

describe('Testa se a função finalPontuation realmente existe', () => {
  it('Teste: Se finalPontuation existe', () => {
    expect(finalPontuation).not.toBeUndefined();
  });

  it('Teste: Se finalPontuation é realmente uma função', () => {
    expect(typeof finalPontuation).toBe('function');
    expect(finalPontuation).toBeInstanceOf(Function);
  });
});

describe('Testa os retornos da função final pontuation', () => {
  it("Teste: Se ao passar RIGHT_ANSWERS e ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'] o retono é 5", () => {
    expect(finalPontuation(RIGHT_ANSWERS, ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'])).toBe(5);
    expect(finalPontuation(RIGHT_ANSWERS, ['a', 'n.a', 'b', 'd', 'a', 'c', 'n.a', 'a', 'd', 'b'])).toBe(5);
  });

  it("Teste: Se ao passar RIGHT_ANSWERS e ['A', 'N.A', 'C', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'] o retono é 3.5", () => {
    expect(finalPontuation(RIGHT_ANSWERS, ['A', 'N.A', 'C', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'])).toBe(3.5);
    expect(finalPontuation(RIGHT_ANSWERS, ['a', 'n.a', 'c', 'd', 'a', 'c', 'n.a', 'a', 'd', 'b'])).toBe(3.5);
  });
});

describe('Testa os lançamentos de erros da função finalPontuation', () => {
  it('Teste: Se lança o erro "Algum dos parâmetros necessários não foi informado" se não for passado algum dos parâmetros', () => {
    expect(() => finalPontuation()).toThrow();
    expect(() => finalPontuation()).toThrow("Algum dos parâmetros necessários não foi informado");
    expect(() => finalPontuation(RIGHT_ANSWERS)).toThrow("Algum dos parâmetros necessários não foi informado");
  });

  it('Teste: Se lança o erro "A quantidade de respostas não coincidem" se o tamanho dos arrays passados forem diferentes', () => {
    expect(() => finalPontuation(RIGHT_ANSWERS, ['A', 'N.A', 'C', 'D', 'A', 'C', 'N.A', 'A', 'D'])).toThrow();
    expect(() => finalPontuation(RIGHT_ANSWERS, ['A', 'N.A', 'C', 'D', 'A', 'C', 'N.A', 'A'])).toThrow("A quantidade de respostas não coincidem");
    expect(() => finalPontuation(RIGHT_ANSWERS, ['C', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'])).toThrow("A quantidade de respostas não coincidem");
  });
});

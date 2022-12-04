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

  it("Teste: Se ao passar RIGHT_ANSWERS e ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'] o retono é 5", () => {
    expect(finalPontuation(RIGHT_ANSWERS, ['A', 'N.A', 'C', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'])).toBe(3.5);
    expect(finalPontuation(RIGHT_ANSWERS, ['a', 'n.a', 'c', 'd', 'a', 'c', 'n.a', 'a', 'd', 'b'])).toBe(3.5);
  });
});

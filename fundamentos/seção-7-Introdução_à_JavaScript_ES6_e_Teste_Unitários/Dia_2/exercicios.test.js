const {myRemove, myFizzBuzz} = require('./exercicios.js');

describe('Testes da função exercicio 1', () => {
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    const array = [1, 2, 3, 4];
    const numberToRemove = 3;

    expect(myRemove(array, numberToRemove)).not.toContain(numberToRemove);
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    const array = [1, 2, 3, 4];
    const numberToRemove = 3;

    expect(myRemove(array, numberToRemove)).not.toEqual(array);
  });
});

describe('Testes da função do exercício 2', () => {
  it('Testa se for passado um número divisível por 5 e por 3 retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Testa se for passado um valor divisível apenas por 3 retorna "fizz"', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });
});

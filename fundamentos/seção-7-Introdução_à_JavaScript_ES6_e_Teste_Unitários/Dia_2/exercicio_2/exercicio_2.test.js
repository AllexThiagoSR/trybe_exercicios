const myFizzBuzz = require('./exercicio_2.js');

it('Testa se for passado um número divisível por 5 e por 3 retorna "fizzbuzz"', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

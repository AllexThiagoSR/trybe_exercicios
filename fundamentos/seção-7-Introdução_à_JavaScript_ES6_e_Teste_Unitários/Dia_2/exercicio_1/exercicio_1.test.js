const myRemove = require('./exercicio_1.js');

console.log(myRemove);

it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
  const array = [1, 2, 3, 4];
  const numberToRemove = 3;

  expect(myRemove(array, numberToRemove)).not.toContain(numberToRemove);
});

const myRemove = require('./exercicio_1.js');

console.log(myRemove);

test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
  const array = [1, 2, 3, 4];
  const numberToRemove = 3;

  expect(myRemove(array, numberToRemove)).not.toContain(numberToRemove);
});

it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
  const array = [1, 2, 3, 4];
  const numberToRemove = 3;

  expect(myRemove(array, numberToRemove)).not.toEqual(array)
});

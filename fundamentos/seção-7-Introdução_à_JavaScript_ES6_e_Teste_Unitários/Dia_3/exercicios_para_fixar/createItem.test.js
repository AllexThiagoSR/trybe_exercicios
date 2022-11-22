const createItem = require('./createItem');
describe('a função createItem', () => {
  it('Teste: Se a createItem cria um item válido', () => {
    expect(createItem('banana', 'kg', 1.99, 20)).toEqual({ name: 'banana', unit: 'kg', price: 1.99, quantity: 20 });
  });
  it('Teste: Se ao não ser enviada uma quantidade utiliza zero como quantidade padrão', () => {
    expect(createItem('banana', 'kg', 1.99)).toHaveProperty('quantity', 0);
  });
  it('Teste: Se lança um erro quando não recebe parâmetros', () => {
    expect(() => {createItem()}).toThrow(Error);
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => {createItem(1.99, 'kg', 'banana', 20);}).toThrow(new Error('O nome do item deve ser uma string'));
  });
  it.todo('Lança um erro se o preço é negativo');
  it.todo('Lança um erro se o preço é zero');
});

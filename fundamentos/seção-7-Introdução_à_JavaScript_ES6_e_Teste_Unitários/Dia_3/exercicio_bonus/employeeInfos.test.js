const {professionalBoard, searchEmployee} = require('./employeeInfos.js');

describe('Testes do objeto que é um dos parâmetros da função searchEmployee', () => {
  it('Teste: Se a constante é realmente um objeto', () => {
    expect(Array.isArray(professionalBoard)).toBe(true);
  });
});

describe('Testes da função', () => {
  it('Teste: Se searchEmployee é um função', () => {
    expect(searchEmployee).toBeDefined();
    expect(typeof searchEmployee).toBe('function');
  });
});

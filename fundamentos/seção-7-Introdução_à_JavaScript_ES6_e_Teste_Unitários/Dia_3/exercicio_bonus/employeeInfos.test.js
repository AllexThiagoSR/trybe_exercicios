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
  describe('Testa se as com as informações certas a função retorna o esperado', () => {
    it('Teste: Se searchEmployee retorna o resultado esperado quan forem passados professionalBoard, 4456-4, specialities', () => {
      expect(searchEmployee(professionalBoard, '4456-4', 'specialities')).toEqual(professionalBoard[2].specialities);
  
    });
    it('Teste: Se searchEmployee retorna o resultado esperado quan forem passados professionalBoard, 9852-2-2, lastName', () => {
      expect(searchEmployee(professionalBoard, '9852-2-2', 'lastName')).toEqual(professionalBoard[4].lastName);
  
    });
    it('Teste: Se searchEmployee retorna o resultado esperado quan forem passados professionalBoard, 5569-4, firstName', () => {
      expect(searchEmployee(professionalBoard, '5569-4', 'firstName')).toEqual(professionalBoard[1].firstName);
  
    });
  });
});

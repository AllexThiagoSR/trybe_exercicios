// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa

const isObject = (object) => {
  if (typeof object !== 'object') throw new Error('Esse array não é inteiramente de objetos');
};

const searchEmployee = (professionalBoard, id, detail) => {
  for (let index = 0; index < professionalBoard.length; index += 1) {
    isObject(professionalBoard[index]);
    if (professionalBoard[index].id === id) {
      if (professionalBoard[index][detail] === undefined) throw new Error('Informação indisponível');
      return professionalBoard[index][detail];
    }
  }
  throw new Error('ID não identificada');
};
// searchEmployee(professionalBoard, '5569-4', 'lastName');
module.exports = {professionalBoard, searchEmployee};

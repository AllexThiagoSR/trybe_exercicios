const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const checkObject = (object) => {
  if (typeof object === 'object') {
    return Object.keys(object);
  }
  throw new Error('O parâmetro deve ser um objeto');
};

const checkObjectValues = (object) => {
  if (typeof object === 'object') {
    return Object.values(object);
  }
  throw new Error('O parâmetro deve ser um objeto');
};

const checkNumber = (number) => {
  if (typeof number === 'number') {
    return number;
  }
  throw new Error('Esse parâmetro deve ser numérico');
};

const sum = (numbers) => {
  let total = 0;

  for (const num of numbers) {
    total += checkNumber(num);
  }
  return total;
};

const quantity = (object, lesson) => {
  try {
    const lessons = checkObjectValues(object);
    const students = [];
    lessons.forEach((object) => {
      checkObject(object);
      if (object.materia === lesson) {
        students.push(object.numeroEstudantes);
      }
    });
    return sum(students);
  } catch (error) {
    console.log(error.message);
  }
};

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3}); // Desse modo o objeto que esta sendo criado assim {objeto1, objeto2, objeto3}, é criado automaticamente uma chave com o mesmo nome da constante ou variável que guarda o objeto, isso funciona para todos os tipos de primitivos.

console.log(quantity(allLessons, 'Matemática'));

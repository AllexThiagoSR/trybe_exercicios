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

const eachKey = (object) => {
  const keys = Object.keys(object);
  for (let index of keys) {
    console.log(index);
  }
};

const eachValue = (object) => {
  const values = Object.values(object);
  for (const value of values) {
    console.log(value);
  }
};

const objectLength = (object) => {
  return Object.keys(object).length;
};

const addProperty = (object, key, value) => {
  object[key] = value;
};

const estudantsNumber = (object) => {
  try {
    const keys = checkObject(object);
    let total = 0;
    for (const key of keys) {
      total += object[key].numeroEstudantes;
    }
    return total;
  } catch (error) {
    console.log(error.message);
  }
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

const getValueByNumber = (object, index) => {
  try {
    const values = checkObjectValues(object);
    return values[checkNumber(index)];
  } catch (error) {
    console.log(error.message);
  }
};

addProperty(lesson2, 'turno', 'noite');

// console.log(lesson2);

// eachKey(lesson1);

// console.log(objectLength(lesson1));

// eachValue(lesson2);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3}); // Desse modo o objeto que esta sendo criado assim {objeto1, objeto2, objeto3}, é criado automaticamente uma chave com o mesmo nome da constante ou variável que guarda o objeto, isso funciona para todos os tipos de primitivos.

// let variavel = 'isso é uma variável'; // Declarei uma variável
// const bejeto = { a: 1, b: 2, c:3, variavel}; // Se eu não pôr do jeito convêncional chave: valor, e o o que eu desejo inserir for uma variável ou constante declarada antes isso é considerado uma entrada inteira de chave: valor, a chave será o nome da variável ou constante e o valor será o valor que atribui a ela
// console.log(bejeto);

// console.log(allLessons);

// console.log(estudantsNumber(allLessons));

console.log(getValueByNumber(lesson1, 1));

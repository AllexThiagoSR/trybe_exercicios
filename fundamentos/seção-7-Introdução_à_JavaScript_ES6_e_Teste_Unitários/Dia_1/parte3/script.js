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

addProperty(lesson2, 'turno', 'noite');

// console.log(lesson2);

// eachKey(lesson1);

// console.log(objectLength(lesson1));

// eachValue(lesson2);

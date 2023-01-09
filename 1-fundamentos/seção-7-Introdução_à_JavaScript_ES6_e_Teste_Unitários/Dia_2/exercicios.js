function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

const mapString = (objectMap, string) => {
  const splitString = string.split('');
  const mappedArray = [];
  for (let index = 0; index < splitString.length; index += 1) {
    const character = splitString[index];
    const mappedValue = objectMap[character];
    
    if (mappedValue) {
      mappedArray.push(mappedValue);
    } else {
      mappedArray.push(character);
    }
  }
  return mappedArray.join('');
};

const encode = (string) => {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return mapString(map, string);
};

const decode = (string) => {
  const map = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return mapString(map, string);
};

const techList = (techList, name) => {
  const list = [];

  if (techList.length === 0 || !name) {
    return 'Vazio!';
  } else if (typeof name !== 'string') {
    throw new Error('O nome deve ser uma string');
  }
  for (const tech of techList.sort()) {
    list.push({
      tech,
      name,
    });
  }
  return list;
};

const sum = (nums) => {
  let total = 0;

  for (const num of nums) {
    total += num;    
  }
  return total;
};

const hydrate = (drinksInfo) => {
  const drinksNums = [];

  if (typeof drinksInfo !== 'string') throw new Error('As informações sobre os drinks consumidos devem estar em uma string');
  if (!drinksInfo) throw new Error('Informações inválidas');
  drinksInfo.match(/[1-9]/gi).forEach((drink) => {
    drinksNums.push(Number(drink));
  });
  const total = sum(drinksNums);
  
  if (total === 1) return '1 copo de água';
  if (total > 1) return `${total} copos de água`;
};
// hydrate('1 cachaça, 5 cervejas e 1 copo de vinho');
module.exports = {myFizzBuzz, myRemove, encode, decode, techList, hydrate};

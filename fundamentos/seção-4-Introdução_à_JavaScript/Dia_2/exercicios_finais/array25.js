const numbers = [];

for(let i = 1; i <= 25; i += 1){
  numbers.push(i);
}

for(let i of numbers){
  console.log(i + ' / ' + 2 + ' = ' + (i / 2));
}

console.log('Array criado: ', numbers);
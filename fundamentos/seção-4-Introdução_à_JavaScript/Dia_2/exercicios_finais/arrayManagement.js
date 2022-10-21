const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media;
let biggerValue;

for(let number of numbers){
  console.log(number);
  sum += number;
  if(number > biggerValue || numbers.indexOf(number) === 0){
    biggerValue = number;
  }
}

media = sum / numbers.length
console.log('Soma: ' + sum);
console.log('Média: ' + media)

if(media > 20){
  console.log('Valor maior que 20');
}else {
  console.log('Valor menor ou igual a 20');
}

console.log('Maior valor: ' + biggerValue);

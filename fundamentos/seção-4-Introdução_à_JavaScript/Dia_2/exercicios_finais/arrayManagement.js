const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media;
let biggerValue;
let howMuchOdd = 'Nenhum valor ímpar encontrado';
let lowerValue;

for(let number of numbers){
  
  //exibe os valores do array
  console.log(number);
  
  //soma os valores do array 1 por 1
  sum += number;

  //encontra o maior valor
  if(number > biggerValue || numbers.indexOf(number) === 0){
    biggerValue = number;
  }

  //encontra o menor valor
  if(number < lowerValue || numbers.indexOf(number) === 0){
    lowerValue = number;
  }

  //conta a quantidade de valor ímpares
  if(howMuchOdd === 'Nenhum valor ímpar encontrado' && number % 2 !== 0){
    howMuchOdd = 1;
  }else if(number % 2 !== 0){
    howMuchOdd += 1;
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

console.log('Menor valor: ' + lowerValue);

console.log('Quantidade de números ímpares: ' + howMuchOdd);

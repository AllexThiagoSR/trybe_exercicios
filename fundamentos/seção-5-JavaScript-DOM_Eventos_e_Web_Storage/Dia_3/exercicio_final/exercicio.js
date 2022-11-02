let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let maiorValor = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
  soma = soma + numbers[index];
  // soma += numbers[index];
}

let media = soma / numbers.length;

if (media > 20) {
  console.log('Valor maior que 20');
}else {
  console.log('Valor menor ou igual a 20');
}

for (let index = 1; index < numbers.length; index += 1) {
  if (maiorValor < numbers[index]) {
    maiorValor = numbers[index];
  } 
}

console.log(maiorValor);

let contadorImpar = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    contadorImpar += 1;
  }
}
if (contadorImpar === 0) {
  console.log('nenhum valor impar encontrado');
}else {
  console.log(contadorImpar);
}

let menorValor = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < menorValor) {
    menorValor = numbers[index];
  }
}

console.log(menorValor);

let numeros = [];

for (let numero = 1; numero <= 25; numero += 1){
  numeros.push(numero);
}

console.log(numeros);

for (let index = 0; index < numeros.length; index += 1) {
  console.log(numeros[index] / 2);
}
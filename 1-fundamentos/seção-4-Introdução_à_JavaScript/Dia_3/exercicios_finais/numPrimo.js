let largestPrime = 1;

for(let i = 2; i <=  50; i += 1){
  let counter = 0;
  for(let j = 1; j <= i; j += 1){
    if(i % j === 0){
      counter += 1;
    }
  }
  if(counter <= 2 && i > largestPrime){
    largestPrime = i;
  }
}

console.log('Maior número primo entre 2 e 50: ', largestPrime);
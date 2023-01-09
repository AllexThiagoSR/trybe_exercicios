let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i = 1; i < numbers.length; i += 1){
  for(let n = 1;n < numbers.length; n += 1){
      if(numbers[n - 1] < numbers[n]){
        const number = numbers[n - 1];
        numbers[n - 1] = numbers[n];
        numbers[n] = number;
      }
  }
}

console.log(numbers);

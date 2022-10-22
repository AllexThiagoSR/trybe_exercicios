const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
const newNumbers = [];

for(let n = 1;n < numbers.length; n += 1){
    newNumbers.push(numbers[n - 1] * numbers[n]);
    if(numbers[n + 1] === undefined){
      newNumbers.push(numbers[n] * 2);
    }
}

console.log(numbers);
console.log(newNumbers);

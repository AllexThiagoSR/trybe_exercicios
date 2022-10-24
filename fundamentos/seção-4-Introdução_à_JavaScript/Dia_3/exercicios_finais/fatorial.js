const num = 10;
let fat = 1;

for(let i = num; i >= 1; i -= 1){
  fat *= i;
}

console.log(fat);
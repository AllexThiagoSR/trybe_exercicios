function sumUntillN(n){
  let sum = 0;

  for(let i = 1; i <= n; i += 1){
    sum += i;
  }
  return sum;
}


console.log(sumUntillN(5));
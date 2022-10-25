function biggerNumber(a, b){
  if(a > b){
    return a;
  }else if(a < b){
    return b;
  }else{
    return 'Os valores são iguais.'
  }
}


console.log(biggerNumber(3, 3));
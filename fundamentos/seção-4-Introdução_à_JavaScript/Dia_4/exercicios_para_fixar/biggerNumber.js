function biggerNumber(a, b, c){
  if(a >= b && a >= c){
    return a;
  }else if(b >= a && b >= c){
    return b;
  }else if(c >= a && c >= b){
    return c;
  }else{
    return 'Os valores são iguais.'
  }
}


console.log(biggerNumber(3, 3, 5));
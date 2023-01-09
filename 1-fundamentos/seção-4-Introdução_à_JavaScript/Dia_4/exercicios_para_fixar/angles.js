function angles(a, b, c){
  if(a < 0 || b < 0 || c < 0){
    return 'Error';
  }else{
    if(a + b + c === 180){
      return true;
    }else if(a + b + c !== 180){
      return false;
    }
  }
}


console.log(angles(20, 60, 10));
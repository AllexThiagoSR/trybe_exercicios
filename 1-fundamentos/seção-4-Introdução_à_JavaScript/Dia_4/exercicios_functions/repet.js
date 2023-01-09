function repet(values){
  let valueCount;
  let valueIndex;
  
  for(let i in values){
    let counter = 0;

    for(let j in values){
      if(values[i] === values[j]){
        counter += 1;
      }
    }
    
    if(Number(i) === 0 || valueCount < counter){
      valueCount = counter;
      valueIndex = i;
    }
  }
  return values[valueIndex];
}


console.log(repet([2, 3, 2, 5, 8, 2, 3]));
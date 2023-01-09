function biggestValueIndex(values){
  let biggestValue;
  let valueIndex;

  for(let index in values){
    if(Number(index) === 0 || values[index] > biggestValue){
      biggestValue = values[index];
      valueIndex = Number(index);
    }
  }

  return valueIndex;
}

console.log(biggestValueIndex([2, 3, 6, 7, 10, 1]));
function smallestValueIndex(values){
  let smallest;
  
  for(let index in values){
    if(Number(index) === 0 || values[index] < values[smallest]){
      smallest = index;
    }
  }
  return smallest;
}


console.log(smallestValueIndex([2, 4, 6, 7, 10, 0, -3]));
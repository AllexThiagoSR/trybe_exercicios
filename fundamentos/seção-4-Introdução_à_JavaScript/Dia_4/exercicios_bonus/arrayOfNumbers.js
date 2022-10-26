let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(values){
  const newVector = [];

  for(let i of values){
    for(let j of i){
      if(j % 2 === 0){
        newVector.push(j);
      }
    }
  }

  return newVector;
}

console.log(arrayOfNumbers(vector));
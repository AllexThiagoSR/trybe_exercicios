function largestName(names){
  let indexOfLargest;

  for(let index in names){
    if(Number(index) === 0 || names[index].length > names[indexOfLargest].length){
      indexOfLargest = index;
    }
  }
  return names[indexOfLargest];
}


console.log(largestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
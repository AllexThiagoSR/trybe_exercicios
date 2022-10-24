const array = ['java', 'javascript', 'python', 'html', 'css'];
let largest = '';
let smallest = '';

for(let wordIndex = 0; wordIndex < array.length; wordIndex += 1){
  if(array[wordIndex].length > largest.length || wordIndex === 0){
    largest = array[wordIndex];
  }
  if(array[wordIndex].length < smallest.length || wordIndex === 0){
    smallest = array[wordIndex];
  }
}

console.log('Maior palavra: ' + largest);
console.log('Menor palavra: ' + smallest);

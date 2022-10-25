//melhorar essa implementação depois
function endWithThis(word, ending){
  if(word.length > ending.length){  
    return word.endsWith(ending);
  }else{
    return 'Ending deve ser menor que word';
  }
}


console.log(endWithThis('trybe', 'be'));
console.log(endWithThis('joaofernando', 'fernan'));
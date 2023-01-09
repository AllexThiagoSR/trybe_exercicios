function verifyPalindrome(word=''){
  let newWord = '';
  word = word.toLowerCase();

  if(word === ''){
    return 'Por favor mande uma palavra para a função';
  }

  for(let i = word.length - 1; i >= 0; i -= 1){
    newWord += word[i];
  }
  if(word === newWord){
    return true;
  }else{
    return false;
  }
}

console.log(verifyPalindrome('Arara'));
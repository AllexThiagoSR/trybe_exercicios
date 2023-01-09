const longestWord = phrase => {
  let words = phrase.split(' ');
  let longest = 0;

  for(let index in words){
    let check = 0 === Number(index) || words[index].length > words[longest].length;
    check && (longest = index);
  }
  return words[longest];
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
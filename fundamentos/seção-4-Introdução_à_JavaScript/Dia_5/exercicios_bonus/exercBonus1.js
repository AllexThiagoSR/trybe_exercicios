// const replaceX = name => 'Tryber x aqui!'.replace('x', name);

const replaceX = name =>{
  let words = 'Tryber x aqui!'.split(' ');
  let final = '';

  for(let index in words){
    words[index] === 'x' && (words[index] = ` ${name} `);
    final += words[index];
  }
  return final;
}

console.log(replaceX('Allex'));
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

const mySkills = str => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let conc = `${str}
Minhas três principais habilidades são:`;

  for(let index in skills){
    conc += `\n -${skills[index]}`
  }
  return conc;
}
console.log(mySkills(replaceX('Bebeto')));
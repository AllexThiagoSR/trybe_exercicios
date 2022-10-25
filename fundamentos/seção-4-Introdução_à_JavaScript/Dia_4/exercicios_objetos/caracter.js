let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Welcome, ' + info.personagem);

info['recorrente'] = 'Sim';
console.log(info.recorrente);

console.log('');

console.log('Chaves:');
for(let key in info){
  console.log('  ' + key);
}

console.log('');

console.log('Valores das chaves:');
for(let key in info){
  console.log('  ' + info[key]);
}

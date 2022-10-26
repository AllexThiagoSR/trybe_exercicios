let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

console.log('Welcome, ' + info.personagem);

info['recorrente'] = 'Sim';
// console.log(info.recorrente);

// console.log('');

// console.log('Chaves:');
// for(let key in info){
//   console.log('  ' + key);
// }

// console.log('');

// console.log('Valores das chaves:');
// for(let key in info){
//   console.log('  ' + info[key]);
// }

for(let key in info){
  if(info[key] === info2[key] && info[key] === 'Sim'){
    console.log('Ambos recorrentes');
  }else if(info[key] === info2[key] && info[key] === 'Não'){
    console.log('Ambos não recorrentes');
  }else{
    console.log(info[key] + ' e ' + info2[key]);
  }
}

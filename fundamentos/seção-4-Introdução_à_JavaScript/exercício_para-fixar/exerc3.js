const note = 40;

if(note >= 80){
  console.log('Parabéns, você foi aprovada(o)!');
} else if(80 > note >= 60){
  console.log('Você está na nossa lista de espera');
} else if(note < 60){
  console.log('Você foi reprovada(o)');
}
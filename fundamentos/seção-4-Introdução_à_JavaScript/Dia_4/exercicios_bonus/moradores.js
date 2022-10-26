let moradores = {
  'bloco 1': [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  'bloco 2': [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

console.log(`O(A) morador(a) do bloco 2 ${moradores['bloco 2'][moradores['bloco 2'].length - 1].nome} ${moradores['bloco 2'][moradores['bloco 2'].length - 1].sobrenome} mora no ${moradores['bloco 2'][moradores['bloco 2'].length - 1].andar}º andar, apartamento ${moradores['bloco 2'][moradores['bloco 2'].length - 1].apartamento}`);

console.log('');
for(let blockKey in moradores){
  console.log(blockKey);
  for(let moradorIndex in moradores[blockKey]){
    console.log(`  ${Number(moradorIndex) + 1}º Morador: ${moradores[blockKey][moradorIndex].nome} ${moradores[blockKey][moradorIndex].sobrenome}`);
  }
  console.log('');
}
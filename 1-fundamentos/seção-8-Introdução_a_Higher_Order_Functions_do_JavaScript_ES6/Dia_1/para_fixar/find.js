const numbers = [19, 21, 30, 3, 45, 22, 15];

console.log(numbers.find((number) => number % 3 === 0 && number % 5 === 0));

const names = ['João', 'Irene', 'Fernando', 'Maria'];

console.log(names.find((name) => name.length === 5));

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

console.log(musicas.find((music) => music.id === '31031687').title);

const player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {golden: 2, silver: 3},
};

player['fullName'] = player.name + ' ' + player.lastName;

console.table(player);

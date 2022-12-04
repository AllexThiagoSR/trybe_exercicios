const physicalDamage = (minDamage, maxDamage) => {
  const damage = Math.ceil(Math.random() * maxDamage);
  if (damage < minDamage) return minDamage;
  return damage;
};

const magicalDamage = (minDamage, maxDamage) => {
  const damage = Math.ceil(Math.random() * maxDamage);
  if (damage < minDamage) return minDamage;
  return damage;
};

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
};

const battleMembers = { mage, warrior, dragon };

warrior.damage = () => ({ damageDealt: physicalDamage(warrior.strength, warrior.strength * warrior.weaponDmg) });
dragon.damage = () => ({ damageDealt: physicalDamage(15, dragon.strength) });
mage.damage = () => {
  if (mage.mana < 15) return 'Mana insuficiente';
  mage.mana -= 15;
  return { damageDealt: magicalDamage(mage.intelligence, mage.intelligence * 2), spentMana: 15 };
};

const turnCharacter = (damageFunction, ...enemies) => {
  const damageInfos = damageFunction();
  enemies.forEach((enemy) => {
    enemy.healthPoints -= damageInfos.damageDealt;
  });
  return damageInfos;
};

const battleTurn = (actions, members) => {
  const damagesInfos = {};
  Object.keys(members).forEach((member) => {
    damagesInfos[member] = actions[member + 'Time']();
  });
  return damagesInfos;
};

const turnResult = (battleMembers, damages) => {
  Object.keys(battleMembers).forEach((member) => {
    console.log('\nPersonagem: ', member);
    console.log('Pontos de vida: ', battleMembers[member].healthPoints);
    console.log('Informações do dano: ', damages[member]);
  });
};

const gameActions = {
  warriorTime: () => turnCharacter(warrior.damage, dragon),
  mageTime: () => turnCharacter(mage.damage, dragon),
  dragonTime: () => turnCharacter(dragon.damage, mage, warrior),
  turnResult,
};

gameActions.turnResult(battleMembers, battleTurn(gameActions, battleMembers));

const physicalDamage = (minDamage, maxDamage) => {
  const damage = Math.floor(Math.random() * maxDamage + minDamage);
  if (damage < minDamage) return minDamage;
  return damage;
};

const magicalDamage = (minDamage, maxDamage) => {
  const damage = Math.floor(Math.random() * maxDamage + minDamage);
  if (damage < minDamage) return minDamage;
  return damage;
};

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

warrior.damage = () => physicalDamage(warrior.strength, warrior.strength * warrior.weaponDmg);
dragon.damage = () => physicalDamage(15, dragon.strength);
mage.damage = () => {
  if (mage.mana < 15) return 'Mana insuficiente';
  mage.mana -= 15;
  return { damage: magicalDamage(mage.intelligence, mage.intelligence * 2), spentMana: 15 };
};

let statu = `desligado`;

const turnOnTurnOff = () => (statu === `desligado` ? statu = `ligado` : statu = `desligado`);

console.log(`O motor está ${turnOnTurnOff()}`);
console.log(`O motor está ${turnOnTurnOff()}`);
console.log(`O motor está ${turnOnTurnOff()}`);
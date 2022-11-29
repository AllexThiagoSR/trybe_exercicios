const prizeDraw = (num) => num === Math.ceil(Math.random() * 5);

const prizeDrawResult = (num, prizeDraw) => {
  if (prizeDraw(num)) {
    return 'Parabéns, você ganhou';
  }
  return 'Tente novamente'
};

console.log(prizeDrawResult(5, prizeDraw));

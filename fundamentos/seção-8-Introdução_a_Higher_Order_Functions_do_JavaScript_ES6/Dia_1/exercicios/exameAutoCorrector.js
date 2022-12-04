const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'c', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const finalPontuation = (rigthAnswers, studentAnswers) => {
  let totalPontuation = 0;
  if (!rigthAnswers || !studentAnswers) throw new Error('Algum dos parâmetros necessários não foi informado');
  if (rigthAnswers.length !== studentAnswers.length) throw new Error('A quantidade de respostas não coincidem');
  rigthAnswers.forEach((answer, index) => {
    if (studentAnswers[index].toUpperCase() === 'N.A') totalPontuation += 0;
    else if (answer === studentAnswers[index].toUpperCase()) totalPontuation += 1;
    else totalPontuation -= 0.5;
  });
  return totalPontuation;
};

console.log(finalPontuation(RIGHT_ANSWERS, STUDENT_ANSWERS));

module.exports = { RIGHT_ANSWERS, finalPontuation };

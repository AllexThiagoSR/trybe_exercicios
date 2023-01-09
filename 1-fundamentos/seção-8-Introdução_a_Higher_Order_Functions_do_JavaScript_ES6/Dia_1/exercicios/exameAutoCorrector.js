const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const finalPontuation = (rigthAnswers, studentAnswers) => {
  let totalPontuation = 0;
  rigthAnswers.forEach((answer, index) => {
    if (studentAnswers[index] === 'N.A') {
      totalPontuation += 0;
    } else if (answer === studentAnswers[index]) {
      totalPontuation += 1;
    } else {
      totalPontuation -= 0.5;
    }
  });
  return totalPontuation;
};

console.log(finalPontuation(RIGHT_ANSWERS, STUDENT_ANSWERS));

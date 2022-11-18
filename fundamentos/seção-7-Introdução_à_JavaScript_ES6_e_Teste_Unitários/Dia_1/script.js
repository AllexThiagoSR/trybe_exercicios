const replaceVirgula = (value) => value.replace(',', '.');

const checkValues = (value1, value2) => {
  if (value1.includes(',') || value2.includes(',')) {
    return [replaceVirgula(value1), replaceVirgula(value2)];
  } else if (value1 === '' || value2 === '') {
    throw new Error('Algum dos valores não foi informado');
  } else if (isNaN(Number(value1)) || isNaN(Number(value2))) {
    throw new Error('Os valores informado precisam ser numéricos');
  }
  return [value1, value2];
}

const sum = (value1, value2) => {
  const result = Number(value1) + Number(value2);
  return result;
};

function catchSumExceptions() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  try {
    const values = checkValues(value1, value2);
    const result = sum(values[0], values[1]);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (e) {
    document.getElementById('result').innerHTML = e.message;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  } 
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', catchSumExceptions);
}
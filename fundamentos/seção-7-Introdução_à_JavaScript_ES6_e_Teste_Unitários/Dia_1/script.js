const checkValues = (value1, value2) => {
  if (value1 === '' || value2 === '') {
    throw new Error('Algum dos valores não foi informado');
  }
}

function sum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  try {
    checkValues(value1, value2);
    const result = Number(value1) + Number(value2);
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
  button.addEventListener('click', sum);
}
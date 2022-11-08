const submitButton = document.getElementById('submit-button');
const copyRight = document.getElementById('copyright');

submitButton.addEventListener('click', (event) => {
  // event.preventDefault();
  const nameInput = document.getElementById('input-name');
  const emailInput = document.getElementById('input-email');
  if (nameInput.value.length < 10 || emailInput.value.length < 10) {
    alert('Dados inválidos!');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
});
copyRight.addEventListener('click', () => {
  // console.log(copyRight.value);
  if (copyRight.value === 'on') {
    copyRight.value = 'off';
    copyRight.parentElement.nextElementSibling.insertAdjacentHTML('afterend', `
    <label for="images" enctype="multipart/form-data">
    <input type="file" id="images" name="images">
    </label>`);
  } else {
    copyRight.value = 'on';
    copyRight.parentElement.nextElementSibling.nextElementSibling.remove();
  }
});
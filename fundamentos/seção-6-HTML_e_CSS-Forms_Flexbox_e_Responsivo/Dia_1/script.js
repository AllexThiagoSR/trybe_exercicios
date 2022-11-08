const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const nameInput = document.getElementById('input-name');
  const emailInput = document.getElementById('input-email');
  if (nameInput.value.length < 10 || emailInput.value.length < 10) {
    alert('Dados inválidos!');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
});
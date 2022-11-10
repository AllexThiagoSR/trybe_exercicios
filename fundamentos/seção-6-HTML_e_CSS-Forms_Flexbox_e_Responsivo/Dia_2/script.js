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
    <div>
    <label for="images" class="form-label" enctype="multipart/form-data">Selecione suas imagens</label>
    <input type="file" id="images" class="form-control" name="images" required>
    
    </div>`);
  } else {
    copyRight.value = 'on';
    copyRight.parentElement.nextElementSibling.nextElementSibling.remove();
  }
});

let date = new Pikaday({field: document.getElementById('input-date'), format: 'DD/MM/YYYY'});

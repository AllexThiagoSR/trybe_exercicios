// Função do event listener click
const chooseElement = (event) => {
  // Elemento onde aconteceu o evento no caso o click
  const element = event.target;
  // O pai desse elemento
  const parent = element.parentElement;
  // Salva o id do pai do elemento onde o evento aconteceu que sera o estili que será alterado
  const styleToChange = parent.id
  // Elemento onde as alterações vão acontecer
  const content = document.getElementsByClassName('content')[0];

  // Check se o elemento que foi clicado não é a tag span
  // Checa o texto do elemento que foi clicado e da tag span que é o primeiro item do array retornado pela propriedade children
  if (element.innerText !== parent.children[0].innerText){
    // Modifica o estilo do elemento capturado
    content.style[styleToChange] = element.innerText;
    // Salva no local storage com a chave com o nome da propriedade que está sendo estilizada e o valor dessa propriedade
    localStorage[styleToChange] = element.innerText;
  } 
};

// Pega os elementos da class options que controlam o estilos
const options = document.getElementsByClassName('options');
// Adiciona o event listener de clique em cada um dos elementos
for (option of options) {
  option.addEventListener('click', chooseElement);
}

// Carrega os estilos salvos no local storage quando a página for carregada e modifica
window.onload = () => {
  const content = document.getElementsByClassName('content')[0].style;
  for (let key in localStorage) {
    content[key] = localStorage[key];
  }
};

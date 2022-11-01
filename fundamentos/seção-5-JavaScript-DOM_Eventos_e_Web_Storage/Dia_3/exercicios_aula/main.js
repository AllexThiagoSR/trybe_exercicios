const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre? Porque os elementos da classe tch foram estilizados para ficar desta maneira

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
const addClass = (event) => {
  if (!event.target.className.includes('tech')) {
    event.target.className += ' tech';
  } else {
    event.target.className = '';
  }
  showElementToChange();
};

firstLi.addEventListener('click', addClass);
secondLi.addEventListener('click', addClass);
thirdLi.addEventListener('click', addClass);

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
const changeText = (event) => {
  const  input = event.target;
  const element = document.getElementsByClassName('tech')[0];

  if (event.keyCode === 13) {
    if (element.className.includes('tech')) {
      element.innerText = input.value;
      input.value = '';
    }
  }
};

const showElementToChange = () => {
  const  element = document.getElementsByClassName('tech')[0];
  const input = document.getElementById('input');
  if (typeof element !== 'undefined') {
    input.placeholder = 'Altera texto de ' + element.id;
  } else {
    input.placeholder = 'Altera texto do quadrado selecionado por um clique';
  }
};

input.addEventListener('keyup', changeText)

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
const redirectToPage = () => {
  window.open('https://allexthiagosr.github.io/', '_blank');
};

myWebpage.addEventListener('dblclick', redirectToPage)

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
const changeColorMouseOver = (event) => {
  const element = event.target;

  element.style.color = 'violet';
};

const changeColorMouseLeave = (event) => {
  const element = event.target

  element.style.color = 'white';
};

myWebpage.addEventListener('mouseover', changeColorMouseOver);
myWebpage.addEventListener('mouseleave', changeColorMouseLeave);

// Segue abaixo um exemplo do uso de event.target:


const resetText = (event) => {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);


// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
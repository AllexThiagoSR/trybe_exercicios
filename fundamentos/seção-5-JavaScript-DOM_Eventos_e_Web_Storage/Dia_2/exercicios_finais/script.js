//Adicionar uma tag h1 como sendo filho do body
const tagH1 = document.createElement('h1');
tagH1.innerText = 'Exercício - JavaScript DOM';
tagH1.id = 'title-in-body';
document.body.appendChild(tagH1);
// const creatAElement = (tagName, parent, _text='', _id='', _classs='') => {
//   const element = document.createElement(tagName);
//   _text !== '' ? element.innerText = _text : '';
//   _id !== '' ? element.id = _id : '';
//   _classs !== '' ? element.className = _classs: '';
//   parent.appendChild(element);
//   return element;
// };

// const creatAElementWithImage = (src, parent, _id='', _classs='') => {
//   const element = document.createElement('img');
//   element.src = src;
//   _id !== '' ? element.id = _id : '';
//   _classs !== '' ? element.className = _classs: '';
//   parent.appendChild(element);
// };

// const creatAList = (listType, content, parent) => {
//   const list = document.createElement(listType);
//   for (let itemContent of content) {
//     const listItem = document.createElement('li');
//     listItem.innerText = itemContent;
//     list.appendChild(listItem);
//   }
//   parent.appendChild(list);
//   return list;
// };

// //Adicionar uma tag h1 como sendo filho do body
// creatAElement('h1', document.body, 'Exercício - JavaScript DOM', 'title-in-body', 'title');

// //Adicionando a tag main como sendo filha de body
// creatAElement('main', document.body, '', '', 'main-content');
// const centerContent = creatAElement('section', document.getElementsByClassName('main-content')[0], '', '', 'center-content');

// //Adicionando tag p sendo filha da section criada anteriormente com
// creatAElement('p', document.getElementsByClassName('center-content')[0], 'Alô, testando 1, 2, 3');
// const leftContent = creatAElement('section', document.getElementsByClassName('main-content')[0], '', '', 'left-content');

// //Adiciona a tag section sendo filha do main-content com a classe right-content
// const rightContent = creatAElement('section', document.getElementsByClassName('main-content')[0], '', '', 'right-content');

// //Adiciona uma imagem em left-content
// creatAElementWithImage('https://picsum.photos/200', document.getElementsByClassName('left-content')[0], '', 'small-image');

// //Cria e adiciona uma lista na section right-content
// const list = creatAList('ul', ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'], document.getElementsByClassName('right-content')[0]);

// //Adciona 3 h3 na tag main
// for (let number = 1; number <= 3; number += 1) {
//   creatAElement('h1', document.getElementsByClassName('main-content')[0], `${number}`, '', 'description');
// }

// //Remove left-content
// document.getElementsByClassName('main-content')[0].removeChild(leftContent);

// //Centraliza right-content
// rightContent.style.marginRight = 'auto';

// //Muda o backgroundColor do pai de center-content
// centerContent.parentElement.style.backgroundColor = 'green';

// //Remove os elementos li de ul que tiverem a palavra dez ou nove
// for (let listItem of list.querySelectorAll('ul li')) {
//   if(listItem.innerText.includes('dez') || listItem.innerText.includes('nove')){
//     listItem.remove();
//   }
// }


const novoElemento = document.createElement('h1');
novoElemento.innerText = 'Exercício - JavaScript DOM';
document.body.appendChild(novoElemento);
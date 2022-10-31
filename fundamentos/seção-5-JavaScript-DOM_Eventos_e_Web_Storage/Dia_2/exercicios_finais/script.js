//Adicionar uma tag h1 como sendo filho do body
const creatAElement = (tagName, parent, _text='', _id='', _classs='') => {
  const element = document.createElement(tagName);
  _text !== '' ? element.innerText = _text : '';
  _id !== '' ? element.id = _id : '';
  _classs !== '' ? element.className = _classs: '';
  parent.appendChild(element);
};

const creatAElementWithImage = (src, parent, _id='', _classs='') => {
  const element = document.createElement('img');
  element.src = src;
  _id !== '' ? element.id = _id : '';
  _classs !== '' ? element.className = _classs: '';
  parent.appendChild(element);
};

creatAElement('h1', document.body, 'Exercício - JavaScript DOM', 'title-in-body');
creatAElement('main', document.body, '', '', 'main-content');
creatAElement('section', document.getElementsByClassName('main-content')[0], '', '', 'center-content');
creatAElement('p', document.getElementsByClassName('center-content')[0], 'Alô, testando 1, 2, 3');
creatAElement('section', document.getElementsByClassName('main-content')[0], '', '', 'left-content');
creatAElement('section', document.getElementsByClassName('main-content')[0], '', '', 'right-content');
creatAElementWithImage('https://picsum.photos/200', document.getElementsByClassName('left-content')[0], '', 'small-image');

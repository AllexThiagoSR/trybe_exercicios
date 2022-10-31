//Adicionar uma tag h1 como sendo filho do body
const creatAElement = (tagName, parent, _text='', _id='', _classs='') => {
  const element = document.createElement(tagName);
  _text !== '' ? element.innerText = _text : '';
  _id !== '' ? element.id = _id : '';
  _classs !== '' ? element.className = _classs: '';
  parent.appendChild(element);
};

creatAElement('h1', document.body, 'Exercício - JavaScript DOM', 'title-in-body');
creatAElement('main', document.body, '', '', 'main-content');
creatAElement('section', document.getElementsByClassName('main-content')[0], '', '', 'center-content')

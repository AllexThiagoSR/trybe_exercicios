//Adicionar uma tag h1 como sendo filho do body
const creatAElement = (tagName, parent, _text='', _id='', _classs='') => {
  const element = document.createElement(tagName);
  element.innerText = _text;
  element.id = _id;
  element.className = _classs;
  parent.appendChild(element);
};

creatAElement('h1', document.body, 'Exercício - JavaScript DOM', id='title-in-body');
creatAElement('main', document.body, '', '', 'main-content');

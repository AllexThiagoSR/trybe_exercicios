/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()

1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
4. Crie e execute uma função que corrija o texto da tag <h1>.
5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
*/

//Exercício 1
const changeParagraph = (id = '', text = '') => {
  const paragraph = document.getElementById(id);
  paragraph.innerText = text;
};

changeParagraph('text-mod2', 'Me vejo trabalhando, com uma vida tranquila e feliz');

//Exercício 2
const changeClassBackgroundColor = (classs, color) => {
  const classElements = document.getElementsByClassName(classs);
  for (let elem of classElements) {
    elem.style.backgroundColor = color;
  }
};

changeClassBackgroundColor('main-content', 'rgb(76,164,109)')

//Exercício 3
changeClassBackgroundColor('center-content', 'white');

//Exercício 4
const replaceText = (id, text1, text2) => {
  const element = document.getElementById(id);
  let tagText = element.innerText;
  tagText = tagText.replace(text1, text2);
  element.innerText = tagText;
};

replaceText('title-head', 'Escripito', 'Script');

//Exercício 5
const transformIdText = (id, transformation) => {

  document.getElementById(id).style.textTransform = transformation;
};

transformIdText('text-mod1', 'uppercase');

//Exercício 6
const showTagsContent = (tag) => {
  const tagsArray = document.getElementsByTagName(tag);
  for (let objectTag of tagsArray) {
    console.log(objectTag.innerText);
  }
};

showTagsContent('p');
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

function changeTagText(tag, text, yourText){
  const element = document.getElementsByTagName(tag);

  for(let i of element){
    if(i.innerText === text){
      i.innerText = yourText;
    }
  }
}

function changeBgColor(color, id=null, cssSelector=null){
  let element;

  if(id !== null){
    element = document.getElementById(id);
    
  }else if(cssSelector !== null){
    element = document.querySelector(cssSelector);
  } else if(id !== null && cssSelector !== null){
    console.log('Mande apenas um dos argumentos opicionais, id ou ');
    return null;
  }else{
    console.log('Mande um dos argumentos opicionais, id ou clas');
    return null;
  }
  element.style.backgroundColor = color;
}

function changeToUpper(id=null, cssSelector=null){
  let element;
  if(id !== null){
    element = document.getElementById(id);
  }else if(cssSelector !== null){
    element = document.querySelector(cssSelector);
  } else if(id !== null && cssSelector !== null){
    console.log('Mande apenas um dos argumentos opicionais, id ou cssSelector');
    return null;
  }else{
    console.log('Mande um dos argumentos opicionais, id ou cssSelector');
    return null;
  }
  element.style.textTransform = 'uppercase';
}

function showPContent(){
  let element = document.getElementsByTagName('p');

  for(let i of element){
    console.log(i.innerText);
  }
}


changeTagText('p', '-----', 'Me vejo empregado e vivendo bem');
changeBgColor('rgb(76,164,109)', null, '.main-content');
changeBgColor('white', null, '.main-content .center-content')
changeTagText('h1', 'Exercício - JavaEscripito', 'Exercício - JavaScript')
changeToUpper(null, 'p');
showPContent();

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

function changeBgColor(color, id=null, clas=null){
  let element;

  console.log(color + ' ' + id + ' ' + clas)
  if(id !== null){
    element = document.getElementById(id);
    element.style.backgroundColor = color;
  }else if(clas !== null){
    element = document.querySelector('.' + clas);
    element.style.backgroundColor = color;
  } else if(id !== null && clas !== null){
    console.log('Mande apenas um dos argumentos opicionais, id ou clas');
    return null;
  }else{
    console.log('Mande um dos argumentos opicionais, id ou clas');
    return null;
  }

  
}


changeTagText('p', '-----', 'Me vejo empregado e vivendo bem');
changeBgColor('rgb(76,164,109)', null, 'main-content');

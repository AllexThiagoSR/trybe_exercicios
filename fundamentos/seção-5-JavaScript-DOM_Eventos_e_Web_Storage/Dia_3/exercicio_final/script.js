const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Criar o calendário dinamicamente - Parte 1
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const decemberFridays = [4, 11, 18, 25];
const decemberHolidays = [24, 25, 31];

// Função que cria as li's e adciona quantos events listeners forem passados no objeto
const monthDays = (daysList, parent, eventsAndFunctions={}) => {
  for (let day of daysList) {
    const liDay = document.createElement('li');
    liDay.setAttribute('class', 'day');
    liDay.innerText = day;
    liDay.style.backgroundColor = '#eee';
    for (let key in eventsAndFunctions) {
      liDay.addEventListener(key, eventsAndFunctions[key]);
    }
    parent.appendChild(liDay);
  }
};

// Função para adicionar uma classe a elemento ou elementos
const addClass = (classNameElement, textOfElement, newClassName) => {
  const elements = document.getElementsByClassName(classNameElement);

  for (let element of elements) {
    for (let text of textOfElement) {
      if (element.innerText === `${text}` && !element.className.includes(newClassName)){
        element.classList.add(newClassName);
        break;
      }
    }
  }
};

// Função que cria botões e adiciona um event listener de click a eles
const createButton = (text, parent, id, eventFunction) => {
  const button = document.createElement('button');

  button.innerText = text;
  button.id = id;
  parent.appendChild(button);
  button.addEventListener('click', eventFunction);
};

// Função que do event listener do botão feriados
const buttonChangeBgColor = (event) => {
  const button = event.target;
  let className = button.id.split('-');

  className = className[className.length - 1];
  const elementsToChange = document.getElementsByClassName(className);
  let bgColor = elementsToChange[0].style.backgroundColor;
  let color = elementsToChange[0].style.color;

  if (elementsToChange[0].style.backgroundColor === 'rgb(193, 110, 204)') {
    bgColor = 'rgb(238,238,238)';
    color = '#777';
  } else {
    bgColor = 'rgb(193, 110, 204)';
    color = 'black';
  }
  for (let element of elementsToChange) {
    element.style.backgroundColor = bgColor;
    element.style.color = color;
  }
};

// Função do event listener do botão sexta-feira- Parte 5
const changeText = (event) => {
  const button = event.target;
  let className = button.id.split('-');
  
  className = className[className.length - 1];
  const elementsToChange = document.getElementsByClassName(className)

  for (let index in elementsToChange) {
    if (elementsToChange[index].innerText !== 'SEXTOU!!!') {
      elementsToChange[index].innerText = 'SEXTOU!!!';
    } else {
      elementsToChange[index].innerText = decemberFridays[index];
    }
  }
};



// Funções de zoom - Parte 6
const zoomIn = (event) => {
  const element = event.target;
  const style = element.style;

  style.height = '50px';
  console.log(style.backgroundColor);
  if (style.backgroundColor !== 'rgb(238, 238, 238)') {
    style.backgroundColor = style.backgroundColor;
    style.color = style.color;
  }else {
    style.backgroundColor = 'rgb(206, 206, 206)';
    style.color = 'black';
  }
  
};

const zoomOut = (event) => {
  const element = event.target;
  const style = element.style;

  style.height = '23px';
  console.log(element.style.backgroundColor);
  if (style.backgroundColor !== 'rgb(206, 206, 206)') {
    style.backgroundColor = style.backgroundColor;
    style.color = style.color;
  }else {
    style.backgroundColor = 'rgb(238, 238, 238)';
    style.color = '#777';
  }
};

// Criar dias e adicionar events listeners(mouseover e mouseleave) e classes à esses dias
monthDays(decemberDaysList, document.getElementById('days'), {'mouseover': zoomIn, 'mouseleave': zoomOut});
addClass('day', decemberHolidays, 'holiday');
addClass('day', decemberFridays, 'friday');

// Criar botão feriados
createButton('Feriados', document.querySelector('.buttons-container'), 'btn-holiday', buttonChangeBgColor);

// Criar botão sexta-feira
createButton('Sexta-feira', document.querySelector('.buttons-container'), 'btn-friday', changeText);

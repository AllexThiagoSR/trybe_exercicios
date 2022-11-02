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

const monthDays = (daysList, parent) => {
  for (let day of daysList) {
    const liDay = document.createElement('li')
    liDay.setAttribute('class', 'day');
    liDay.innerText = day;
    parent.appendChild(liDay);
  }
};

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

monthDays(decemberDaysList, document.getElementById('days'));
addClass('day', decemberHolidays, 'holiday');
addClass('day', decemberFridays, 'friday');

// Criar botão feriados - Parte 2 e Adiciona event listener ao botão - Parte 3
const createButton = (text, parent, id, eventFunction) => {
  const button = document.createElement('button');

  button.innerText = text;
  button.id = id;
  parent.appendChild(button);
  button.addEventListener('click', eventFunction);
};

const buttonChangeBgColor = (event) => {
  const button = event.target;
  let className = button.id.split('-');

  className = className[className.length - 1];
  const elementsToChange = document.getElementsByClassName(className);

  for (let element of elementsToChange) {
    if (element.style.backgroundColor === 'rgb(193, 110, 204)') {
      element.style.backgroundColor = 'rgb(238,238,238)';
      element.style.color = '#777';
    } else {
      element.style.backgroundColor = 'rgb(193, 110, 204)';
      element.style.color = 'black';
    }
    // (element.style.backgroundColor === 'rgb(193, 110, 204)') ? element.style.backgroundColor = 'rgb(238,238,238)' : element.style.backgroundColor = 'rgb(193, 110, 204)';
  }
};

createButton('Feriados', document.querySelector('.buttons-container'), 'btn-holiday', buttonChangeBgColor);



// Criar botão sexta-feira - Parte 4 e Adiciona event listener ao botão sexta-feira- Parte 5
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

createButton('Sexta-feira', document.querySelector('.buttons-container'), 'btn-friday', changeText);

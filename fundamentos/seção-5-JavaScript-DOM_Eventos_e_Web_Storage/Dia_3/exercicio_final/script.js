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

// Criar botões - Parte 2
const createButton = (text, parent, id) => {
  const button = document.createElement('button');

  button.innerText = text;
  button.id = id;
  parent.appendChild(button);
};

createButton('Feriados', document.querySelector('.buttons-container'), 'btn-holiday');

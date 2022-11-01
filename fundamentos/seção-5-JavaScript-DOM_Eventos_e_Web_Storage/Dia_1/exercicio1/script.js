//Header
const headerCont = document.querySelector('#header-container');

headerCont.style.backgroundColor = '#00B069';

//Emergency tasks
const emergencyTasks = document.querySelector('.emergency-tasks');

emergencyTasks.style.backgroundColor = '#FF9F84';

const divEmergency = emergencyTasks.querySelectorAll('div h3');

for(let h3 of divEmergency){
  h3.style.backgroundColor = '#A500F3';
}

//No Emergency tasks
const noEmergencyTasks = document.querySelector('.no-emergency-tasks');

noEmergencyTasks.style.backgroundColor = '#F9DB5E';

const divNoEmergency = noEmergencyTasks.querySelectorAll('div h3');

for(let h3 of divNoEmergency){
  h3.style.backgroundColor = 'black';
}

//Footer
const footerCont = document.querySelector('#footer-container');
footerCont.style.backgroundColor = '#003533';
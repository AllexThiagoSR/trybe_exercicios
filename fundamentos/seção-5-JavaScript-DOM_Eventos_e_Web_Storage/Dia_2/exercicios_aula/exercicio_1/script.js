const elementWhereRU = document.getElementById('elementoOndeVoceEsta');
const dadElement = elementWhereRU.parentElement;
dadElement.style.color = 'red';

console.log(elementWhereRU);


const firstChildOfChild = elementWhereRU.firstElementChild;
firstChildOfChild.innerText = 'Testando 123';



const atention = elementWhereRU.nextSibling;
console.log(atention);


const thirdChild = elementWhereRU.nextElementSibling;
console.log(thirdChild);


const thirdChildWithDad = document.getElementById('pai').firstElementChild.nextElementSibling.nextElementSibling;

console.log(thirdChildWithDad);
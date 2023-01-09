const parent = document.getElementById('elementoOndeVoceEsta').parentElement;
parent.appendChild(document.createElement('section'));
parent.lastElementChild.id = 'sibling';


const elementWhereUR = document.getElementById('elementoOndeVoceEsta');
elementWhereUR.appendChild(document.createElement('section'));
elementWhereUR.lastElementChild.id = 'terceiroFilhoDoFilho';



const firstChildOfChild = elementWhereUR.firstElementChild;
firstChildOfChild.appendChild(document.createElement('p'));
firstChildOfChild.lastElementChild.innerText = 'Olha quem foi criado';


const newElement = firstChildOfChild.lastElementChild;
const thirdChild = newElement.parentNode.parentNode.nextElementSibling;
console.log(thirdChild);
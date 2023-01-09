const sectionParent = document.getElementById('pai');
const sectionChildren = sectionParent.querySelectorAll('#pai > section');

//itera sobre os filhos de #pai
for (let index in sectionChildren) {
  //Checa se o filho atual é #elementoOndeVoceEsta
  if (sectionChildren[index].id === 'elementoOndeVoceEsta') {
    //Armazena os filhos de #elementoOndeVoceEsta
    let whereURChildren = sectionChildren[index].querySelectorAll('#elementoOndeVoceEsta section');
    //Itera sobre os filhos de #elementoOndeVoceEsta
    for (let child of whereURChildren) {
      //Checa se o filho tem o id diferente de primeiroFilhoDoFilho
      if (child.id !== 'primeiroFilhoDoFilho') {
        //Remove o filho atual
        sectionChildren[index].removeChild(child);
      }
    }
  }
  //Checa se o tipo do filho atual é object
  else if (typeof sectionChildren[index] === 'object') {
    //Remove filho atual
    sectionParent.removeChild(sectionChildren[index]);
  }
}
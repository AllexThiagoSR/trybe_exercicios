function sum(values){
  let sum = 0;

  for(let i of values){
    sum += i;
  }
  return sum;
}

function romano(string){
  //Transforma a string para UpperCase
  string = string.toUpperCase();

  //Declara a variável que vai receber os valores que cada algarismo ou conjunto de algarismos representa
  let conjunt = [];

  //Algarismos romanos
  const algarisms = {'I': 1,  'V': 5,  'X': 10,  'L': 50, 'C': 100, 'D': 500, 'M': 1000};

  //Alguns(ou todos) os conjuntos de algarismos romanos
  const conjunts = {'IV': 4, 'IX': 9,'XL': 40, 'XC': 90, 'CD': 400, 'CM': 900,};

  //Variável que vai guardar o que sobrar da string assim que forem retirados os conjuntos
  let restOfString = string;
  
  //Itera sobre os caracteres da string
  for(let stringIndex = 0; stringIndex < string.length; stringIndex += 1){
    //Itera sobre o objeto de conjuntos de algarismos romanos
    for(let key in conjunts){
      //Variável que irá concatenar um algarismo com o seu anterior para uma checagem futura
      let concat = '';

      //Checa se é ou não a primeira repetição do loop
      if(stringIndex > 0){
        //Concatena a posição atual da string com a sua anterior
        concat = string[stringIndex - 1] + string[stringIndex];
      }

      //Checa se a concatenação é igual ao conjunto de algarismos atual
      if(concat === key){
        //Adiciona o valor correspondente ao conjunto identificado
        conjunt.push(conjunts[key]);
        //Retira uma ocorrência do conjunto indentificado da string
        restOfString = restOfString.replace(key, '');
        //Para o segundo laço pois a occorrência já foi identificada e removida da string
        break;
      }
    }
  }

  //Itera sobre os caracteres do que restou da string após retirar todos os conjuntos
  for(let stringIndex in restOfString){
    //Itera sobre o objeto que possui todos os algarismos romanos, mas não tem os possíveis conjuntos
    for(let key in algarisms){
      //Checa se o caracter atual da string que restou é igual á chave do objeto algarisms atual
      if(restOfString[stringIndex] === key){
        //Adiciona à variável conjunt o valor correspondente ao algarismo identificado
        conjunt.push(algarisms[key]);
        //Para o segundo laço já que o algarismo já foi identificado
        break;
      }
    }
  }
  //Retorna a soma dos valores na variável conjunt
  return sum(conjunt);
}


console.log(romano('dccccxiixix'));
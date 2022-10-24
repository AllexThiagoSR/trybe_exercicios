const currentHour = 16;
let message = '';

if(currentHour >= 22){
  message = 'Hora de mimir sem lanche';
} else if(currentHour >= 18 && currentHour < 22){
  message = 'Hmmmm... Hora da jantinha boa';
} else if(currentHour >= 14 && currentHour < 18){
  message = 'Vamos fazer um bolo pro café da tarde?';
} else if(currentHour >= 11 && currentHour < 14){
  message = 'Almoço timeeeeee'
} else if(currentHour >= 4 && currentHour < 11){
  message = 'Cafézinho nhame nhame'
}else {
  message = 'Tem essa hora no dia não fi'
}

console.log(message);
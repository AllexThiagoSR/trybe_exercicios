function basicCalculator(num1, num2, operation='+'){
  switch(operation){
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    case '%':
      return num1 % num2;
    default:
      return 'Error';
  }
}



console.log(basicCalculator(1, 18));
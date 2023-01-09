const n = 11;
const center = (n + 1) / 2;
const maxInterval = (n - 1) / 2;
let interval = 0;
if(n % 2 !== 0){
  for(let row = 1; row <= n; row += 2){
    let str = '';
    for(let j = 1; j <= n; j += 1){
      if(j === center + interval || j === center - interval || row === n){
        str += '*';
      }else{
        str += ' ';
      }
    }
    if(maxInterval > interval){
      interval += 1;
    }
    console.log(str);
  }
}else{
  console.log('(n) deve ser ímpar.');
}
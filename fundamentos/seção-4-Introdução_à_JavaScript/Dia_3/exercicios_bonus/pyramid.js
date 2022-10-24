const n = 11;
const centro = 1 + ((n - 1) / 2);
let maxInterval = (n - 1) / 2;
let interval = 0;

for(let i = 1; i <= centro; i += 1){
  let str = '';
  for(let j = 1; j <= n; j += 1){
    if(j >= centro - interval && j <= centro + interval){
      str += '*';
    }else{
      str += ' ';
    }
  }
  if(interval < maxInterval){
    interval += 1;
  }
    
  console.log(str);
}
const n = 7;

for(let i = 1; i <= n; i += 1){
  let str = '';
  for(let j = 1; j <= n; j += 1){
    if(i > n -j){
      str += '*';
    }else{
      str += ' ';
    }
  }
  console.log(str);
}
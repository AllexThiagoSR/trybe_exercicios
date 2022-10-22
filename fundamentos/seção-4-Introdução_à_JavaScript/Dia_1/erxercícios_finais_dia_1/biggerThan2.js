const a = 4;
const b = 123;
const c = 1;

if(a > b && a > c){
  console.log(a);
}else if(b > a && b > c){
  console.log(b);
}else if(c > a && c > b){
  console.log(c);
}else {
  console.log('São iguais');
}
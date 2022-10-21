const bruto = 3000;
let liq = 0;
let ir = 0;
let inss = 0;

if(bruto <= 1556.94){
  inss = (0.08 * bruto);
  console.log(liq);
}else if(2594.92 >= bruto && bruto >= 1556.95){
  inss = (0.09 * bruto);
  console.log(liq);
}else if(2594.93 <= bruto && bruto <= 5189.82){
  inss = (0.11 * bruto);
  console.log(liq);
}else if(bruto > 5189.82){
  inss = 570.88;
  console.log(liq);
}else {
  console.log('pq não entra?');
}

liq = bruto - inss;

if(1903.99 <= liq && liq <= 2826.65){
  ir= (liq * 0.075) - 142.80;
}else if(2826.66 <= liq && liq <= 3751.05){
  ir= (liq * 0.15) - 354.80;
}else if(3751.06 <= liq && liq <= 4664.68){
  ir = (liq * 0.225) - 636.13;
}else if(4664.68 < liq){
  ir = (liq * 0.275) - 869.36;
}

liq -= ir;
console.log('Salário líquido: R$ ' + liq);

const costPrice = 120;
const salePrice = 170;
const totalCost =  costPrice + (costPrice * 0.2);

if(costPrice < 0 || salePrice < 0 || totalCost < 0){
  console.log('ERRO');
}else {
  console.log( 'Lucro: R$ '+ (salePrice - totalCost));
}
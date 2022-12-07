// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maça', 'banana', 'manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condenado', 'açucar'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));

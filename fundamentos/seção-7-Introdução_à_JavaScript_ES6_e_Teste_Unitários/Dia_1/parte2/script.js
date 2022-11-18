const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const cleint = order.name;
  const number = order.phoneNumber;
  const completeAdress = `R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
  return `Olá ${deliveryPerson}, entrega para: ${cleint}, Telefone: ${number}, ${completeAdress}`;
};

console.log(customerInfo(order));

const sumItems = (items) => {
  const keys = Object.keys(items);
  let sum = 0;

  for (let key of keys) {
    sum += items[key].price;
  }
  return sum;
};

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  
  const orderItems = order.order;
  const pizzas = Object.keys(orderItems.pizza);
  const drink = Object.keys(orderItems.drinks);
  
  return `Olá ${order.name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink[0]} é R$ ${order.payment.total},00`;
};

order.name = 'Luiz Silva';
order.payment.total = 50;
console.log(orderModifier(order));
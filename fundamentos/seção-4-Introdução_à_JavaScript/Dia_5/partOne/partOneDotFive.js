const speedCar = speed => (speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`);

let speed = 190;

console.log(speedCar(speed));
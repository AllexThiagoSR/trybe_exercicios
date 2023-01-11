import './style.css';
import { clearInfo, getHeroes, getRandomNumber as random } from './utilitities';

const getBtn = document.getElementById('get-hero');

getBtn.addEventListener('click', () => {
  clearInfo();
  getHeroes().then((data) => console.log(data[random(data.length)]));
});

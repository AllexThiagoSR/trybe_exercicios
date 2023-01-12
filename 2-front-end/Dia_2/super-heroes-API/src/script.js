import './style.css';
import {
  clearInfo,
  getHeroes,
  getRandomNumber as random,
  creatImgDiv,
  addHeroName,
} from './utilitities';

const getBtn = document.getElementById('get-hero');

getBtn.addEventListener('click', () => {
  clearInfo();
  getHeroes().then((data) => {
    const hero = data[random(data.length)];
    creatImgDiv(hero);
    addHeroName(hero);
  });
});

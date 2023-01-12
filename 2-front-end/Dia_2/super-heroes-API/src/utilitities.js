const infos = document.getElementById('infos');

const getRandomNumber = (length) => Math.round(Math.random() * length);

const creatImgDiv = ({ images }) => {
  const div = document.createElement('div');
  div.id = 'hero-img';
  const img = document.createElement('img');
  img.setAttribute('src', images.md);
  div.appendChild(img);
  infos.appendChild(div);
};

const addHeroName = ({ name }) => {
  const nameField = document.createElement('h1');
  nameField.innerText = name;
  infos.appendChild(nameField);
};

const getHeroes = () => fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
  .then((response) => response.json());

const clearInfo = () => {
  infos.innerHTML = '';
};

export { clearInfo, getHeroes, getRandomNumber, creatImgDiv, addHeroName };

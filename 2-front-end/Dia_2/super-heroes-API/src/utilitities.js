const infos = document.getElementById('infos');

// const makeAnElement = (element, properties = {}) => {

// };

const getRandomNumber = (length) => Math.round(Math.random() * length);

const getHeroes = () => fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
  .then((response) => response.json());

const clearInfo = () => {
  infos.innerHTML = '';
};

export { clearInfo, getHeroes, getRandomNumber };

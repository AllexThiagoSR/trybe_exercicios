import './style.css';

const btns = document.getElementsByTagName('button');
const petImg = document.getElementById('pet-img');

const APIS = {
  dog: ['https://dog.ceo/api/breeds/image/random', 'message'], 
  cat: ['https://aws.random.cat/meow', 'file']
};

const getAPet = (api, file) => {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      petImg.innerHTML = makeImg(data[file]);
    });
};

const returnAnyPromise = (api) => fetch(api).then((response) => response.json());

const makeImg = (src) => `<img src="${src}" width="600px">`;

const surprise = () => {
  Promise.any([
    returnAnyPromise(APIS.cat[1]).then(({ file }) => petImg.innerHTML = makeImg(file)),
    returnAnyPromise(APIS.dog[0]).then(({ message }) => petImg.innerHTML = makeImg(message))
  ]);
};

btns[0].addEventListener('click', ({ target }) => {
  const [api, src] = APIS[target.value];
  getAPet(api, src);
});

btns[1].addEventListener('click', ({ target }) => {
  const [api, src] = APIS[target.value];
  getAPet(api, src);
});

btns[2].addEventListener('click', surprise);

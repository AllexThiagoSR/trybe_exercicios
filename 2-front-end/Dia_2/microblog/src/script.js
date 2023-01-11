import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from '../utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const getPosts = (id) => {
  let posts;
  fetch(`https://dummyjson.com/posts/user/${id}`).then((response) => response.json()).then((data) => console.log(data));
  return posts;
};

const USERS_API = 'https://dummyjson.com/users';
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.

fetch(USERS_API).then((response) => response.json()).then(({ users }) => {
  console.log(users);
  fillUsersSelect(users);
});

usersSelect.addEventListener('change', (event) => {
  clearPageData();
  getPosts(event.target.value);
  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
});

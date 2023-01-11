import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from '../utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const getPosts = (id, func) => {
  fetch(`https://dummyjson.com/posts/user/${id}`).then((response) => response.json()).then(({ posts }) => {
    func(posts);
  });
};

const USERS_API = 'https://dummyjson.com/users';
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.

fetch(USERS_API).then((response) => response.json()).then(({ users }) => {
  fillUsersSelect(users);
});

usersSelect.addEventListener('change', (event) => {
  clearPageData();
  getPosts(event.target.value, fillPosts);
});

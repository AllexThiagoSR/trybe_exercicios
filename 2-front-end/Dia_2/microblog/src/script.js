import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from '../utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const addComments = (id) => {
  fetch(`https://dummyjson.com/posts/${id}/comments`).then((response) => response.json()).then(({ comments }) => {
    console.log(comments);
    console.log(id);
    fillFeaturedPostComments(comments);
  });
};

const addPosts = (id) => {
  fetch(`https://dummyjson.com/posts/user/${id}`).then((response) => response.json()).then(({ posts }) => {
    console.log(posts);
    fillPosts(posts);
    addComments(posts[0].id);
  });
};

const USERS_API = 'https://dummyjson.com/users';
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.

fetch(USERS_API).then((response) => response.json()).then(({ users }) => {
  fillUsersSelect(users);
});

usersSelect.addEventListener('change', (event) => {
  clearPageData();
  addPosts(event.target.value);
});

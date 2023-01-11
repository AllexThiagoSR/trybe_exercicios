import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from '../utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const addComments = (postId) => {
  fetch(`https://dummyjson.com/posts/${postId}/comments`)
    .then((response) => response.json())
    .then(({ comments }) => {
      fillFeaturedPostComments(comments);
    })
    .catch(({ message }) => fillErrorMessage(message));
};

const addPosts = (id) => {
  fetch(`https://dummyjson.com/posts/user/${id}`)
    .then((response) => response.json())
    .then(({ posts }) => {
      fillPosts(posts);
      addComments(posts[0].id);
    })
    .catch(({ message }) => fillErrorMessage(message));
};

const USERS_API = 'https://dummyjson.com/users';
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.

fetch(USERS_API)
  .then((response) => response.json())
  .then(({ users }) => {
    fillUsersSelect(users);
  })
  .catch(({ message }) => fillErrorMessage(message));

usersSelect.addEventListener('change', (event) => {
  clearPageData();
  addPosts(event.target.value);
});

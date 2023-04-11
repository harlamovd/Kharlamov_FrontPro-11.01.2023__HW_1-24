// Я по разному делал єто задание, приводя в тот вид который по моему мнению лаконичней и четабельней
// все пытался обеденять в функцыи, что бы небыло обработки вне функций.
// Я решил все APIrequest сделать спомошью async/await и fetch. Переделывал много раз разбирался как избегать
// постоянных then().
/*const inputBlock = document.querySelector('.input_block');*/
const inputNumberPost = document.querySelector('.input_block__input');
const buttonInput = document.querySelector('.input_block__button');
const postBlock = document.querySelector('.post_block');
const commentsBlock = document.querySelector('.comments_block');
const baseUrl = 'https://jsonplaceholder.typicode.com';


buttonInput.addEventListener('click', buttonInputClickHandler);

// тут я переделал обработку ошибок спомошью try/catch вроде работает.
async function getData(url) {
    try {
        const request = await fetch(url)
        if (!request.ok) {
            throw new Error('Error:  '+ request.status);
        }
        const data = await request.json();
        return data;
    }
    catch (e) {
        renderGetError(e)
        console.log(e)
    }
}
function renderGetError (error){
    postBlock.innerHTML = '';
    commentsBlock.innerHTML = '';
    postBlock.insertAdjacentHTML('beforeend',`<p> Вибачте виникла помилка ${error} </p>`);
}

// Эти две функцыи сделал для запросов с помощью XMLHttpRequest - promiseData и getData, они работают вцепеке,
// что бы возвращати именн обэкт или масив а не promise, таким образом их можно вписать в остальную логику.
// сделаты исключительно что бы показать мое понимание работы XMLHttpRequest, так как в чате телеграма вы написали,
// что надо использывать и fetch и XMLHttpRequest.

/*async function promiseData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = 'json';
  return new Promise((resolve, reject) => {
    xhr.onload = () => {
      resolve(xhr.response);
    }
    xhr.onerror = () => {
      reject(xhr.statusText);
    }
    xhr.send();
  });
}
async function getData(url) {
  const request = await promiseData(url);
  return request;
}*/

// тут я формирую URL для запроса
async function getPost(postId) {
    const urlPost = new URL(`/posts/${postId}`, baseUrl);
    const post = await getData(urlPost);
    return post;
}

async function getUser(userId) {
    const urlUser = new URL(`/users/${userId}`, baseUrl);
    const user = await getData(urlUser);
    return user;
}
// тут использую createElement, кода больше, но по идеи безопасно.
function renderPostBlock(user, post) {
    const title = document.createElement('h1');
    const content = document.createElement('p');
    const author = document.createElement('p');
    const buttonComments = document.createElement('button');
    postBlock.innerHTML = '';
    commentsBlock.innerHTML = '';
    postBlock.dataset.name = user.name;
    postBlock.dataset.userName = user.username;
    title.innerText = post.title;
    title.classList.add('post_block__title');
    content.innerHTML = post.body;
    content.classList.add('post_block__content');
    author.innerText = `${user.name}  "${user.username}"`;
    author.classList.add('post_block__author');
    buttonComments.innerText = 'Коментарі';
    buttonComments.classList.add('post_block__button');
    buttonComments.dataset.postId = post.id;
    postBlock.prepend(content);
    postBlock.prepend(title);
    postBlock.append(author);
    postBlock.append(buttonComments);
    buttonComments.addEventListener('click', buttonCommentsClickHandler);
}

// Это мой первый вариан рендера коментов, он создает разу все коменты и загружает на странницу,
// потом я подумал что можно подгружать на страницу отделько каждый комент, это если их много и надо будет например
// выводить первые 5 а остольные по желанию при нажатии на кнопку - и переделал функцию
/*
function renderComments(arr) {
  let res = '';
  for (const el of arr) {
    res += `<div class="comments_block__wrapper">
        <h3 class="comments_block__title">${el.name}</h3>
        <p class="comments_block__content">${el.body}</p>
        <p class="comments_block__mail">${el.email}</p></div>`;
  }
  comments_block.insertAdjacentHTML('afterbegin', res);
}
*/

// тут на каждой этерации создаеться и выводиться комент
function renderComments(arr) {
    for (const el of arr) {
        let res = '';
        res += `<div class="comments_block__wrapper"> 
        <h3 class="comments_block__title">${el.name}</h3>
        <p class="comments_block__content">${el.body}</p>
        <p class="comments_block__mail">${el.email}</p></div>`;
        commentsBlock.insertAdjacentHTML('beforeend', res);
    }
}

async function buttonInputClickHandler() {
    const postId = inputNumberPost.value;
    if (postId && postId <= 100 && postId > 0) {
        const post = await getPost(postId);
        const user = await getUser(post.userId);
        renderPostBlock(user, post);
    } else {
        inputNumberPost.value = '';
        inputNumberPost.placeholder = 'Введіть від 1 до 100';
    }
}

async function buttonCommentsClickHandler(e) {
    const urlComments = new URL(`/comments`, baseUrl);
    const postId = e.target.dataset.postId;
    urlComments.searchParams.set('postId', postId);
    const comments = await getData(urlComments);
    renderComments(comments);
}

const inputNumberPost = document.querySelector('.input_block__input');
const buttonInput = document.querySelector('.input_block__button');
const postBlock = document.querySelector('.post_block');
const commentsBlock = document.querySelector('.comments_block');
const baseUrl = 'https://jsonplaceholder.typicode.com';


function buttonInputClickHandler() {
    const postId = inputNumberPost.value;
    if (postId && postId <= 100 && postId > 0) {
        getData(urlPost())
            .then(data => renderPostBlock(data));
    } else {
        inputNumberPost.value = '';
        inputNumberPost.placeholder = 'Введіть від 1 до 100';
    }
}
function urlPost() {
    const urlPostRes = new URL(`/posts/${inputNumberPost.value}`, baseUrl);
    return urlPostRes;
}
// Я переделал GET запрос с помощью Promise then/catch и убрал async/await,
// теперь фукнция getData возвращает промис в котором resolve response.json(), если нет ошибки.
// обработка ошибои следующая: так как фетч не отправляет в catch ошибки запроса в том числе 404,
// я делаю проверку на response.ok, если там false викидываеться пренудительно ошибка  throw new Error
// в сообщении передаеться номер ошибки например 404, так как выкидываеться ошибка, промыс сразу
// переходит на catch где обрабатываеться и создает узел с выводом на строницу.
// я проверял как работает обработка ошибок, все срабатывают и если неправельный поиск
// и если испорченная строка URL.
// функция getData позвращает промыс и уже в функции buttonInputClickHandler обрабатываеться
// с помощью then где запускаеться следующая функция.
// в файле index.js содержиться предыдуший код, где я обработал ошибки с помощью
function getData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Код помилки: ' + response.status);
                }
                return response;
            })
            .then(response => resolve(response.json()))
            .catch(error => {
                rerenderGetError(error);
                console.log(error);
            })
    })
}
function rerenderGetError (error){
    postBlock.innerHTML = '';
    commentsBlock.innerHTML ='';
    postBlock.insertAdjacentHTML('beforeend',`<p> Вибачте виникла помилка ${error} </p>`);
}

function renderPostBlock(post) {
    const title = document.createElement('h1');
    const content = document.createElement('p');
    const buttonComments = document.createElement('button');
    postBlock.innerHTML = '';
    commentsBlock.innerHTML = '';
    title.innerText = post.title;
    title.classList.add('post_block__title');
    content.innerHTML = post.body;
    content.classList.add('post_block__content');
    buttonComments.innerText = 'Коментарі';
    buttonComments.classList.add('post_block__button');
    buttonComments.dataset.postId = post.id;
    postBlock.prepend(content);
    postBlock.prepend(title);
    postBlock.append(buttonComments);
    buttonComments.addEventListener('click', buttonCommentsClickHandler);
}

function buttonCommentsClickHandler(e) {
    const urlComments = new URL(`/comments`, baseUrl);
    const postId = e.target.dataset.postId;
    urlComments.searchParams.set('postId', postId);
    getData(urlComments)
        .then((data) => {renderComments(data)})
}
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

buttonInput.addEventListener('click', buttonInputClickHandler);
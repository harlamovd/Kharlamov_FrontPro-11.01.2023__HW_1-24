// Задание № 1
// логика такая, что при нажатии на Registration появляеться окно на сером фоне, с соглашением о конфиденцыальности
// если не принимать оно закроеться, если принять то прогрузиться форма для записи на консультацию. кнопка Submit form
// также закрывает окно, но по идеи отправляет форму, я не углублял логику.
// Закрытие окна работает путем удаления его разметки HTML, Лисенер работает по всплытию.

const buttonRegistration = document.querySelector('.offer__button');
buttonRegistration.addEventListener('click', creatingAgreementWindow);

function creatingAgreementWindow() {
  const agreementWindow = `
  <div class="wrapper">
  <div class="background"> </div>
        <div class="agreement">
        <h4 class="agreement__title"> Privacy agreement </h4>
        <p class="agreement__desc"> You undertake not to disclose any information that becomes known to you during 
        the consultation process.</p>
        <div class="agreement__wrapper_button">
        <button class="agreement__button button_disagree"> DISAGREE </button>
        <button class="agreement__button button_agree">AGREE</button>
        </div></div>`;
  document.body.insertAdjacentHTML('beforeend', agreementWindow);
  let backgroundBlock = document.querySelector('.wrapper');
  backgroundBlock.addEventListener('click', listenerAgreementWindow);
}
function listenerAgreementWindow(event) {
  const targetClass = Array.from(event.target.classList);
  if (
    targetClass.includes('background') ||
    targetClass.includes('button_disagree')
  ) {
    document.body.removeChild(document.querySelector('.wrapper'));
  } else if (targetClass.includes('button_agree')) {
    const agreementWrapper = document.querySelector('.agreement');
    agreementWrapper.innerHTML = '';
    creatingForm(agreementWrapper);
  }
}

function creatingForm(node) {
  const agreementForm = `<label class="form__label"> Name <input  class="form__input" type="text"> </label>
    <label class="form__label">Phone<input  class="form__input" type="tel"></label>
    <label class="form__label">E-mail<input class="form__input" type="email"></label>
    <button class="agreement__button form__button">Submit form</button>`;
  node.classList.add('agreement__form');
  node.insertAdjacentHTML('beforeend', agreementForm);
  document.querySelector('.form__button').addEventListener('click', () => {
    document.body.removeChild(document.querySelector('.wrapper'));
  });
}

// Задача № 2
// Тут я нгемного помучался, так как addEventListener по 'scroll' задваивает, и пришлось делать костыль в виде стопора brakeScroll
// на повторное сробатывание addEventListener по 'scroll'.
// Если убрать brakeScroll то карточки не будут прогружаться порцыями по 8 штур, а будут крузиться в зависимости от
// рескости прокрутки колеса скрола, так как  Listener с необходимыми условиями будет вызываться несколько раз
// и запускать дополнительную генерацию карточек карточек
//_____________________________
const INIT_POSTS_COUNT = 12;
const POSTS_PER_PAGE = 8;
const SCROLL_SENSITIVITY = 50; //in px
const UPLOAD_PAUSE = 500; // in ms
let shownPages = 0;

const scrollWrapper = document.querySelector('.scroll_wrapper');

async function getAllPosts() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  try {
    const request = await fetch(url);
    if (!request.ok) {
      throw new Error('Error:  ' + request.status);
    }
    const data = await request.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

async function getPosts(firstPostIndex, lastPostIndex) {
  const allPosts = await getAllPosts();
  return allPosts.slice(firstPostIndex, lastPostIndex);
}

function createPostsBlock(posts) {
  const htmlForRender = posts.reduce((block, post) => {
    const { title, body, id } = post;
    return (
      block +
      `<div class="scroll_wrapper__card"> <h3> ${title} </h3> <p> ${body} </p> <p> ${id}</p></div>`
    );
  }, '');
  return htmlForRender;
}

async function createScrollBlock(init = false) {
  const firstPostIndex = init
    ? 0
    : INIT_POSTS_COUNT + (shownPages - 1) * POSTS_PER_PAGE;
  const lastPostIndex = init
    ? INIT_POSTS_COUNT
    : INIT_POSTS_COUNT + shownPages * POSTS_PER_PAGE;
  const postsForRender = await getPosts(firstPostIndex, lastPostIndex);
  const htmlForRender = createPostsBlock(postsForRender);
  document
    .querySelector('.scroll_wrapper')
    .insertAdjacentHTML('beforeend', htmlForRender);
  shownPages++;
}

let freezeTimer;

const freeze = (callback, time) => {
  if (freezeTimer) return;
  freezeTimer = true;
  setTimeout(() => {
    callback();
    freezeTimer = false;
  }, time);
};

window.addEventListener('scroll', () => {
  freeze(() => {
    const endOfPage =
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight + SCROLL_SENSITIVITY;
    if (endOfPage) {
      createScrollBlock();
    }
  }, UPLOAD_PAUSE);
});
createScrollBlock(true);

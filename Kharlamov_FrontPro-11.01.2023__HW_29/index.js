/*
Походу выполнения возникали вопросы правельно ли делать таким образом, я решил такой вариант будет лучше,
для каждого основного действия своя функцыя. Функцыи делал без принимающих параметров, хотя думаю надо
что бы они принимали параметрами масив товаров.
Сам массив товаров незнаю как правельней сделать, я решил поступить таким образом, и уже от этого исходил.
*/

const products = [
    {
        category: 'Телевізори',
        idCategory: 'cat1',
        list: [
            {
                productName: 'LG V42b',
                idProduct: '1',
                img: 'img/5132741.png',
                price: '100',
                specification: {
                    year: '2022',
                    color: 'Black',
                    guarantee: '1 года',
                    set: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`,
                }

            },
            {
                productName: 'Sony L42b',
                idProduct: '2',
                img: 'img/5132741.png',
                price: '100',
                specification: {
                    year: '2022',
                    color: 'Black',
                    guarantee: '2 года',
                    set: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`
                }
            },
            {
                productName: 'Sony 4K TRE82',
                idProduct: '3',
                img: 'img/5132741.png',
                price: '100',
                specification: {
                    year: '2022',
                    color: 'Black',
                    guarantee: '3 года',
                    set: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`
                }
            },
            {
                productName: 'LG Turbo W42b7',
                idProduct: '4',
                img: 'img/5132741.png',
                price: '100',
                specification: {
                    year: '2022',
                    color: 'Black',
                    guarantee: '4 года',
                    set: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`
                }
            },
            {
                productName: 'Samsung BR56_d43',
                idProduct: '5',
                img: 'img/5132741.png',
                price: '100',
                specification: {
                    year: '2022',
                    color: 'Black',
                    guarantee: '5 года',
                    set: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`
                }
            },
        ]
    },
    {
        category: 'Ноутбуки',
        idCategory: 'cat2',
        list: [
            {
                productName: 'Lenovo IdeaPad 1',
                idProduct: '6',
                img: 'img/33824691.png',
                price: '100',
                specification: {
                    year: '2022',
                    color: 'Black',
                    guarantee: '6 года',
                    set: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`
                }
            },
            {
                productName: 'Asus ROG Strix',
                idProduct: '7',
                img: 'img/33824691.png',
                price: '100',
                specification: {
                    year: '2022',
                    color: 'Black',
                    guarantee: '7 года',
                    set: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`
                }
            },
            {
                productName: 'MacBook Air M1',
                idProduct: '8',
                img: 'img/33824691.png',
                price: '100',
                specification: {
                    year: '2022',
                    color: 'Black',
                    guarantee: '8 года',
                    set: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`
                }
            },
            {
                productName: 'Asus Tyrbo 34g5',
                idProduct: '9',
                img: 'img/33824691.png',
                price: '100',
                specification: {
                    year: '2022',
                    color: 'Black',
                    guarantee: '10 года',
                    set: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`
                }
            },
            {
                productName: 'MacBook M3',
                idProduct: '10',
                img: 'img/33824691.png',
                price: '100',
                specification: {
                    year: '2022',
                    color: 'Black',
                    guarantee: '10 года',
                    set: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`
                }
            },
        ]
    },
    {
        category: 'Смартфони',
        idCategory: 'cat3',
        list: [
            {
                productName: 'Samsung Galaxy A73',
                idProduct: '11',
                img: 'img/7683132.png',
                price: '100',
                specification: {
                    year: '2022',
                    color: 'Black',
                    guarantee: '11 года',
                    set: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`
                }
            },
            {
                productName: 'Realme 10 Pro',
                idProduct: '12',
                img: 'img/7683132.png',
                price: '100',
                specification: {
                    year: '2022',
                    color: 'Black',
                    guarantee: '12 года',
                    set: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`
                }
            },
            {
                productName: 'Apple iPhone 13',
                idProduct: '13',
                img: 'img/7683132.png',
                price: '100',
                specification: {
                    year: '2022',
                    color: 'Black',
                    guarantee: '13 года',
                    set: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`
                }
            },
            {
                productName: 'Galaxy A5',
                idProduct: '14',
                img: 'img/7683132.png',
                price: '100',
                specification: {
                    year: '2022',
                    color: 'Black',
                    guarantee: '14 года',
                    set: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`
                }
            },
            {
                productName: 'Realme 3 Gold',
                idProduct: '15',
                img: 'img/7683132.png',
                price: '100',
                specification: {
                    year: '2022',
                    color: 'Black',
                    guarantee: '15 года',
                    set: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`
                }
            },
        ]
    },
    {
        category: 'Ігрові приставки',
        idCategory: 'cat4',
        list: [
            {
                productName: 'Xbox Series Х',
                idProduct: '16',
                img: 'img/4704504.png',
                price: '100',
                specification: {
                    year: '2022',
                    color: 'Black',
                    guarantee: '16 года',
                    set: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`
                }
            },
            {
                productName: 'PlayStation 5',
                idProduct: '17',
                img: 'img/4704504.png',
                price: '100',
                specification: {
                    year: '2022',
                    color: 'Black',
                    guarantee: '17 года',
                    set: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`
                }
            },
            {
                productName: 'Nintendo Switch',
                idProduct: '18',
                img: 'img/4704504.png',
                price: '100',
                specification: {
                    year: '2022',
                    color: 'Black',
                    guarantee: '18 года',
                    set: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`
                }
            },
            {
                productName: 'Xbox S',
                idProduct: '19',
                img: 'img/4704504.png',
                price: '100',
                specification: {
                    year: '2022',
                    color: 'Black',
                    guarantee: '19 года',
                    set: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`
                }
            },
            {
                productName: 'PlayStation 3',
                idProduct: '20',
                img: 'img/4704504.png',
                price: '100',
                specification: {
                    year: '2022',
                    color: 'Black',
                    guarantee: '20 года',
                    set: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`
                }
            },
        ]
    },
    {
        category: 'Смарт-годинники',
        idCategory: 'cat5',
        list: [
            {
                productName: 'Apple Watch ULTRA',
                idProduct: '21',
                img: 'img/3879794.png',
                price: '100',
                specification: {
                    year: '2022',
                    color: 'Black',
                    guarantee: '21 года',
                    set: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`
                }
            },
            {
                productName: 'Samsung Galaxy Watch4',
                idProduct: '22',
                img: 'img/3879794.png',
                price: '100',
                specification: {
                    year: '2022',
                    color: 'Black',
                    guarantee: '22 года',
                    set: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`
                }
            },
            {
                productName: 'Xiaomi Mi Smart Band 6',
                idProduct: '23',
                img: 'img/3879794.png',
                price: '100',
                specification: {
                    year: '2022',
                    color: 'Black',
                    guarantee: '23 года',
                    set: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`
                }
            },
            {
                productName: 'Apple Watch 2',
                idProduct: '24',
                img: 'img/3879794.png',
                price: '100',
                specification: {
                    year: '2022',
                    color: 'Black',
                    guarantee: '24 года',
                    set: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`
                }
            },
            {
                productName: 'Xiaomi clock 2',
                idProduct: '25',
                img: 'img/3879794.png',
                price: '100',
                specification: {
                    year: '2022',
                    color: 'Black',
                    guarantee: '25 года',
                    set: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.`
                }
            },
        ]
    },
    ];

const categoryBlock = document.querySelector('.category_block');
const productBlock = document.querySelector('.product_block');
const specificationBlock = document.querySelector('.specification_block');


/*
Тут  создаем наши категории товаров
*/
function creatingCategoriesList (parentBlock) {
    parentBlock.insertAdjacentHTML('beforeend', `<ul class="category_list"></ul>`);
    const categoryList = document.querySelector('.category_list');
    for (let el of products){
        categoryList.insertAdjacentHTML('beforeend', `<li class="category_element" id="${el.idCategory}"> ${el.category}</li>`);
    }
}
/*
Тут по выбранной категории создаем список токаров.
я в productBlock.dataset.idCategory сохраняю id, так как мне он нужен в следующей функцыи что бы не переберать весь масив
продуктов а обратиться в той категории которая у нас выбрана.
я хотел сохранить id в Session Storage но решил правельней в дата атребут
*/
function eventCreatingProductList (event) {
    if (Array.from(event.target.classList).includes("category_element")){
        productBlock.innerHTML = '';  // обнуляем, при выборе новой категории
        specificationBlock.innerHTML = '';
        productBlock.dataset.idCategory = event.target.id; //тут сохраняю id он мне нужен дальше
        let productList = '';
        const requestedCategories = products.find(element => element.idCategory === (event.target.id)).list;
        for (let element of requestedCategories) {
            productList += `<div class='product_card' id='${element.idProduct}'>  
                <img class="product_card__img" src="${element.img}"> 
                <h2 class="product_card__title">${element.productName}</h2>  
                <p class="product_card__price"> ${element.price} грн.</p></div>`
        }
        productBlock.insertAdjacentHTML('beforeend', productList);
        return requestedCategories;
    }
}
/*
Тут уже создаем описание нашего товара с кнопкой купить.
именно сдесь я использую dataset.idCategory получаю id категории
также в этой функции я создаю addEventListener по кнопке купить, так как именно в этом скоупе мы создаем узел кнопки,
*/
function eventCreatingSpecificationProduct(event) {
    if (Array.from((event.target.parentNode).classList).includes("product_card")){
        specificationBlock.innerHTML = '';
        let requestedCategories = products.find(element => element.idCategory === (productBlock.dataset.idCategory)).list;
        let requestedProduct = requestedCategories.find(element => element.idProduct === ((event.target.parentElement).id));
        let specification = `<img class="specification_block__img" src="${requestedProduct.img}"> 
                <h2 class="specification_block__title">${requestedProduct.productName}</h2>  
                <p class="specification_block__price"> ${requestedProduct.price} грн.</p> 
                <p class="specification_block__specification"> <b>Год выпуска:</b>  ${requestedProduct.specification.year} <br> 
                <b>Цвет:</b>   ${requestedProduct.specification.color}<br>
                <b>Гарантия:</b>  ${requestedProduct.specification.guarantee} <br>
                <b>Компликтацыя:</b>   ${requestedProduct.specification.set}</p> 
                <button class="specification_block__button"> BUY </button>`;
        specificationBlock.insertAdjacentHTML('beforeend', specification);
        const byu = document.querySelector('.specification_block__button');
        byu.addEventListener('click', message);
    }
}
/*
Тут создаем окно с уведомление о покупке товара.
я решил сделать setTimeout который через полтары секунды удалит уведомление и вернет нас в начала путем обнуления блоков
*/
function message (){
    document.body.insertAdjacentHTML('afterbegin', `<div class="message_block"> Товар Преобретен  </div>`);
    let messageBlock = document.querySelector('.message_block');
    setTimeout(()=>{messageBlock.remove();
        specificationBlock.innerHTML = "";
        productBlock.innerHTML = '';}, 1500);
}
creatingCategoriesList (categoryBlock);
categoryBlock.addEventListener('click', eventCreatingProductList);
productBlock.addEventListener('click', eventCreatingSpecificationProduct);






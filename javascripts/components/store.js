import book from '../helpers/book.js';
import util from '../helpers/util.js';

const addToCartEvent = (e) => {
    e.preventDefault();
    const bookInfo = book.getBook();
    console.log(bookInfo);
}

const makeStore = () => {
    const bookInfo = book.getBook();
    let domString = `<h2>Our only book</h2>`;
    domString += `<div class="image-container">`;
    domString += `<h3>${bookInfo.price}</h3>`;
    domString += `<img src="${bookInfo.imageUrl}" alt="bookcover" />`;
    domString += `<button id="cartBtn" class="btn btn-danger">Add to Cart</button>`;
    domString += `</div>`;
    util.printToDom('store-container', domString);
    document.getElementById('cartBtn').addEventListener('click', addToCartEvent);
};

export default { makeStore }
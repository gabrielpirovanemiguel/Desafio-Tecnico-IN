import {booksByCategory} from './booksByCategory.js'
function countBooksInCategory(books) {
    let categoryObject = {};
    books.forEach((category) => {categoryObject[category.category] = category.books.length});
    return categoryObject
}
console.log(countBooksInCategory(booksByCategory));
alert('Resultado no console.');
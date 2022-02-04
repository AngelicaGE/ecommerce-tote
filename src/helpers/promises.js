import books from '../data/books.js'
export const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('in the promise');
        resolve(books)
    }, 2000);
} );
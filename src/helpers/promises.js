import books from '../data/books.js'
export const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('in the promise getProducts');
        resolve(books)
    }, 2000);
} );

export function getCategories(categories){
    return new Promise((resolve, reject) => {
        console.log('in the promise getCategories');
        if (categories && categories.length > 0) {
            let newCategories = [];
            // loop through every category
            categories.forEach(cat => {
                if(cat.includes(" / ")){
                    // split categories that come in form "cat A / cat B / cat C"
                    const splitCats = cat.split(" / ")
                    splitCats.forEach(splitCat => {
                        if (!newCategories.includes(splitCat)){
                            newCategories.push(splitCat);
                        }
                    });
                }else{
                    if (!newCategories.includes(cat)){
                        newCategories.push(cat);
                    }
                }
            });
            console.log(newCategories)
            resolve(newCategories)            
        } else {
            reject(Error("Received empty array for categories"))
        }
    });
} 
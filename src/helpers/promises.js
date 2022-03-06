export function getCategories(categories){
    return new Promise((resolve, reject) => {
        //console.log('in the promise getCategories');
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
            resolve(newCategories)            
        } else {
            reject(Error("Received empty or undefined array for categories"))
        }
    });
} 

export function getAllCategories(){
    return new Promise((resolve, reject) => {
        //console.log('in the promise getCategories');
        resolve(["Physics", "Science", "Young Adult Nonfiction"])
    });
} 

export const allCategories = [ "Romance", "Science", "Young Adult Nonfiction", "Finance"]
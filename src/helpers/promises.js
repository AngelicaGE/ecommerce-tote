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
        resolve(allCategories)
    });
} 

export const allCategories = [
    {title: "Novels", category: "Novels", image: "novels.jpg"},
    {title: "Fiction", category: "Fiction", image: "fiction.jpg"},
    {title: "Education", category: "Education", image: "education.jpg"},
    {title: "History", category: "History", image: "history.jpg"},
    {title: "Non Fiction", category: "Nonfiction", image: "nonfiction.jpg"},
    {title: "Health", category: "Health and personal growth", image: "health.jpg"}
]

export const ourPicks = [ 
    {category: "Romance", message: "To melt your hear"},
    {category: "Finance", message: "Lets talk about finance"},
    {category: "Fairy tales", message: "Recomendations for the little ones"}
]
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

export const allTechs = [
    {name: "Github", icon:"gh.png"},
    {name: "React.js", icon:"react.png"},
    {name: "CSS (no framework)", icon:"css.png"},
    {name: "Firebase", icon:"firebase.png"},
    {name: "Google Book API", icon:"google.png"}

]

export const allCategories = [
    {title: "Novels", category: "Novels", image: "novels.jpg"},
    {title: "Fiction", category: "Fiction", image: "fiction.jpg"},
    {title: "Education", category: "Education", image: "education.jpg"},
    {title: "History", category: "History", image: "history.jpg"},
    {title: "Non Fiction", category: "Nonfiction", image: "nonfiction.jpg"},
    {title: "Health", category: "Health and personal growth", image: "health.jpg"}
]

export const allCards = [
    {title: "Free Shipping", caption: "Free shipping on all orders—no minimum purchase required", icon: "free-delivery.png"},
    {title: "10% off in Store", caption: "Everything you see online can be found in store as well. Visit Bazarcito Lector store to get amazing discounts", icon: "tag.png"},
    {title: "Become a member", caption: "Bazarcito members enjoy exclusive benefits, become one to enjoy them right away!", icon: "membership.png"}
]

export const ourPicks = [ 
    {category: "Romance", message: "To melt your hear"},
    {category: "Finance", message: "Lets talk about finance"},
    {category: "Fairy tales", message: "Recomendations for the little ones"}
]
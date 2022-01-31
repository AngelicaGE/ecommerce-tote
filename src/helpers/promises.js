export const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('in the promise');
        resolve([
            {id: "1", name: "Macario", price: 100, imagePath: "https://www.gandhi.com.mx/media/catalog/product/9/7/9786074535594_2a47.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=478&width=300&canvas=300:478"},
            {id: "2", name: "Los miserables", price: 169, imagePath: "http://kbimages1-a.akamaihd.net/Images/e90b5051-13e2-4fb6-b94d-369599b30a49/265/265/False/image.jpg"},
            {id: "3", name: "Mujercitas", price: 349, imagePath: "https://www.gandhi.com.mx/media/catalog/product/t/m/tmp9786078678181_7eb1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=478&width=300&canvas=300:478"},
            {id: "4", name: "Sapiens", price: 449, imagePath: "https://www.gandhi.com.mx/media/catalog/product/9/7/9786073808910_9ebf.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=478&width=300&canvas=300:478"},
            {id: "5", name: "Emma", price: 299, imagePath: "https://www.gandhi.com.mx/media/catalog/product/9/7/9786073807456_7b60.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=478&width=300&canvas=300:478"},
            {id: "6", name: "Agujero", price: 440, imagePath: "https://www.gandhi.com.mx/media/catalog/product/t/m/tmp9788418668050_96dd.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=478&width=300&canvas=300:478"},
            {id: "7", name: "El sendero de la sal", price: 384, imagePath: "https://www.gandhi.com.mx/media/catalog/product/t/m/tmp9788412135404_3139.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=478&width=300&canvas=300:478"},
        ])
    }, 2000);
} );
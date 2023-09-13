export default class Product {
  //1. Typages des propriétès d'un produit.
    id: number;
    title: string;
    price: number;
    description: string;
    discountPercentage:number;
    rating: number;
    stock: number;
    brand:string;
    category: string;
    thumbnail:string;
    images:Array<string>; 
    //2. Définition des valeurs par défault.
    constructor(
     id: number,
     title: string = 'Product Name',
     price: number = 10,
     description: string = '...',
     discountPercentage: 13.58,
     rating: 4.69,
     stock: 94,
     brand: 'Dry Rose',
     category: "groceries",
     thumbnail: "https://i.dummyjson.com/data/products/25/thumbnail.jpg",
     images: [
        "https://i.dummyjson.com/data/products/25/1.png",
        "https://i.dummyjson.com/data/products/25/2.jpg",
        "https://i.dummyjson.com/data/products/25/3.png",
        "https://i.dummyjson.com/data/products/25/4.jpg",
        "https://i.dummyjson.com/data/products/25/thumbnail.jpg"
        ]
     ) {
    //3. Initialisation des propriétès.
     this.id = id;
     this.title = title;
     this.price = price;
     this.description = description;
     this.discountPercentage = discountPercentage;
     this.rating = rating;
     this.stock = stock;
     this.brand = brand;
     this.category = category;
     this.thumbnail = thumbnail;
     this.images = images;
    }
   }
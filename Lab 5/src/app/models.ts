export class Item {
  likes: number;
  category: String;
  id: number;
  name: string;
  description: string;
  price: number;
  imageLink: string;
  rating: number;
  productLink: string;

  constructor(likes: number, category: String, id: number, name: string, description: string, price: number, imageLink: string, rating: number, productLink: string) {
    this.likes = likes;
    this.category = category;
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageLink = imageLink;
    this.rating = rating;
    this.productLink = productLink;
  }
}



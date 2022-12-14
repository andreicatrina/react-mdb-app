import { ProductCard } from "./components";
import productPic from "../../images/productPic.jpg";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export let productList = [];

for (let i = 1; i <= 80; i++) {
  const reviews = [];
  const reviewsCount = getRandomInt(1, 15);
  const collections = ["pentru-el", "pentru-ea", "cupluri"];

  const randomCollection = collections[getRandomInt(0, 2)];
  // console.log(randomCollection);

  for (let i = 1; i <= reviewsCount; i++) {
    const fakedReview = {
      id: i,
      name: "Jane",
      rating: getRandomInt(1, 5),
      email: "jane@doe.com",
      title: "Good",
      text: "Sometimes might be good, sometimes might be shit",
      date: new Date(`${getRandomInt(1, 30)} Oct 2022 ${getRandomInt(0, 23)}:00:00`),
    };
    reviews.push(fakedReview);
  }

  const fakedProduct = {
    id: i,
    name: `ProductCard ${i}`,
    price: getRandomInt(10, 199),
    image: productPic,
    rating: getRandomInt(1, 5),
    reviews,
    collection: randomCollection,
    date: Date.parse(`${getRandomInt(1, 30)} Oct 2022 00:00:00`),
  };
  // console.log(fakedProduct.name);
  // console.log(fakedProduct.collection);
  // console.log(fakedProduct);

  productList.push(fakedProduct);
}

export const getProductById = function (id) {
  let filteredProducts = productList.filter((product) => {
    return product.id === id;
  });

  return filteredProducts[0];
};

export const searchProductsByName = function (str) {
  let filteredProducts = productList.filter((product) => {
    return product.name.toLowerCase().includes(str.toLowerCase());
  });

  return filteredProducts;
};

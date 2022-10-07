import { ProductCard } from "./components";
import productPic from "../../images/productPic.jpg";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export let productList = [];

for(let i = 1; i <= 40; i++) {
  const reviews = [];
  const reviewsCount = getRandomInt(1, 15);

  for (let i = 1; i <= reviewsCount; i++) {
    const fakedReview = {
      id: i,
      name: "Jane",
      stars: getRandomInt(1, 5),
      email: "jane@doe.com",
      title: "Good",
      text: "Sometimes might be good, sometimes might be shit",
      date: "22/10/2022 10:15",
    }
    reviews.push(fakedReview);
  }

  const fakedProduct = {
    id: i,
    name: `ProductCard${i}`,
    price: getRandomInt(10, 199),
    image: productPic,
    rating: getRandomInt(1, 5),
    reviews,
  };

  productList.push(fakedProduct);
}

export const getProductById = function (id) {
  let filteredProducts = productList.filter((product) => {
    return product.id === id;
  });

  return filteredProducts[0];
};

const searchProductByName = function (str) {
  let filteredProducts = productList.filter((product) => {
    return product.name.includes(str);
  });

  return filteredProducts[0];
};

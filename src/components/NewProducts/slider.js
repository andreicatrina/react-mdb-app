import { ProductCard } from "./components";
import productPic from "../../images/productPic.jpg";

export const productList = [
  { name: "ProductCard1", price: 10, image: productPic, rating: 3, id: 1 },
  { name: "ProductCard2", price: 10, image: productPic, rating: 3, id: 2 },
  { name: "ProductCard3", price: 10, image: productPic, rating: 3, id: 3 },
  { name: "ProductCard4", price: 10, image: productPic, rating: 3, id: 4 },
  { name: "ProductCard5", price: 10, image: productPic, rating: 3, id: 5 },
  { name: "ProductCard6", price: 10, image: productPic, rating: 3, id: 6 },
  { name: "ProductCard7", price: 10, image: productPic, rating: 3, id: 7 },
  { name: "ProductCard8", price: 10, image: productPic, rating: 3, id: 8 },
  { name: "ProductCard9", price: 10, image: productPic, rating: 3, id: 9 },
  { name: "ProductCard10", price: 10, image: productPic, rating: 3, id: 10 },
];

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

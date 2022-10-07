import { ProductCard } from "./components";
import productPic from "../../images/productPic.jpg";

export const productList = [
  {
    name: "ProductCard1",
    price: 10,
    image: productPic,
    rating: 3,
    id: 1,
    reviews: [
      {
        id: 1,
        name: "Jane",
        stars: 3,
        email: "jane@doe.com",
        title: "Good",
        text: "Sometimes might be good, sometimes might be shit",
        date: "22/10/2022",
      },
    ],
  },
  {
    name: "ProductCard2",
    price: 10,
    image: productPic,
    rating: 3,
    id: 2,
    reviews: [
      {
        id: 2,
        name: "Jane",
        stars: 3,
        email: "jane@doe.com",
        title: "Good",
        text: "Sometimes might be good, sometimes might be shit",
        date: "22/10/2022",
      },
    ],
  },
  {
    name: "ProductCard3",
    price: 10,
    image: productPic,
    rating: 3,
    id: 3,
    reviews: [
      {
        id: 3,
        name: "Jane",
        stars: 3,
        email: "jane@doe.com",
        title: "Good",
        text: "Sometimes might be good, sometimes might be shit",
        date: "22/10/2022",
      },
    ],
  },
  {
    name: "ProductCard4",
    price: 10,
    image: productPic,
    rating: 3,
    id: 4,
    reviews: [
      {
        id: 4,
        name: "Jane",
        stars: 3,
        email: "jane@doe.com",
        title: "Good",
        text: "Sometimes might be good, sometimes might be shit",
        date: "22/10/2022",
      },
    ],
  },
  {
    name: "ProductCard5",
    price: 10,
    image: productPic,
    rating: 3,
    id: 5,
    reviews: [
      {
        id: 5,
        name: "Jane",
        stars: 3,
        email: "jane@doe.com",
        title: "Good",
        text: "Sometimes might be good, sometimes might be shit",
        date: "22/10/2022",
      },
    ],
  },
  {
    name: "ProductCard6",
    price: 10,
    image: productPic,
    rating: 3,
    id: 6,
    reviews: [
      {
        id: 6,
        name: "Jane",
        stars: 3,
        email: "jane@doe.com",
        title: "Good",
        text: "Sometimes might be good, sometimes might be shit",
        date: "22/10/2022",
      },
    ],
  },
  {
    name: "ProductCard7",
    price: 10,
    image: productPic,
    rating: 3,
    id: 7,
    reviews: [
      {
        id: 7,
        name: "Jane",
        stars: 3,
        email: "jane@doe.com",
        title: "Good",
        text: "Sometimes might be good, sometimes might be shit",
        date: "22/10/2022",
      },
    ],
  },
  {
    name: "ProductCard8",
    price: 10,
    image: productPic,
    rating: 3,
    id: 8,
    reviews: [
      {
        id: 8,
        name: "Jane",
        stars: 3,
        email: "jane@doe.com",
        title: "Good",
        text: "Sometimes might be good, sometimes might be shit",
        date: "22/10/2022",
      },
    ],
  },
  {
    name: "ProductCard9",
    price: 10,
    image: productPic,
    rating: 3,
    id: 9,
    reviews: [
      {
        id: 9,
        name: "Jane",
        stars: 3,
        email: "jane@doe.com",
        title: "Good",
        text: "Sometimes might be good, sometimes might be shit",
        date: "22/10/2022",
      },
    ],
  },
  {
    name: "ProductCard10",
    price: 10,
    image: productPic,
    rating: 3,
    id: 10,
    reviews: [
      {
        id: 10,
        name: "Jane",
        stars: 3,
        email: "jane@doe.com",
        title: "Good",
        text: "Sometimes might be good, sometimes might be shit",
        date: "22/10/2022",
      },
    ],
  },
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

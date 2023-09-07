import { React, useState } from "react";
import {
  ButtonsContainer,
  DecrementButton,
  ImageContainer,
  IncrementButton,
  PriceContainer,
  ProductDetails,
  ProductDetailsContainer,
  ProductDetailsSubtitle,
  ProductDetailsTitle,
  QuantityContainer,
  ProductContainer,
  SpanContainer,
} from "./components";
import {
  decrementShoppingCartProductCount,
  getShoppingCartProductCount,
  saveProductToCart,
} from "../../utils/shopping-cart";

const ProductCard = (props) => {
  const [count, setCount] = useState(getShoppingCartProductCount(props.product.id));

  const incrementCount = function () {
    saveProductToCart(props.product.id);
    setCount(getShoppingCartProductCount(props.product.id));
    props.onProductChange();
  };

  const decrementCount = function () {
    if (count === 1) {
      return;
    }
    decrementShoppingCartProductCount(props.product.id);
    setCount(getShoppingCartProductCount(props.product.id));
    props.onProductChange();
  };

  return (
    <ProductContainer>
      <ImageContainer>
        <img src={props.product.images[0]} alt="" />
      </ImageContainer>
      <ProductDetails>
        <ProductDetailsTitle>{props.product.name}</ProductDetailsTitle>
        <ProductDetailsSubtitle>Disponibilitate: In stoc</ProductDetailsSubtitle>
      </ProductDetails>
      <QuantityContainer>
        <ButtonsContainer>
          <DecrementButton onClick={decrementCount}>-</DecrementButton>
          <input type="text" name="" id="" value={count} />
          <IncrementButton onClick={incrementCount}>+</IncrementButton>
        </ButtonsContainer>
        <SpanContainer>
          <span>buc</span>
        </SpanContainer>
      </QuantityContainer>
      <PriceContainer>
        <h3>{`${(props.product.price * count).toFixed(2)} Lei`}</h3>
        <button>Sterge</button>
      </PriceContainer>
    </ProductContainer>
  );
};

export default ProductCard;

/*
1.Modifica colectia user a.i. sa contina urmatoarele fielduri noi : localitate, judet, cod postal 
2.Adauga o pagina noua "/new-order-details" care sa contina formularul care trebuie completat de user
2.1.Fieldurile sa fie precompletate cu detaliile din entitatea de user daca exista
*/

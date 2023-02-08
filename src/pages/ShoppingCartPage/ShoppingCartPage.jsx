import React, { useEffect } from "react";
import { useState } from "react";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import {
  ButtonsContainer,
  ContinueButton,
  ContinueLink,
  DecrementButton,
  IconSpan,
  ImageContainer,
  IncrementButton,
  LineDiv,
  OrderSummaryContainer,
  PriceContainer,
  ProductDetails,
  ProductDetailsContainer,
  ProductDetailsSubtitle,
  ProductDetailsTitle,
  QuantityContainer,
  ShoppingCartContainer,
  ShoppingCartParentContainer,
  SpanContainer,
  TextContainer,
  TextSpan,
  TotalPriceContainer,
} from "./components";

import { TbArrowBarRight } from "react-icons/tb";
import { useParams } from "react-router-dom";

export const ShoppingCartPage = () => {
  const [count, setCount] = useState(1);

  const incrementQuantity = function () {
    setCount(count + 1);
  };

  const decrementQuantity = function () {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <PageLayout>
      <ShoppingCartParentContainer>
        <ShoppingCartContainer>
          <ImageContainer>
            <img src="" alt="" />
          </ImageContainer>
          <ProductDetailsContainer>
            <ProductDetails>
              <ProductDetailsTitle>Nume Produs</ProductDetailsTitle>
              <ProductDetailsSubtitle>Disponibilitate: In stoc</ProductDetailsSubtitle>
            </ProductDetails>
            <QuantityContainer>
              <ButtonsContainer>
                <DecrementButton onClick={decrementQuantity}>-</DecrementButton>
                <input type="text" name="" id="" value={count} />
                <IncrementButton onClick={incrementQuantity}>+</IncrementButton>
              </ButtonsContainer>
              <SpanContainer>
                <span>buc</span>
              </SpanContainer>
            </QuantityContainer>
            <PriceContainer>
              <h3>34 Lei</h3>
              <button>Sterge</button>
            </PriceContainer>
          </ProductDetailsContainer>
        </ShoppingCartContainer>
        <OrderSummaryContainer>
          <TextContainer>
            <h3>Sumar Comanda</h3>
            <span>
              Cost produse: <span>34 Lei</span>
            </span>
            <span>
              Cost livrare: <span>9,99 Lei</span>
            </span>
            <LineDiv>
              <div></div>
            </LineDiv>
          </TextContainer>
          <TotalPriceContainer>
            <h3>
              Total:<h3>43,99 Lei</h3>
            </h3>
            <ContinueLink>
              <ContinueButton>
                Continua
                <TbArrowBarRight />
              </ContinueButton>
            </ContinueLink>
          </TotalPriceContainer>
        </OrderSummaryContainer>
      </ShoppingCartParentContainer>
    </PageLayout>
  );
};

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
  ProductContainer,
  ShoppingCartContainer,
  SpanContainer,
  TextContainer,
  TextSpan,
  TotalPriceContainer,
  ProductsContainer,
} from "./components";

import { TbArrowBarRight } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { getShoppingCartProductIds } from "../../utils/shopping-cart";
import { getProductById } from "../../utils/firebase";
import ProductCard from "./ProductCard";

export const ShoppingCartPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getShoppingCartProductsWithId();
  }, []);

  async function getShoppingCartProductsWithId() {
    try {
      const localStorageProductIds = getShoppingCartProductIds();
      const localStorageIdsFiltered = localStorageProductIds.filter((id) => id !== null);
      const products = await Promise.all(localStorageIdsFiltered.map((id) => getProductById(id)));
      setProducts(products);
      // console.log(products);
    } catch (error) {
      console.log(error);
    }
  }

  ////////////////////////////////////////////////

  console.log(products);
  return (
    <PageLayout>
      <ShoppingCartContainer>
        {products === [] ? (
          <div>aaa</div>
        ) : (
          <ProductsContainer>
            {products.map((p) => {
              return <ProductCard product={p} />;
            })}
          </ProductsContainer>
        )}

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
      </ShoppingCartContainer>
    </PageLayout>
  );
};

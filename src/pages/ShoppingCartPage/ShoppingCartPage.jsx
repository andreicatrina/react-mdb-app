import React, { useEffect } from "react";
import { useState } from "react";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import {
  ContinueButton,
  ContinueLink,
  LineDiv,
  OrderSummaryContainer,
  ShoppingCartContainer,
  TextContainer,
  TotalPriceContainer,
  ProductsContainer,
} from "./components";

import { TbArrowBarRight } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
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
      const localStorageIdsFiltered = localStorageProductIds.filter(
        (id) => id !== null
      );
      const products = await Promise.all(
        localStorageIdsFiltered.map((id) => getProductById(id))
      );
      setProducts(products);
      // console.log(products);
    } catch (error) {
      console.log(error);
    }
  }

  ////////////////////////////////////////////////

  console.log(products);

  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum = products[i].price + sum;

    console.log(sum);
  }

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
              Cost produse: <span>{sum.toFixed(2)}</span>
            </span>
            <span>
              Cost livrare: <span>15 Lei</span>
            </span>
            <LineDiv>
              <div></div>
            </LineDiv>
          </TextContainer>

          <TotalPriceContainer>
            <h3>
              Total:<h3>{`${sum + 15} Lei`}</h3>
            </h3>
            <Link to="/new-order-details">
              <ContinueButton>
                Continua
                <TbArrowBarRight />
              </ContinueButton>
            </Link>
          </TotalPriceContainer>
        </OrderSummaryContainer>
      </ShoppingCartContainer>
    </PageLayout>
  );
};

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
import { getShoppingCartProductCount, getShoppingCartProductIds } from "../../utils/shopping-cart";
import { getProductById } from "../../utils/firebase";
import ProductCard from "./ProductCard";

export const ShoppingCartPage = () => {
  const [products, setProducts] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    getShoppingCartProductsWithId();
  }, []);

  async function getShoppingCartProductsWithId() {
    const localStorageProductIds = getShoppingCartProductIds();
    const products = await Promise.all(localStorageProductIds.map((id) => getProductById(id)));
    setProducts(products);
    let auxSum = 0;
    for (let i = 0; i < products.length; i++) {
      auxSum = products[i].price * getShoppingCartProductCount(products[i].id) + auxSum;
    }
    setSum(auxSum);
  }

  async function onProductChange() {
    const localStorageProductIds = getShoppingCartProductIds();
    const products = await Promise.all(localStorageProductIds.map((id) => getProductById(id)));
    let auxSum = 0;
    for (let i = 0; i < products.length; i++) {
      auxSum = products[i].price * getShoppingCartProductCount(products[i].id) + auxSum;
    }
    setSum(auxSum);
  }

  return (
    <PageLayout>
      <ShoppingCartContainer>
        {products === [] ? (
          <div>aaa</div>
        ) : (
          <ProductsContainer>
            {products.map((p) => {
              return <ProductCard product={p} onProductChange={onProductChange} />;
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
              Total:<h3>{`${(sum + 15).toFixed(2)} Lei`}</h3>
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

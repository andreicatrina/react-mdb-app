import React, { useState } from "react";
import { AccountPageLayout } from "../../components/AccountPageLayout/AccountPageLayout";
import { getOrderById, getOrderItems, getOrders, getProductById, getProducts } from "../../utils/firebase";
import {
  OrderClientDetails,
  OrderClientInvoice,
  OrderContainer,
  OrderDetails,
  OrderProductAmount,
  OrderProductDetailsContainer,
  OrderProductImage,
  OrderProductName,
  OrderProductPrice,
  OrderSummaryDiv,
  OrderTitleContainer,
} from "./components";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

export const OrderPage = () => {
  const [order, setOrder] = useState(undefined);
  const { id } = useParams();
  const [orderItems, setOrderItems] = useState([]);
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    getOrderFromFirebase();
  }, []);

  useEffect(() => {
    getProductFromFirebase();
  }, []);

  const getOrderFromFirebase = async function () {
    const [userOrder, orderItemsData] = await Promise.all([getOrderById(id), getOrderItems(id)]);
    setOrder(userOrder);
    setOrderItems(orderItemsData);
    // console.log(orderItemsData);
    // console.log(orderItems);
  };

  const getProductFromFirebase = async function () {
    const product = await getProducts();
    setProductDetails(product);
    console.log(product);
  };

  return (
    <AccountPageLayout>
      <OrderContainer>
        <OrderTitleContainer>
          <h2>ID Comanda:</h2>
          <p>{`${id.slice(0, 7)}`}</p>
        </OrderTitleContainer>
        {order !== undefined ? (
          <OrderDetails>
            <OrderSummaryDiv>
              <p>Plasata pe data: {order.createdAt.toLocaleString()}</p>

              <p>Total: {order.totalPrice}</p>
            </OrderSummaryDiv>

            <OrderClientDetails>
              <p>Pentru: </p>
              <p>Numar de telefon: </p>
              <p>Adresa: {order.deliveryAddress}</p>
            </OrderClientDetails>
            <OrderClientInvoice>
              <h3>Date facturare</h3>
              <p>Pentru: </p>
              <p>Numar de telefon: </p>
              <p>Adresa: {order.deliveryAddress}</p>
            </OrderClientInvoice>
          </OrderDetails>
        ) : null}
      </OrderContainer>
      {orderItems.map((orderItem) => {
        return <OrderItemComponent orderItem={orderItem} />;
      })}
    </AccountPageLayout>
  );
};

const OrderItemComponent = (props) => {
  const [product, setProduct] = useState();

  useEffect(() => {
    setProductDetails();
  }, []);

  const setProductDetails = async function () {
    const productData = await getProductById(props.orderItem.productId);
    setProduct(productData);
    console.log(productData);
  };

  if (product === undefined) {
    return <OrderProductDetailsContainer>Loading</OrderProductDetailsContainer>;
  }

  return (
    <Link to={`/products/${props.orderItem.productId}`}>
      <OrderProductDetailsContainer>
        <OrderProductImage src={product.images[0]} alt="product Image" />
        <div>
          <OrderProductName> {product.name}</OrderProductName>
          <OrderProductAmount>{`${props.orderItem.amount} buc`}</OrderProductAmount>
          <OrderProductPrice>{`${props.orderItem.price} RON`}</OrderProductPrice>
        </div>
      </OrderProductDetailsContainer>
    </Link>
  );
};

import React, { useState } from "react";
import { AccountPageLayout } from "../../components/AccountPageLayout/AccountPageLayout";
import { getOrderById, getOrderItems, getOrders, getProducts } from "../../utils/firebase";
import {
  OrderClientDetails,
  OrderClientInvoice,
  OrderContainer,
  OrderDetails,
  OrderedProductsDetails,
  OrderSummaryDiv,
  OrderTitleContainer,
} from "./components";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

export const OrderPage = () => {
  const [order, setOrder] = useState(undefined);
  const { id } = useParams();
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    getOrderFromFirebase();
  }, []);

  const getOrderFromFirebase = async function () {
    const [userOrder, orderItemsData] = await Promise.all([getOrderById(id), getOrderItems(id)]);
    setOrder(userOrder);
    setOrderItems(orderItemsData);
    // console.log(orderItemsData);
    // console.log(orderItems);
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
      <OrderItemComponent orderItems={orderItems} />
    </AccountPageLayout>
  );
};

const OrderItemComponent = (props) => {
  const orderItems = props.orderItems;

  console.log(orderItems);
  return (
    <div>
      {orderItems.map((product) => {
        return (
          <OrderedProductsDetails>
            <Link to={`/products/${product.productId}`}>
              <p>Product Id: {product.productId}</p>
              <p>Amount: {product.amount}</p>
              <p>Price: {product.price}</p>
            </Link>
          </OrderedProductsDetails>
        );
      })}
    </div>
  );
};

/*
  1. Scrie HTML-ul care randeaza orderItems (price, id, amount)
  2. Creaza o componenta separata "OrderItemComponent" care primeste ca props un obiect orderItem
     si randeaza detaliile pe ecran.
  3. Inlocuieste HTML-ul de la Pasul 1 cu componenta creata la Pasul 2
  4. In interiorul OrderItemComponent, la prima randare, pune in state detaliile produsului
  5. Create a nice template for OrderItemComponent (productImage, productName, amount, price) + 
  redirect on click
*/

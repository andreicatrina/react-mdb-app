import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, OrderContainer, PageTitle } from "./components";
import { getOrdersForUser } from "../../utils/firebase";
import { AccountPageLayout } from "../../components/AccountPageLayout/AccountPageLayout";

export const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrdersFromFirebase();
  }, []);

  const getOrdersFromFirebase = async function () {
    const userOrders = await getOrdersForUser();
    console.log(userOrders);
    setOrders(userOrders);
  };

  return (
    <AccountPageLayout>
      <Container>
        <PageTitle>Comenzile tale</PageTitle>
        {orders.map((order) => {
          return (
            <Link to={`/account/orders/${order.id}`}>
              <OrderContainer>
                <p>Id-ul Comenzii: {order.shortId} </p>
                <p>Data Comenzii: {order.createdAt.toLocaleString()}</p>
                <p>Adresa Livrarii: {order.deliveryAddress}</p>
                <p>Costul Transportului: {order.deliveryPrice}</p>
                <p>Starea Coletului: {order.shippingStatus}</p>
                <p>Pretul Total: {order.totalPrice}</p>
              </OrderContainer>
            </Link>
          );
        })}
      </Container>
    </AccountPageLayout>
  );
};

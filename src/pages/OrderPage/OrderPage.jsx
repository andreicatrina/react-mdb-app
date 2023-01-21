import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AccountMenu from "../AccountPage/AccountMenu";

import { getOrdersForUser } from "../../utils/firebase";
import {
  OrderClientDetails,
  OrderClientInvoice,
  OrderContainer,
  OrderDetails,
  OrderDiv,
  OrderMenuContainer,
  OrderSummaryDiv,
  OrderTitleContainer,
} from "./components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const OrderPage = () => {
  const [orderSelected, setOrderSelected] = useState(undefined);

  useEffect(() => {
    getSelectedOrderFromFirebase();
  }, []);

  const getSelectedOrderFromFirebase = async function () {
    const userOrder = await getOrdersForUser();
    console.log(userOrder);
    setOrderSelected(userOrder);
  };

  const { id } = useParams();
  // console.log(id);
  return (
    <>
      <Header />
      <OrderContainer>
        <OrderMenuContainer>
          <AccountMenu />
        </OrderMenuContainer>
        <OrderDiv>
          <OrderTitleContainer>
            <h2>ID Comanda:</h2>
            <p>{`${id.slice(0, 7)}`}</p>
          </OrderTitleContainer>
          {orderSelected !== undefined
            ? orderSelected.map((order) => {
                return (
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
                );
              })
            : null}
        </OrderDiv>
      </OrderContainer>
      <Footer />
    </>
  );
};

export default OrderPage;

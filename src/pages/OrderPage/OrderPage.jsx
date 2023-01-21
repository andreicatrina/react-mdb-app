import React, { useState } from "react";
import { AccountPageLayout } from "../../components/AccountPageLayout/AccountPageLayout";
import { getOrderById } from "../../utils/firebase";
import {
  OrderClientDetails,
  OrderClientInvoice,
  OrderContainer,
  OrderDetails,
  OrderSummaryDiv,
  OrderTitleContainer,
} from "./components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const OrderPage = () => {
  const [order, setOrder] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    getOrderFromFirebase();
  }, []);

  const getOrderFromFirebase = async function () {
    const userOrder = await getOrderById(id);
    console.log(userOrder);
    setOrder(userOrder);
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
    </AccountPageLayout>
  );
};

export default OrderPage;

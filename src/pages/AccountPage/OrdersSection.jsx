import React, { useState } from "react";

import { ClientDataDiv, OrderTitle, OrdersTitleDiv, OrderDetailsDiv } from "./components";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import { getOrdersForUser } from "../../utils/firebase";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const OrdersSection = () => {
  const [openOrders, setOpenOrders] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrdersFromFirebase();
  }, []);

  const getOrdersFromFirebase = async function () {
    const userOrders = await getOrdersForUser();
    console.log(userOrders);
    setOrders(userOrders);
  };

  const onClickOpenOrders = function () {
    if (openOrders === false) {
      setOpenOrders(true);
    } else {
      setOpenOrders(false);
    }
  };

  return (
    <ClientDataDiv>
      <OrdersTitleDiv onClick={onClickOpenOrders}>
        <OrderTitle>Comenzile Tale</OrderTitle>
        {openOrders === true ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
      </OrdersTitleDiv>
      {openOrders === true
        ? orders.map((order) => {
            return (
              <Link to={`/account/orders/${order.id}`}>
                <OrderDetailsDiv>
                  <p>Id-ul Comenzii: {order.shortId} </p>
                  <p>Data Comenzii: {order.createdAt.toLocaleString()}</p>
                  <p>Adresa Livrarii: {order.deliveryAddress}</p>
                  <p>Costul Transportului: {order.deliveryPrice}</p>
                  <p>Starea Coletului: {order.shippingStatus}</p>
                  <p>Pretul Total: {order.totalPrice}</p>
                </OrderDetailsDiv>
              </Link>
            );
          })
        : null}
    </ClientDataDiv>
  );
};

export default OrdersSection;

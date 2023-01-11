import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {
  AccountSection,
  AccountContainer,
  ClientDataDiv,
  ClientDetailsDiv,
  ClientDetailsTitle,
  ClientEmailDiv,
  ClientNameDiv,
  ClientPhoneDiv,
  DataContainer,
  LogOutButton,
  LogOutContainer,
  MenuContainer,
  MenuOptionsDiv,
  OrderTitle,
  OrdersTitleDiv,
  OrderDetailsDiv,
} from "./components";
import { useHistory } from "react-router-dom";
import { getCurrentUser, isUserAuth, signOutUser } from "../../utils/firebase";
import { BiErrorCircle } from "react-icons/bi";
import { orderList } from "./orders";

const AccountPage = () => {
  const history = useHistory();
  const [user] = useState(getCurrentUser());
  console.log({ user });

  if (!isUserAuth()) {
    history.push("/sign-in");
  } else {
    history.push("/account");
  }

  const onClickLogOut = () => {
    signOutUser();
    history.push("/");
  };

  if (!user) {
    return null;
  }

  return (
    <AccountSection>
      <Header />
      <AccountContainer>
        <MenuContainer>
          <MenuOptionsDiv>
            <a href="">COMENZI</a>
            <a href="">ADRESE</a>
            <a href="">FAVORITE</a>
            <a href="">REVIEW-URI</a>
          </MenuOptionsDiv>
          <LogOutContainer>
            <LogOutButton onClick={onClickLogOut}>Log Out</LogOutButton>
          </LogOutContainer>
        </MenuContainer>
        <DataContainer>
          <ClientDetailsDiv>
            <ClientDetailsTitle>Datele Contului</ClientDetailsTitle>
            <ClientNameDiv>
              <p>Nume:</p>
              <p>Andrei</p>
            </ClientNameDiv>
            <ClientEmailDiv>
              <p>Email:</p>
              <p>{user.email}</p>
              {!user.emailVerified && (
                <p style={{ color: "red", display: "flex", alignItems: "center", fontSize: 14 }}>
                  <BiErrorCircle style={{ width: 16, height: 16, marginRight: 4 }} /> Email address not verified
                </p>
              )}
            </ClientEmailDiv>
            <ClientPhoneDiv>
              <p>Telefon:</p>
              <p>{user.phoneNumber || "-"}</p>
            </ClientPhoneDiv>
          </ClientDetailsDiv>
          <ClientDataDiv>
            <OrdersTitleDiv>
              <OrderTitle>Comenzile Tale</OrderTitle>
            </OrdersTitleDiv>
            {orderList.map((order, i) => {
              return (
                <OrderDetailsDiv>
                  <p>Id-ul Comenzii: {order.shortId} </p>
                  <p>Data Comenzii: {order.createdAt.toLocaleString()}</p>
                  <p>Adresa Livrarii: {order.deliveryAddress}</p>
                  <p>Costul Transportului: {order.deliveryPrice}</p>
                  <p>Starea Coletului: {order.shippingStatus}</p>
                  <p>Pretul Total: {order.totalPrice}</p>
                </OrderDetailsDiv>
              );
            })}
          </ClientDataDiv>
        </DataContainer>
      </AccountContainer>
      <Footer />
    </AccountSection>
  );
};

export default AccountPage;

/*const orders = {
    createdAt: Date.parse(`${getRandomInt(1, 30)} Oct 2022 00:00:00`),
    deliveryAddress: "str. ABC, nr. 9, Galati",
    deliveryPrice: 0,
    paymentStatus: "Efectuata",
    shippingStatus: "Asteapta ridicare",
    shortId: `MDB ${i}`,
    totalPrice: 19.99,
    userId: "Yag59YrXTUhKv7Numy5qVYe0laG2",
  }; */

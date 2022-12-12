import React from "react";
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
} from "./components";

const AccountPage = () => {
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
            <LogOutButton>Log Out</LogOutButton>
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
              <p>abc@gmail.com</p>
            </ClientEmailDiv>
            <ClientPhoneDiv>
              <p>Telefon:</p>
              <p>0747788940</p>
            </ClientPhoneDiv>
          </ClientDetailsDiv>
          <ClientDataDiv>
            <div></div>
          </ClientDataDiv>
        </DataContainer>
      </AccountContainer>
      <Footer />
    </AccountSection>
  );
};

export default AccountPage;

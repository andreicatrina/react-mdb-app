import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AccountMenu from "../AccountMenu/AccountMenu";
import { ChildrenContainer, Container, Content } from "./components";

export const AccountPageLayout = function (props) {
  return (
    <Container>
      <Header />
      <Content>
        <AccountMenu />
        <ChildrenContainer>{props.children}</ChildrenContainer>
      </Content>
      <Footer />
    </Container>
  );
};

import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Container, Content } from "./components";

export const PageLayout = function (props) {
  return (
    <Container>
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </Container>
  );
};

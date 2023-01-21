import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOptionsDiv } from "./components";

const AccountMenu = () => {
  return (
    <MenuOptionsDiv>
      <Link to="/account/orders">COMENZI</Link>
      <a href="">ADRESE</a>
      <a href="">FAVORITE</a>
      <a href="">REVIEW-URI</a>
    </MenuOptionsDiv>
  );
};

export default AccountMenu;

import React from "react";
import { Link, useHistory } from "react-router-dom";
import { signOutUser } from "../../utils/firebase";
import {
  LogOutButton,
  MenuContainer,
  MenuOptionsDiv
} from "./components";

const AccountMenu = () => {
  const history = useHistory();

  const onClickLogOut = () => {
    signOutUser();
    history.push("/");
  };

  return (
    <MenuContainer>
      <MenuOptionsDiv>
        <Link to="/account">Contul meu</Link>
        <Link to="/account/orders">Comenzi</Link>
        <a href="">Adrese</a>
        <a href="">Favorite</a>
        <a href="">Recenzii</a>
      </MenuOptionsDiv>
      <LogOutButton onClick={onClickLogOut}>Log Out</LogOutButton>
    </MenuContainer>
  );
};

export default AccountMenu;

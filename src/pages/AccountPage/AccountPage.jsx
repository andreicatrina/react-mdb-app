import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  ClientDetailsDiv,
  ClientDetailsTitle,
  ClientEmailDiv,
  ClientNameDiv,
  ClientPhoneDiv,
  DataContainer,
  EditButtonContainer,
  EditPhoneInput,
  ClientAddressDiv,
  EditAddressInput,
} from "./components";

import { getCurrentUser, isUserAuth } from "../../utils/firebase";
import { BiErrorCircle } from "react-icons/bi";
import { HiPencil } from "react-icons/hi";

import { AccountPageLayout } from "../../components/AccountPageLayout/AccountPageLayout";

const AccountPage = () => {
  const history = useHistory();
  const [user] = useState(getCurrentUser());

  const [editPhoneButton, setEditPhoneButton] = useState(false);
  const [editAddressButton, setEditAddressButton] = useState(false);

  const onClickEditPhoneButton = function () {
    if (editPhoneButton === false) {
      setEditPhoneButton(true);
    } else {
      setEditPhoneButton(false);
    }
  };
  const onClickEditAddressButton = function () {
    if (editAddressButton === false) {
      setEditAddressButton(true);
    } else {
      setEditAddressButton(false);
    }
  };

  if (!isUserAuth()) {
    history.push("/sign-in");
  } else {
    history.push("/account");
  }

  if (!user) {
    return null;
  }

  return (
    <AccountPageLayout>
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
              <p
                style={{
                  color: "red",
                  display: "flex",
                  alignItems: "center",
                  fontSize: 14,
                }}
              >
                <BiErrorCircle
                  style={{ width: 16, height: 16, marginRight: 4 }}
                />{" "}
                Email address not verified
              </p>
            )}
          </ClientEmailDiv>
          <ClientPhoneDiv>
            <p>Telefon:</p>
            {editPhoneButton === true ? (
              <EditPhoneInput
                type="text"
                placeholder="Introdu numarul de telefon"
              ></EditPhoneInput>
            ) : (
              <p>{user.phoneNumber || "-"}</p>
            )}
            <EditButtonContainer onClick={onClickEditPhoneButton}>
              <HiPencil />
            </EditButtonContainer>
          </ClientPhoneDiv>
          <ClientAddressDiv>
            <p>Adresa:</p>
            {editAddressButton === true ? (
              <EditAddressInput
                type="text"
                placeholder="Introdu adresa"
              ></EditAddressInput>
            ) : (
              <p>-</p>
            )}
            <EditButtonContainer onClick={onClickEditAddressButton}>
              <HiPencil />
            </EditButtonContainer>
          </ClientAddressDiv>
        </ClientDetailsDiv>
      </DataContainer>
    </AccountPageLayout>
  );
};

export default AccountPage;

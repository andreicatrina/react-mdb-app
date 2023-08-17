import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  ClientDetailsButton,
  ClientDetailsDiv,
  ClientDetailsTitle,
  ClientEmailDiv,
  DataContainer,
  EditButtonContainer,
  FormInput,
  FormInputContainer,
} from "./components";

import {
  getCurrentUser,
  getUserProfileByUserId,
  isUserAuth,
} from "../../utils/firebase";
import { BiErrorCircle } from "react-icons/bi";
import { HiPencil } from "react-icons/hi";

import { AccountPageLayout } from "../../components/AccountPageLayout/AccountPageLayout";
import { useEffect } from "react";

const AccountPage = () => {
  const history = useHistory();
  const [userProfile, setUserProfile] = useState(undefined);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userCity, setUserCity] = useState("");

  useEffect(() => {
    loadUserProfile();
  }, []);

  const loadUserProfile = async function () {
    const user = getCurrentUser();
    // console.log(user);
    const userProfile = await getUserProfileByUserId(user.id);
    setUserProfile(userProfile);
    setPhoneNumber(userProfile.phoneNumber);
    setUserEmail(user.email);
    setUserName(userProfile.name);
    setUserAddress(userProfile.address);
    setUserCity(userProfile.city);
    console.log(userProfile);
    return userProfile;
  };

  function onPhoneNumberChange(e) {
    setPhoneNumber(e.currentTarget.value);
  }

  function onUserNameChange(e) {
    setUserName(e.currentTarget.value);
  }

  function onAddressChange(e) {
    setUserAddress(e.currentTarget.value);
  }

  function onCityChange(e) {
    setUserCity(e.currentTarget.value);
  }

  if (!isUserAuth()) {
    history.push("/sign-in");
  } else {
    history.push("/account");
  }

  if (!userProfile) {
    return null;
  }

  return (
    <AccountPageLayout>
      <ClientDetailsDiv>
        <ClientDetailsTitle>Datele Contului</ClientDetailsTitle>
        <FormInputContainer>
          <p>Nume:</p>
          <FormInput
            onChange={onUserNameChange}
            value={userName}
            type="text"
            placeholder="Introduceti numele si prenumele"
          ></FormInput>
        </FormInputContainer>
        <ClientEmailDiv>
          <p>Email:</p>
          <FormInput
            disabled
            value={userEmail}
            type="text"
            placeholder="Introduceti adresa de e-mail"
          ></FormInput>
          {/* <p>{user.email}</p>
            {!user.emailVerified && (
              <p
                style={{
                  color: "red",
                  display: "flex",
                  alignItems: "center",
                  fontSize: 14,
                }}
              >
                <BiErrorCircle style={{ width: 16, height: 16, marginRight: 4 }} /> Email address not verified
              </p>
            )} */}
        </ClientEmailDiv>
        <FormInputContainer>
          <p>Telefon:</p>
          <FormInput
            onChange={onPhoneNumberChange}
            value={phoneNumber}
            type="text"
            placeholder="Introduceti numarul de telefon"
          ></FormInput>
        </FormInputContainer>
        <FormInputContainer>
          <p>Adresa:</p>
          <FormInput
            onChange={onAddressChange}
            value={userAddress}
            type="text"
            placeholder="Introduceti adresa"
          ></FormInput>
        </FormInputContainer>
        <FormInputContainer>
          <p>Oras:</p>
          <FormInput
            onChange={onCityChange}
            value={userCity}
            type="text"
            placeholder="Introduceti orasul"
          ></FormInput>
        </FormInputContainer>
        <ClientDetailsButton
          {...(userProfile.phoneNumber === phoneNumber ? "disabled" : "")}
        >
          Save
        </ClientDetailsButton>
      </ClientDetailsDiv>
    </AccountPageLayout>
  );
};

export default AccountPage;

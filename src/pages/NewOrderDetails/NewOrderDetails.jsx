import React, { useEffect, useState } from "react";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { createOrder, getCurrentUser, getProductById, getUserProfileByUserId } from "../../utils/firebase";
import { CheckBoxContainer, CheckBoxInput, FormContainer, SubmitInput } from "./components";
import { getShoppingCartProductIds } from "../../utils/shopping-cart";

const NewOrderDetails = () => {
  const [user] = useState(getCurrentUser());
  const [userEmail, setUserEmail] = useState(user ? user.email : "");
  const [userName, setUserName] = useState();
  const [userPhone, setUserPhone] = useState();
  const [deliveryAddress, setDeliveryAddress] = useState();
  const [userCity, setUserCity] = useState();
  const [userZipCode, setUserZipCode] = useState();
  const [userProfile, setUserProfile] = useState(undefined);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadUserProfile();
  }, []);

  useEffect(() => {
    getShoppingCartProductsWithId();
  }, []);

  async function getShoppingCartProductsWithId() {
    try {
      const localStorageProductIds = getShoppingCartProductIds();
      const localStorageIdsFiltered = localStorageProductIds.filter((id) => id !== null);
      const products = await Promise.all(localStorageIdsFiltered.map((id) => getProductById(id)));
      setProducts(products);
      // console.log(products);
    } catch (error) {
      console.log(error);
    }
  }

  const loadUserProfile = async function () {
    const user = getCurrentUser();
    const userProfileResponse = await getUserProfileByUserId(user.id);
    setUserProfile(userProfileResponse);
    if (userProfileResponse) {
      setUserName(userProfileResponse.name);
      setUserPhone(userProfileResponse.phoneNumber);
      setDeliveryAddress(userProfileResponse.address);
      setUserCity(userProfileResponse.city);
      setUserZipCode(userProfileResponse.zipCode);
    }
  };

  const onChangeEmail = function (e) {
    setUserEmail(e.target.value);
  };

  const onChangeName = function (e) {
    setUserName(e.target.value);
  };

  const onChangePhone = function (e) {
    setUserPhone(e.target.value);
  };

  const onChangeAddress = function (e) {
    setDeliveryAddress(e.target.value);
  };

  const onChangeCity = function (e) {
    setUserCity(e.target.value);
  };

  const onChangeZipCode = function (e) {
    setUserZipCode(e.target.value);
  };

  const onSubmitOrder = async function (event) {
    event.preventDefault();

    if (products === []) {
      return;
    }

    // TODO: Add parameters to the function call
    await createOrder();
  };

  return (
    <PageLayout>
      <FormContainer>
        <form onSubmit={onSubmitOrder}>
          <label>Adresa de email:</label>
          <input type="email" placeholder="Email" value={userEmail} onChange={onChangeEmail} />
          <br />
          <label>Numele si Prenumele:</label>
          <input type="text" placeholder="Numele si Prenumele" value={userName} onChange={onChangeName} />
          <br />
          <label>Numarul de telefon:</label>
          <input type="text" placeholder="Numarul de telefon" value={userPhone} onChange={onChangePhone} />
          <br />
          <label>Adresa de livrare:</label>
          <input type="text" placeholder="Adresa de livrare" value={deliveryAddress} onChange={onChangeAddress} />
          <br />
          <label>Oras:</label>
          <input type="text" placeholder="Oras" value={userCity} onChange={onChangeCity} />
          <br />
          <label>Cod Postal:</label>
          <input type="text" placeholder="Cod Postal" value={userZipCode} onChange={onChangeZipCode} />
          <br />
          <label>Modalitate livrare</label>
          <CheckBoxContainer>
            <CheckBoxInput type="checkbox" />
            <label>Livrare prin curier</label>
          </CheckBoxContainer>
          <SubmitInput type="submit" value="Submit" />
        </form>
      </FormContainer>
    </PageLayout>
  );
};

export default NewOrderDetails;

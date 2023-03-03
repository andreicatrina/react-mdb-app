import React, { useEffect, useState } from "react";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { getCurrentUser } from "../../utils/firebase";
import { CheckBoxContainer, CheckBoxInput, FormContainer, SubmitInput } from "./components";

const NewOrderDetails = () => {
  const [user] = useState(getCurrentUser());

  return (
    <PageLayout>
      <FormContainer>
        {user ? (
          <form>
            <label>Adresa de email:</label>
            <input type="email" placeholder="Email" value={user.email} />
            <br />
            <label>Numele si Prenumele:</label>
            <input type="text" placeholder="Numele si Prenumele" value={user.displayName} />
            <br />
            <label>Numarul de telefon:</label>
            <input type="number" placeholder="Numarul de telefon" value={user.phoneNumber} />
            <br />
            <label>Adresa de livrare:</label>
            <input type="text" placeholder="Adresa de livrare" />
            <br />
            <label>Modalitate livrare</label>
            <CheckBoxContainer>
              <CheckBoxInput type="checkbox" />
              <label>Livrare prin curier</label>
            </CheckBoxContainer>
            <SubmitInput type="submit" value="Submit" />
          </form>
        ) : (
          <form>
            <label>Adresa de email:</label>
            <input type="email" placeholder="Email" />
            <br />
            <label>Numele si Prenumele:</label>
            <input type="text" placeholder="Numele si Prenumele" />
            <br />
            <label>Numarul de telefon:</label>
            <input type="number" placeholder="Numarul de telefon" />
            <br />
            <label>Adresa de livrare:</label>
            <input type="text" placeholder="Adresa de livrare" />
            <br />
            <SubmitInput type="submit" value="Submit" />
          </form>
        )}
        <div></div>
      </FormContainer>
    </PageLayout>
  );
};

export default NewOrderDetails;

import React from "react";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { SendUserPasswordReset } from "../../utils/firebase";
import { ErrorMessage, InputButtonForm, ResetPageDiv, ResetPageSection } from "./components";

const ResetPasswordPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [step, setStep] = useState("initial"); // initial, loading, success
  const [error, setError] = useState("");

  const onInputChange = (event) => {
    setUserEmail(event.currentTarget.value);
    console.log(userEmail);
  };

  //   const onSubmitReset = () => {
  //     console.log(userEmail);
  //   };

  const onSubmitRequestNewPassword = async (event) => {
    event.preventDefault();

    setError("");

    if (userEmail === "") {
      setError("Va rugam introduceti adresa de email");
      return;
    }
    try {
      setStep("loading");
      await SendUserPasswordReset(userEmail);
      setStep("success");
    } catch (error) {
      setStep("initial");
      const errorMessage = error.message;
      console.log(errorMessage);
    }
  };

  return (
    <>
      <Header />
      <ResetPageSection>
        <ResetPageDiv>
          <h3>Reseteaza Parola</h3>
          <InputButtonForm onSubmit={onSubmitRequestNewPassword}>
            <input onChange={onInputChange} value={userEmail} type="email" placeholder="Introdu adresa de email" />
            <button disabled={step === "loading"}>{step === "loading" ? "Loading" : "Reset"}</button>
          </InputButtonForm>
          {step === "success" ? <p>Verifica Adresa De Email</p> : null}
          {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        </ResetPageDiv>
      </ResetPageSection>
      <Footer />
    </>
  );
};

export default ResetPasswordPage;

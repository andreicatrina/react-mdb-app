import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  EmailContainer,
  ForgotPassword,
  ForgotPasswordContainer,
  PasswordContainer,
  SignInButtonDiv,
  SignInButtonsContainer,
  SignInContainer,
  SignInCredentialsContainer,
  SignInFacebook,
  SignInGoogle,
  SignInPageSection,
  SignUpContainer,
  Title,
  TitleContainer,
} from "./components";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <>
      <Header />
      <SignInPageSection>
        <TitleContainer>
          <Title>Sign In</Title>
        </TitleContainer>
        <SignInContainer>
          <SignInButtonsContainer>
            <SignInFacebook>Sign in with Facebook</SignInFacebook>
            <SignInGoogle>Sign in with Google</SignInGoogle>
          </SignInButtonsContainer>
          <SignInCredentialsContainer>
            <EmailContainer>
              <label>Email</label>
              <input placeholder="Email" type="email" name="EMAIL" id="" />
            </EmailContainer>
            <PasswordContainer>
              <label>Password</label>
              <input placeholder="Parola" type="password" name="PAROLA" id="" />
            </PasswordContainer>
            <ForgotPasswordContainer>
              <ForgotPassword>Ai uitat parola?</ForgotPassword>
            </ForgotPasswordContainer>
            <SignInButtonDiv>
              <button>Sign In</button>
            </SignInButtonDiv>
            <SignUpContainer>
              <p>Nu ai cont?</p>
              <Link to="/sign-up">Creeaza cont!</Link>
            </SignUpContainer>
          </SignInCredentialsContainer>
        </SignInContainer>
      </SignInPageSection>
      <Footer />
    </>
  );
};

export default SignInPage;

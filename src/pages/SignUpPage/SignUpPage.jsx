import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {
  CreateAccountButtonDiv,
  EmailContainer,
  FirstNameContainer,
  LastNameContainer,
  PasswordContainer,
  SignInContainer,
  SignUpButtonsContainer,
  SignUpContainer,
  SignUpCredentialsContainer,
  SignUpFacebook,
  SignUpGoogle,
  SignUpPageSection,
  Title,
  TitleContainer,
} from "./components";

const SignUpPage = () => {
  return (
    <>
      <Header />
      <SignUpPageSection>
        <TitleContainer>
          <Title>Create Account</Title>
        </TitleContainer>
        <SignUpContainer>
          <SignUpButtonsContainer>
            <SignUpFacebook>Sign in with Facebook</SignUpFacebook>
            <SignUpGoogle>Sign in with Google</SignUpGoogle>
          </SignUpButtonsContainer>
          <SignUpCredentialsContainer>
            <FirstNameContainer>
              <label htmlFor="">First Name</label>
              <input type="text" placeholder="First Name" />
            </FirstNameContainer>
            <LastNameContainer>
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" />
            </LastNameContainer>
            <EmailContainer>
              <label>Email</label>
              <input type="text" placeholder="Email" />
            </EmailContainer>
            <PasswordContainer>
              <label>Password</label>
              <input type="text" placeholder="Password" />
            </PasswordContainer>
            <CreateAccountButtonDiv>
              <button>CREARE CONT</button>
            </CreateAccountButtonDiv>
            <SignInContainer>
              <p>Ai deja cont?</p>
              <Link to="/sign-in">Intra in cont!</Link>
            </SignInContainer>
          </SignUpCredentialsContainer>
        </SignUpContainer>
      </SignUpPageSection>
      <Footer />
    </>
  );
};

export default SignUpPage;

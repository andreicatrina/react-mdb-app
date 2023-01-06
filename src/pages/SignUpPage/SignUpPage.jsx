import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { signUpWithEmailAndPassword, signInUserWithFacebook, signInUserWithGoogle } from "../../utils/firebase";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const onEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSignUpSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password);
    if (!email || !password) {
      return;
    }
    try {
      await signUpWithEmailAndPassword(email, password);
      history.push("/sign-in");
    } catch (error) {
      console.log(JSON.stringify(error, undefined, 2));
    }
  };

  const onClickGoogleSignIn = async () => {
    const result = await signInUserWithGoogle();
    console.log(result);
    history.push("/account");
  };

  const onClickSignInFacebook = async () => {
    const result = await signInUserWithFacebook();
    console.log(result);
    history.push("/account");
  };

  return (
    <>
      <Header />
      <SignUpPageSection>
        <TitleContainer>
          <Title>Create Account</Title>
        </TitleContainer>
        <SignUpContainer>
          <SignUpButtonsContainer>
            <SignUpFacebook onClick={onClickSignInFacebook}>Sign in with Facebook</SignUpFacebook>
            <SignUpGoogle onClick={onClickGoogleSignIn}>Sign in with Google</SignUpGoogle>
          </SignUpButtonsContainer>
          <SignUpCredentialsContainer onSubmit={onSignUpSubmit}>
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
              <input type="email" placeholder="Email" onChange={onEmailChange} value={email} />
            </EmailContainer>
            <PasswordContainer>
              <label>Password</label>
              <input type="password" placeholder="Password" onChange={onPasswordChange} value={password} />
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

import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  EmailContainer,
  ErrorParagraph,
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
import { Link, useHistory } from "react-router-dom";
import {
  isUserAuth,
  signInUserWithEmailAndPassword,
  signInUserWithFacebook,
  signInUserWithGoogle,
} from "../../utils/firebase";
import { LoginSocialFacebook } from "reactjs-social-login";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const history = useHistory();

  const onEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSignInSubmit = async (event) => {
    event.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Va rugam sa verificati credentialele!");
      return;
    }
    try {
      await signInUserWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      if (error.code) {
        setError("Va rugam sa verificati credentialele!");
      }
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
      <SignInPageSection>
        <TitleContainer>
          <Title>Sign In</Title>
        </TitleContainer>
        <SignInContainer>
          <SignInButtonsContainer>
            <SignInFacebook onClick={onClickSignInFacebook}>Sign in with Facebook</SignInFacebook>
            <SignInGoogle onClick={onClickGoogleSignIn}>Sign in with Google</SignInGoogle>
          </SignInButtonsContainer>
          <SignInCredentialsContainer onSubmit={onSignInSubmit}>
            <EmailContainer>
              <label>Email</label>
              <input placeholder="Email" type="email" name="" id="" onChange={onEmailChange} value={email} />
            </EmailContainer>
            <PasswordContainer>
              <label>Password</label>
              <input placeholder="Parola" type="password" name="" id="" onChange={onPasswordChange} value={password} />
            </PasswordContainer>
            <ForgotPasswordContainer>
              <Link to="/reset">
                <ForgotPassword>Ai uitat parola?</ForgotPassword>
              </Link>
            </ForgotPasswordContainer>
            {error ? <ErrorParagraph>{error}</ErrorParagraph> : null}
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

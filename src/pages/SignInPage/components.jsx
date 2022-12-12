import styled from "styled-components";

export const SignInPageSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 48px;
  line-height: 80px;
  font-weight: 400;
`;
export const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SignInButtonsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
  max-width: 1300px;
  gap: 24px;
  padding: 24px 64px 24px 24px;
`;
export const SignInFacebook = styled.button`
  width: 100%;
  max-width: 300px;
  height: 40px;
  border-radius: 8px;
  background-color: #3b5998;
  color: white;
  font-size: 14px;
  line-height: 40px;
  cursor: pointer;
`;
export const SignInGoogle = styled.button`
  width: 100%;
  max-width: 300px;
  height: 40px;
  border-radius: 8px;
  background-color: #ea4335;
  color: white;
  font-size: 14px;
  line-height: 40px;
  cursor: pointer;
`;
export const SignInCredentialsContainer = styled.div`
  width: 100%;
  padding: 24px 24px 24px 64px;
  border-left: 1px solid var(--color-light-gray);
`;
export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  label {
    font-size: 12px;
    font-weight: 700;
  }

  input {
    width: 100%;
    max-width: 320px;
    padding: 20px;
    border: 1px solid var(--color-black);
    border-radius: 8px;
    cursor: pointer;
  }
`;
export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 12px;

  label {
    font-size: 12px;
    font-weight: 700;
  }

  input {
    width: 100%;
    max-width: 320px;
    padding: 20px;
    border: 1px solid var(--color-black);
    border-radius: 8px;
    cursor: pointer;
  }
`;

export const ForgotPasswordContainer = styled.div`
  margin-top: 12px;
`;

export const ForgotPassword = styled.a`
  font-size: 14px;
  text-decoration: underline;
  text-underline-offset: 2px;
  color: var(--color-medium-pink);
  cursor: pointer;
`;

export const SignInButtonDiv = styled.div`
  margin-top: 50px;

  button {
    width: 100%;
    max-width: 320px;
    height: 50px;
    border-radius: 8px;
    color: white;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: "Nanum Gothic", sans-serif;
    background-color: var(--color-medium-pink);
    cursor: pointer;
  }
`;
export const SignUpContainer = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 8px;

  a {
    font-size: 14px;
    text-decoration: underline;
    text-underline-offset: 2px;
    color: var(--color-medium-pink);
    cursor: pointer;
  }
`;

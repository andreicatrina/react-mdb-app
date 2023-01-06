import styled from "styled-components";

export const ResetPageSection = styled.section`
  height: 30vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ResetPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 1300px;
  padding: 24px;
  margin: 0 auto;

  h3 {
    padding: 12px;
    font-size: 18px;
    font-weight: 700;
  }
`;
export const InputButtonForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  max-width: 1300px;

  input {
    width: 100%;
    max-width: 300px;
    height: 40px;
    border-radius: 8px;
    background-color: var(--color-light-nude);
    padding-left: 12px;
    color: var(--color-black);
    font-size: 16px;

    ::placeholder {
      font-size: 14px;
    }
  }

  button {
    width: 100%;
    max-width: 80px;
    height: 40px;
    border-radius: 8px;
    font-family: "Nanum Myeongjo", serif;
    font-size: 16px;
    font-weight: 700;
    background-color: var(--color-medium-pink);
    color: var(--color-white);

    :disabled {
      opacity: 0.7;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: red;
`;

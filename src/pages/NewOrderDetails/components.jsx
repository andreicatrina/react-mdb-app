import styled from "styled-components";

export const FormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 2px solid var(--color-light-blue); */
    border-radius: 8px;
    box-shadow: 2px 2px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 24px 12px;

    input {
      width: 300px;
      height: 32px;
      padding: 4px;
      margin-top: 4px;
      border-radius: 8px;
      border: 1px solid var(--color-dark-gray);
    }
  }
`;

export const SubmitInput = styled.input`
  width: 100%;
  max-width: 270px;
  height: 48px;
  font-size: 18px;
  background-color: var(--color-medium-pink);
  cursor: pointer;
  transition: 0.5s;
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 700;
  color: white;

  :hover {
    background-color: var(--color-light-blue);
    color: black;
    box-shadow: inset 0 0 10px #ddd;
  }
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 12px 0;
  padding: 8px;
  border: 1px solid var(--color-medium-pink);
  border-radius: 8px;
`;

export const CheckBoxInput = styled.input`
  width: 16px !important;
  height: 16px !important;
  margin: 0 !important;
  cursor: pointer;
`;

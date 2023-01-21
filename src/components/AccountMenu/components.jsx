import styled from "styled-components";

export const LogOutButton = styled.button`
  background-color: transparent;
  color: black;
  cursor: pointer;
`;
export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 200px;
  height: 300px;
  gap: 100px;
  border: 1px solid var(--color-light-gray);
  border-radius: 8px;
`;
export const MenuOptionsDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 16px;
  padding-top: 24px;

  a {
    color: var(--color-black);
  }
`;
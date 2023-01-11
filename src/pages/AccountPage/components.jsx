import styled from "styled-components";

export const AccountSection = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const AccountContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-grow: 1;
  padding: 24px;
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
export const LogOutContainer = styled.div`
  text-align: center;
`;
export const LogOutButton = styled.button`
  background-color: transparent;
  color: black;
  cursor: pointer;
`;
export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;
export const ClientDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border: 1px solid var(--color-light-gray);
  border-radius: 8px;
`;
export const ClientDetailsTitle = styled.h3``;
export const ClientNameDiv = styled.div`
  display: flex;
  width: 100%;
  max-width: 240px;
  gap: 24px;
`;
export const ClientEmailDiv = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
`;
export const ClientPhoneDiv = styled.div`
  display: flex;
  width: 100%;
  max-width: 240px;
  gap: 24px;
`;
export const ClientDataDiv = styled.div`
  border: 1px solid var(--color-light-gray);
  border-radius: 8px;
`;

export const OrdersTitleDiv = styled.div`
  padding: 24px;
`;
export const OrderTitle = styled.h3``;
export const OrderDetailsDiv = styled.div`
  border: 1px solid black;
  padding: 0 24px;
  margin: 0 12px;
  margin-bottom: 8px;
  p {
    padding: 8px 0;
  }
`;

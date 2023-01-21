import styled from "styled-components";

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
  gap: 16px;
`;

export const EditButtonContainer = styled.div`
  width: 100%;
  max-width: 20px;
  height: 20px;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const EditPhoneInput = styled.input`
  border: 1px solid black;
`;

export const ClientAddressDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const EditAddressInput = styled.input`
  border: 1px solid black;
`;

export const ClientDataDiv = styled.div`
  border: 1px solid var(--color-light-gray);
  border-radius: 8px;
`;


export const OrderDetailsDiv = styled.div`
  border: 1px solid black;
  padding: 0 24px;
  margin: 0 12px;
  margin-bottom: 8px;
  p {
    padding: 8px 0;
  }
`;

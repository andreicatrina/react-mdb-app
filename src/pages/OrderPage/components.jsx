import styled from "styled-components";

export const OrderContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-grow: 1;
  padding: 24px;
`;
export const OrderMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 200px;
  height: 300px;
  gap: 100px;
  border: 1px solid var(--color-light-gray);
  border-radius: 8px;
`;
export const OrderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 0 auto; */
  height: 100%;
  gap: 16px;
`;

export const OrderTitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  gap: 4px;

  p {
    font-size: 24px;
    text-decoration: underline;
    text-underline-offset: 6px;
  }
`;

export const OrderDetails = styled.div`
  display: flex;
  gap: 16px;
`;
export const OrderSummaryDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  border: 1px solid black;
  border-radius: 8px;

  p {
    padding: 2px;
    margin-bottom: 8px;
  }
`;
export const OrderClientDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  border: 1px solid black;
  border-radius: 8px;

  p {
    padding: 2px;
    margin-bottom: 8px;
  }
`;
export const OrderClientInvoice = styled.div`
  padding: 12px;
  border: 1px solid black;
  border-radius: 8px;

  h3 {
    padding: 2px;
    margin-bottom: 8px;
  }

  p {
    padding: 2px;
    margin-bottom: 8px;
  }
`;

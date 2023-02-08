import styled from "styled-components";

export const OrderContainer = styled.div``;

export const OrderTitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  gap: 4px;
  margin-bottom: 40px;

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
  border: 1px solid var(--color-medium-nude);
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
  border: 1px solid var(--color-medium-nude);
  border-radius: 8px;

  p {
    padding: 2px;
    margin-bottom: 8px;
  }
`;
export const OrderClientInvoice = styled.div`
  padding: 12px;
  border: 1px solid var(--color-medium-nude);
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

export const OrderProductDetailsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
  padding: 12px;
  background-color: #fff;
  border: 1px solid var(--color-medium-nude);
  border-radius: 8px;

  :hover {
    border: 1px solid var(--color-dark-gray);
  }
`;

export const OrderProductImage = styled.img`
  width: 80px;
  height: 100px;
  margin-right: 20px;
`;

export const OrderProductName = styled.span`
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 700;
  color: var(--color-black);
`;
export const OrderProductPrice = styled.span`
  display: block;
  color: var(--color-medium-pink);
  font-weight: 700;
`;
export const OrderProductAmount = styled.span`
  display: block;
  margin-bottom: 4px;
  color: var(--color-dark-gray);
`;

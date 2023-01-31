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

export const OrderedProductsDetails = styled.div`
  width: 100%;
  border: 1px solid var(--color-medium-nude);
  border-radius: 8px;
  margin-top: 24px;
  padding: 12px;
`;

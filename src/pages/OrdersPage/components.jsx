import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const PageTitle = styled.h3`
  font-size: 24px;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border: 2px solid var(--color-medium-nude);
  border-radius: 8px;
  cursor: pointer;

  p {
    color: var(--color-black);
    padding: 4px 0;
    cursor: pointer;
  }
`;

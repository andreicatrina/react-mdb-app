import styled from "styled-components";

export const ShoppingCartContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-right: 16px;
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 32px 12px 12px;
  margin-bottom: 16px;
  gap: 30px;
  width: 100%;
  border: 3px solid #d9f1f4;
  border-radius: 8px;
  transition: 0.5s;

  :hover {
    box-shadow: inset 0 0 10px #bbb;
    border: 3px solid var(--color-medium-pink);
  }
`;

export const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 70px;
  height: 100px;
  border: 1px solid var(--color-light-gray);

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProductDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ProductDetailsTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  padding: 2px;
  margin-bottom: 12px;
`;

export const ProductDetailsSubtitle = styled.p`
  font-size: 14px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 8px;
  border-radius: 8px;
  background-color: #d9f1f4;

  input {
    font-size: 16px;
    width: 24px;
    padding-left: 8px;
    background-color: #d9f1f4;
    color: black;
  }
`;

export const SpanContainer = styled.div``;

export const DecrementButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 30px;
  border-radius: 8px;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    background-color: var(--color-white);
    color: var(--color-black);
  }
`;
export const IncrementButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 30px;
  border-radius: 8px;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    background-color: var(--color-white);
    color: var(--color-black);
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 20px;
    font-weight: 700;
    font-family: "Nanum Gothic", sans-serif;
  }

  button {
    font-family: "Nanum Gothic", sans-serif;
    background: transparent;
    color: blue;
    cursor: pointer;
  }
`;

export const OrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  max-width: 280px;
  height: 280px;
  /* border: 1px solid red; */
  padding: 12px;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 4px rgba(0, 0, 0, 0.1);
  gap: 12px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h3 {
    font-size: 20px;
    font-weight: 700;
    padding-bottom: 2px;
    font-family: "Nanum Gothic", sans-serif;
  }

  span {
    display: flex;
    justify-content: space-between;
  }
`;

export const LineDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  div {
    width: 200px;
    height: 1px;
    border: 1px solid var(--color-light-gray);
  }
`;

export const TotalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  h3 {
    font-size: 20px;
    font-weight: 700;
    padding-bottom: 2px;
    font-family: "Nanum Gothic", sans-serif;
    h3 {
      font-size: 25px;
    }
  }
`;

export const ContinueLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
  border-radius: 8px;
  background-color: var(--color-medium-pink);
  transition: 0.5s;
  cursor: pointer;

  :hover {
    background-color: #d9f1f4;
    box-shadow: inset 0 0 10px #ddd;
  }
`;

export const ContinueButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  gap: 20px;
  font-family: "Nanum Gothic", sans-serif;
  font-size: 18px;
  line-height: 32px;
  font-weight: 700;
  color: white;
  transition: 0.5s;

  :hover {
    color: black;
  }
`;

// export const IconSpan = styled.span`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #fff;
//   font-size: 18px;
//   line-height: 36px;
// `;
// export const TextSpan = styled.span`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #fff;
//   font-size: 18px;
//   line-height: 36px;
// `;

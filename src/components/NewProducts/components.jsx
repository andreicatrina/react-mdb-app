import styled from "styled-components";

export const ProductsSection = styled.section`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 60px 0;
  padding: 0 16px;
`;

export const Title = styled.h1`
  font-size: 72px;
  line-height: 80px;
  font-weight: 400;
  margin: 20px 0 10px;

  @media (max-width: 1200px) {
    font-size: 52px;
    line-height: 64px;
  }

  @media (max-width: 550px) {
    font-size: 42px;
    line-height: 54px;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 28px;
  margin: 0 0 45px;

  @media (max-width: 900px) {
    font-size: 18px;
    line-height: 24px;
    padding: 12px;
  }

  @media (max-width: 550px) {
    font-size: 16px;
    padding: 12px;
  }
`;

export const ProductContainer = styled.div`
  position: relative;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  width: 270px;
  flex-shrink: 0;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 18px;
`;

export const ProductPic = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const RatingContainer = styled.div`
  padding-top: 25px;
  margin-bottom: 12px;
  width: 100%;

  svg {
    width: 20px;
    text-align: left;
  }
`;

export const NamePriceContainer = styled.div`
  width: 100%;
`;

export const Name = styled.p`
  font-size: 18px;
  line-height: 24px;
  min-height: 48px;
  text-align: left;
`;

export const Price = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  text-align: left;
`;

export const AddToCart = styled.button`
  width: 100%;
  height: 60px;
  background-color: transparent;
  border: 1px solid var(--color-black);
  border-radius: 8px;
  transition: 0.5s;

  :hover {
    background-color: var(--color-black);
    color: var(--color-white);
    border: transparent;
  }
`;

export const LeftSliderButton = styled.button`
  position: absolute;
  top: 50%;
  left: 24px;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  transform: translateY(-50%);

  svg {
    width: 24px;
    height: 24px;
  }
`;
export const RightSliderButton = styled.button`
  position: absolute;
  top: 50%;
  right: 24px;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  transform: translateY(-50%);

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ProductContainer2 = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  overflow: scroll;
`;

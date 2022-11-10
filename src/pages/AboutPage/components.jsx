import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 20px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 550px;
  width: 100%;
`;
export const Image = styled.img`
  width: 100%;
  height: 550px;
  object-fit: cover;
`;
export const TextContainer = styled.div`
  height: 550px;
  width: 100%;
  background-color: var(--color-light-nude);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    height: 100%;
  }
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2% 6% 2% 6%;
  width: 100%;
  max-width: 1500px;
  /* margin: 0 auto; */
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 400;
  line-height: 64px;
  padding: 24px 12px 0 12px;

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  padding: 12px;

  @media (max-width: 1000px) {
    text-align: center;
    padding-bottom: 32px;
  }
`;

export const InfoCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  padding: 24px;
  gap: 24px;
`;
export const InfoTitle = styled.h2`
  text-align: center;
  font-size: 44px;
  line-height: 58px;
  font-weight: 400;
`;
export const InfoParagraph = styled.p`
  text-align: center;
  padding: 0 24px;
  font-size: 18px;
  line-height: 32px;
  font-weight: 400;
`;

export const CardsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 32px;
  padding: 12px 24px;
  margin: 0 auto;
  margin-top: 24px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 32px;
  }
`;
export const CardContainer = styled.div`
  background-color: #f7e3d9;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 270px;
  height: 320px;
  border-radius: 12px;

  img {
    padding: 24px 0 12px 0;
  }
`;

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
`;
export const CardTitle = styled.h3`
  padding-bottom: 20px;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
`;
export const CardParagraph = styled.p`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
`;

export const VisitShopContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 100px;
  width: 100%;
  max-height: 550px;
  max-width: 1100px;
  border-radius: 16px;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 60px 60px;
  background-color: var(--color-medium-nude);
  border-bottom-left-radius: 16px;
  border-top-left-radius: 16px;

  @media (max-width: 1000px) {
    margin: 0 24px;
    border-radius: 16px;
  }
`;
export const LeftText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-white);
  padding: 24px;
  border-radius: 16px;

  @media (max-width: 1000px) {
    padding: 42px;
  }
`;
export const LeftTitle = styled.h3`
  font-size: 36px;
  font-weight: 400;
  line-height: 48px;
  text-align: center;
`;
export const LeftParagraph = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  text-align: center;
`;
export const SeeProductsButton = styled.button`
  background-color: var(--color-medium-pink);
  color: var(--color-white);
  padding: 16px 60px;
  margin-top: 20px;
  font-size: 12px;
  font-weight: 400;
  line-height: 32px;
  font-family: "Nanum Myeongjo", serif;
  border-radius: 8px;
  width: 100%;
  max-width: 250px;
  cursor: pointer;

  @media (max-width: 1000px) {
    max-width: 700px;
  }
`;

export const RightContainer = styled.div`
  width: 100%;

  img {
    height: 100%;
    max-height: 550px;
    width: 100%;
    max-width: 550px;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    object-fit: cover;
    /* margin-right: 24px; */
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

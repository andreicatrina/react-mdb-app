import styled from "styled-components";

export const CollectionSection = styled.section`
  /* background-color: black; */
  display: flex;
  justify-content: center;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const CollectionContainer = styled.div`
  background-color: var(--color-medium-nude);
  display: flex;
  align-items: center;
  max-width: 1240px;
  width: 100%;
  margin: 0 24px;
  border: none;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;

  @media (max-width: 1200px) {
  }

  @media (max-width: 1000px) {
    border-radius: 16px;
    justify-content: center;
    width: 100%;
    padding: 48px 0;
  }

  @media (max-width: 768px) {
    padding: 36px 0;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
  padding: 32px 24px;
  border-radius: 16px;
  margin: 12px 56px;
  background-color: var(--color-white);

  a {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1000px) {
    width: 100%;
    margin: 0 48px;
  }

  @media (max-width: 768px) {
    margin: 0 36px;
    padding: 24px 24px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: 550px;
  background-color: var(--color-white);
  display: block;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  line-height: 48px;
  font-weight: 400;
  margin-bottom: 15px;
  text-align: center;
  max-width: 400px;

  @media (max-width: 1000px) {
    margin: 0;
    padding: 12px;
    max-width: 700px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 39px;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 32px;
  font-weight: 400;
  margin: 15px 0;
  text-align: center;
  max-width: 400px;

  @media (max-width: 1000px) {
    max-width: 750px;
    font-size: 14px;
  }
  @media (max-width: 768px) {
    line-height: 24px;
    margin: 10px;
  }
`;

export const ViewButton = styled.button`
  max-width: 370px;
  padding: 21px;
  height: 60px;
  text-align: center;
  margin-top: 25px;
  font-size: 12px;
  font-family: "Nanum Gothic", sans-serif;
  letter-spacing: 1px;
  font-weight: 700;
  line-height: 16px;
  border: 1px solid transparent;
  border-radius: 6px;
  background-color: var(--color-medium-pink);
  color: var(--color-white);
  cursor: pointer;
  transition: 0.5s;

  :hover {
    background-color: var(--color-medium-nude);
  }

  @media (max-width: 1000px) {
    max-width: 700px;
    width: 100%;
  }
`;

export const Pic = styled.img`
  width: 100%;
  height: 100%;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  object-fit: cover;
`;

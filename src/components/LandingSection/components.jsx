import styled from "styled-components";

export const LandingBox = styled.div`
  width: 100%;
  height: 800px;

  @media (max-width: 1200px) {
    height: 600px;
  }

  @media (max-width: 900px) {
    height: 400px;
  }

  @media (max-width: 550px) {
  }
`;

export const LandingContainer = styled.div`
  display: flex;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const LandingText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 16px;

  a {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const LandingTitle = styled.h1`
  margin: 0;
  text-align: center;
  font-weight: 400;
  font-size: 72px;
  line-height: 80px;

  @media (max-width: 1200px) {
    font-size: 52px;
    line-height: 64px;
  }

  /* @media (max-width: 900px) {
    font-size: 52px;
    line-height: 64px;
  } */

  @media (max-width: 550px) {
    font-size: 42px;
    line-height: 54px;
  }
`;

export const LandingSubtitle = styled.h2`
  margin: 20px 0 15px;
  text-align: center;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;

  @media (max-width: 900px) {
    font-size: 28px;
    line-height: 36px;
  }

  @media (max-width: 550px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

export const LandingParagraph = styled.p`
  margin: 0 0 40px 0;
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;

  @media (max-width: 900px) {
    font-size: 18px;
    line-height: 24px;
  }

  @media (max-width: 550px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const LandingButton = styled.button`
  max-width: 345px;
  width: 100%;
  height: 60px;
  margin: 0 auto;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  background-color: var(--color-black);
  color: var(--color-white);
  border-radius: 8px;
  border: none;
  transition: 0.2s;
  cursor: pointer;

  :hover {
    background-color: #655e5a;
    border: none;
  }
`;

import styled, { keyframes } from "styled-components";

export const BannerSection = styled.section`
  background-color: var(--color-medium-pink);
  margin-top: 90px;
  margin-bottom: 90px;
  height: 90px;
  width: 100%;
  overflow: hidden;
  align-items: center;
  display: flex;
`;

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: var(--color-medium-pink);
  font-weight: 400;
  font-size: 24px;
  color: var(--color-white);

  svg {
    color: var(--color-white);
    width: 48px;
    height: 48px;
    margin: 0 24px;
  }
`;

const animate = keyframes`
  0%{
    transform: translateX(0%);
  }
  100%{
    transform: translateX(-100%);
  }
  
`;

export const BannerDiv = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  animation: ${animate};
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

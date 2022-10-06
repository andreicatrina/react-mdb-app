import styled from "styled-components";

export const CategorySection = styled.section``;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  position: relative;
  max-width: 1600px;
  margin: 0 auto;
`;

export const TextContainer = styled.div``;

export const Title = styled.h2`
  font-size: 44px;
  line-height: 58px;
  font-weight: 400;
  padding: 16px 0;
  margin: 0 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  margin-top: 64px;

  position: relative;
  /* gap: 48px; */
  /* overflow: scroll; */
`;

export const CategoryCard = styled.div`
  /* display: flex;
  margin: 0 20px;
  max-width: 350px; */
`;

export const CategoryDiv = styled.div`
  /* width: 100%; */
`;

export const CategoryPic = styled.img`
  height: 350px;
  width: 100%;
  max-width: 350px;
  border-radius: 8px;
  object-fit: cover;
`;

export const CategoryTitle = styled.h3`
  margin-top: 36px;
  font-size: 36px;
  font-weight: 400;
  text-align: center;
`;

export const ExploreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
`;

export const Explore = styled.a`
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: var(--color-black);
  border-bottom: 2px solid;
  /* text-underline-offset: 3px; */
  /* text-decoration: underline; */
  cursor: pointer;
`;

export const SwiperNavPrev = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 45%;
  left: 0;
  transform: translateY(-50%);
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  z-index: 10;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;
export const SwiperNavNext = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 45%;
  right: 0;
  transform: translateY(-50%);
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  z-index: 10;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;

// export const SliderLeftButton = styled.button`
//   position: absolute;
//   top: 50%;
//   left: 24px;
//   background-color: #000;
//   color: #fff;
//   border-radius: 50%;
//   width: 60px;
//   height: 60px;
//   transform: translateY(-50%);

//   svg {
//     width: 24px;
//     height: 24px;
//   }
// `;
// export const SliderRightButton = styled.button`
//   position: absolute;
//   top: 50%;
//   right: 24px;
//   background-color: #000;
//   color: #fff;
//   border-radius: 50%;
//   width: 60px;
//   height: 60px;
//   transform: translateY(-50%);

//   svg {
//     width: 24px;
//     height: 24px;
//   }
// `;

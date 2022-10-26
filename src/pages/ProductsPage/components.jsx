import styled from "styled-components";

export const ProductsPageSection = styled.section`
  padding-top: 50px;
`;

export const UpContainer = styled.div`
  padding: 0 24px;
`;

export const DownContainer = styled.div`
  display: flex;

  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 0 24px;
`;

export const TextImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  border-radius: 16px;
  background-color: #d9f1f4;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1000px;

  h2 {
    font-size: 48px;
    line-height: 63px;
    font-weight: 400;
  }
`;

export const ImageContainer = styled.div`
  max-height: 400px;
  img {
    width: 400px;
    height: 100%;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    object-fit: cover;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 250px;

  h4 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 20px;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

export const SortByContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

export const Sort = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
`;

export const SortOptions = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  max-width: 210px;
  border: 1px solid var(--color-black);

  background-color: var(--color-white);
  position: absolute;
  top: 16px;
  right: -120px;
  a {
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 22px;
    font-family: "Nanum Gothic", sans-serif;
    white-space: nowrap;
    padding: 6px;

    :hover {
      background-color: var(--color-medium-nude);
    }
  }
`;

export const ByCollectionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;

  span {
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    letter-spacing: 1px;
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 60px;
  column-gap: 30px;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 280px;
  cursor: pointer;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductPic = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
`;
export const RatingContainer = styled.div`
  padding: 10px 0;

  svg {
    margin-right: 2px;
  }
`;

export const NamePriceContainer = styled.div`
  padding-bottom: 12px;
`;

export const Name = styled.p`
  font-size: 18px;
  line-height: 24px;
  text-align: left;
`;
export const Price = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  text-align: left;
`;

export const AddToCart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 100%;
  height: 60px;
  background-color: transparent;
  border: 1px solid var(--color-black);
  border-radius: 8px;
  transition: 0.5s;
  cursor: pointer;

  :hover {
    background-color: var(--color-black);
    color: var(--color-white);
    border: transparent;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const PageSelectorContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
`;

export const PageSelectorDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  padding-top: 32px;
  gap: 24px;

  svg {
    cursor: pointer;
  }
`;

export const PageSelectorButton = styled.button`
  color: ${(props) => (props.isSelected ? "var(--color-medium-pink)" : "var(--color-black)")};
  background-color: transparent;
  cursor: pointer;

  :hover {
    color: var(--color-medium-pink);
  }
`;

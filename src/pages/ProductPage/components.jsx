import styled from "styled-components";

export const ProductPageContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 0 24px;
  gap: 24px;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;

  @media (max-width: 1100px) {
    /* max-width: 900px; */
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  img {
    width: 100%;
    height: 600px;
    border-radius: 16px;
    object-fit: cover;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 22px;
  padding-top: 12px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 12px;
  }
`;

export const ProductDetailsContainer = styled.div`
  width: 100%;
  max-width: 700px;

  @media (max-width: 1100px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const ProductRatingContainer = styled.div`
  display: flex;
  gap: 4px;
  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 1100px) {
    justify-content: center;
  }
`;

export const ProductTitle = styled.h2`
  margin: 10px 0;
  font-size: 36px;
  font-weight: 400;

  @media (max-width: 1100px) {
    display: flex;
    justify-content: center;
  }
`;

export const ProductPrice = styled.h3`
  margin: 10px 0 10px;
  font-size: 18px;
  font-weight: 700;

  @media (max-width: 1100px) {
    display: flex;
    justify-content: center;
  }
`;

export const ProductParagraph = styled.p``;

export const SizeContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1100px) {
    flex-direction: row;
    align-items: center;
    gap: 12px;
    border: 1px solid var(--color-light-gray);
    border-radius: 8px;
    padding-left: 8px;
    margin-bottom: 10px;
  }
`;

export const SizeParagraph = styled.h3`
  margin: 20px 0 20px;
  font-size: 12px;

  @media (max-width: 1100px) {
  }
`;

export const SizeDiv = styled.div`
  display: flex;

  margin: 0px 0 20px 0px;
  /* border: 1px solid var(--color-light-gray); */

  @media (max-width: 1100px) {
    margin: 0;
  }
`;

export const Size = styled.p`
  font-size: 16px;
  font-weight: 700;
  padding: 0 12px;
  border: 1px solid var(--color-light-gray);
  margin-right: 2px;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    background-color: #d9f1f4;
    color: var(--color-black);
  }
`;

export const AddToCartContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100px;
  width: 100%;
  height: 56px;
  border: 1px solid var(--color-light-gray);
  border-radius: 8px;
`;

// export const MinusButton = styled.button`
//   width: 100%;
//   max-width: 30px;
//   font-size: 24px;
//   background-color: transparent;
//   cursor: pointer;
// `;

// export const Quantity = styled.span`
//   font-size: 18px;
//   margin: auto 0;
// `;

// export const PlusButton = styled.button`
//   width: 100%;
//   max-width: 30px;
//   font-size: 24px;
//   background-color: transparent;
//   cursor: pointer;
// `;

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  max-width: 600px;
  height: 60px;
  background-color: var(--color-black);
  color: var(--color-white);
  border-radius: 8px;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.6s;

  svg {
    width: 20px;
    height: 20px;
  }
  :hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    font-size: 16px;
  }

  @media (max-width: 1100px) {
    max-width: 100%;
  }
`;

export const InfoParagraph = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px;
  margin: 10px 0 20px;

  @media (max-width: 1100px) {
    justify-content: center;
  }
`;

export const ProductDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  /* height: 100%; */
  max-height: 100%;
  padding: 30px;
  border-radius: 16px;
  gap: 20px;
  background-color: #d9f1f4;

  @media (max-width: 1100px) {
    max-width: 100%;
  }
`;

export const DescriptionContainer = styled.div``;
export const DescriptionTitle = styled.h4`
  padding: 20px;
  font-size: 12px;
  font-weight: 700;
  background-color: #ecf8f9;
  letter-spacing: 1.2px;
  cursor: pointer;
`;
export const Description = styled.p`
  padding: 20px;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
`;

export const TipsContainer = styled.div``;
export const TipsTitle = styled.h4`
  padding: 20px;
  font-size: 12px;
  font-weight: 700;
  background-color: #ecf8f9;
  letter-spacing: 1.2px;
  cursor: pointer;
`;
export const Tips = styled.p`
  padding: 20px;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
`;

{
  /* //////SLIDER/////// */
}

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
  padding: 32px 16px 0 16px;
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

{
  /* /////////REVIEW SECTION/////// */
}

export const ProductReviewSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 0 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 36px;
  }
`;

export const GradeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ReviewGrade = styled.h2`
  font-size: 44px;
  line-height: 58px;
  font-weight: 400;
`;

export const StarsContainer = styled.div`
  svg {
    width: 20px;
    height: 20px;
    margin: 2px;
  }
`;

export const NumberOfReviews = styled.h4`
  font-size: 14px;
`;

export const WriteAReview = styled.button`
  width: 100%;
  max-width: 360px;
  height: 60px;
  background-color: var(--color-medium-pink);
  color: var(--color-white);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const CustomerReviewForm = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 0 24px;
`;

export const WriteReviewTitle = styled.h2`
  font-size: 22px;
  font-weight: 400;
  line-height: 58px;
`;

export const ScoreLabel = styled.label`
  font-size: 13px;
  line-height: 17px;
  font-weight: 400;
`;

export const GiveStarsContainer = styled.div`
  margin-top: 10px;
  svg {
    width: 26px;
    height: 26px;
    margin: 2px;
    cursor: pointer;
  }
`;

export const GiveStars = styled.button`
  background-color: transparent;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  input[type="text"] {
    border: 1px solid var(--color-black);
    padding: 22px;
    border-radius: 8px;
    margin: 15px 0 20px 0;
    font-size: 12px;
    font-weight: 700;
  }
`;

export const UserDetailsContainer = styled.div``;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;

  input[type="text"] {
    border: 1px solid var(--color-black);
    padding: 22px;
    border-radius: 8px;
    margin: 15px 0 20px 0;
    font-size: 12px;
    font-weight: 700;
  }
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;

  input[type="mail"] {
    border: 1px solid var(--color-black);
    padding: 22px;
    border-radius: 8px;
    margin: 15px 0 20px 0;
    font-size: 12px;
    font-weight: 700;
  }
`;

export const PostButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const PostButton = styled.button`
  margin: 0 auto;
  width: 100%;
  max-width: 360px;
  height: 60px;
  background-color: var(--color-medium-pink);
  color: var(--color-white);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

{
  /* /////////COMMENT SECTION/////// */
}

export const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
export const FilterByRatingContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
`;
export const FilterStarsDropDown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  border: 1px solid var(--color-light-gray);
  color: var(--color-medium-pink);
  background-color: white;
  position: absolute;
  top: 40px;
  padding-bottom: 4px;

  button {
    display: flex;
    justify-content: center;
    cursor: pointer;
    background-color: transparent;

    svg {
      color: var(--color-medium-pink);
    }

    :hover {
      background-color: var(--color-light-nude);
    }
  }
`;
export const FilterRatingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 200px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid var(--color-light-gray);
  padding: 0 8px;
  cursor: pointer;
  margin-bottom: 36px;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 50px 24px 0 24px;
`;
export const CommentInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 8px;
`;
export const CommentNameDiv = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 20px;
    padding: 4px 12px;
    border-radius: 50%;
    border: 2px solid var(--color-medium-pink);
  }

  h3 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    padding: 0 12px;
  }
`;
export const CommentDate = styled.p`
  font-size: 12px;
  font-weight: 700;
`;
export const CommentRatingDiv = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 24px;

  svg {
    width: 18px;
    height: 18px;
    margin-right: 2px;
  }
`;
export const CommentaryDiv = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 32px;
  }

  p {
    font-size: 18px;
    line-height: 32px;
    font-weight: 400;
  }
`;

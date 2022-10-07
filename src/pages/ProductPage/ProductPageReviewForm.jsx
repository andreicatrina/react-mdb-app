import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {
  PostButton,
  EmailContainer,
  NameContainer,
  UserDetailsContainer,
  InputsContainer,
  GiveStarsContainer,
  ScoreLabel,
  WriteReviewTitle,
  CustomerReviewForm,
  PostButtonContainer,
  GiveStars,
} from "./components";

export const ProductPageReviewForm = () => {
  const [starClicked, setStarClicked] = useState(undefined);
  const [starHovered, setStarHovered] = useState(undefined);

  function onClickStar(n) {
    setStarClicked(n);
  }

  function onHoverStar(n) {
    console.log(`am facut hover pe steaua ${n}`)
    setStarHovered(n);
  }

  function getIconForStarIndex(indexOfStar) {
    if (starHovered) {
      return starHovered >= indexOfStar ? <AiFillStar /> : <AiOutlineStar />;
    } else {
      return starClicked >= indexOfStar ? <AiFillStar /> : <AiOutlineStar />;
    }
  }

  return (
    <CustomerReviewForm>
      <WriteReviewTitle>SCRIE UN REVIEW</WriteReviewTitle>
      <ScoreLabel>RATING:</ScoreLabel>
      <GiveStarsContainer onMouseLeave={() => { onHoverStar(undefined) }}>
        <GiveStars onClick={() => { onClickStar(1); }} onMouseEnter={() => { onHoverStar(1) }}>
          {getIconForStarIndex(1)}
        </GiveStars>
        <GiveStars onClick={() => { onClickStar(2); }} onMouseEnter={() => { onHoverStar(2) }}>
          {getIconForStarIndex(2)}
        </GiveStars>
        <GiveStars onClick={() => { onClickStar(3); }} onMouseEnter={() => { onHoverStar(3) }}>
          {getIconForStarIndex(3)}
        </GiveStars>
        <GiveStars onClick={() => { onClickStar(4); }} onMouseEnter={() => { onHoverStar(4) }}>
          {getIconForStarIndex(4)}
        </GiveStars>
        <GiveStars onClick={() => { onClickStar(5); }} onMouseEnter={() => { onHoverStar(5) }}>
          {getIconForStarIndex(5)}
        </GiveStars>
      </GiveStarsContainer>
      <InputsContainer>
        <label>Titlu:</label>
        <input type="text" />
        <label>Review:</label>
        <input type="text" />
      </InputsContainer>
      <UserDetailsContainer>
        <NameContainer>
          <label>Numele Tau:</label>
          <input type="text" />
        </NameContainer>
        <EmailContainer>
          <label>Email-ul Tau:</label>
          <input type="mail" required />
        </EmailContainer>
      </UserDetailsContainer>
      <PostButtonContainer>
        <PostButton>POST</PostButton>
      </PostButtonContainer>
    </CustomerReviewForm>
  );
};

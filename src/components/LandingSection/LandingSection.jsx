import s from "../LandingSection/LandingSection.module.css";
import braceletCover from "../../images/braceletCover.jpg";

import React from "react";
import {
  LandingBox,
  LandingContainer,
  LandingText,
  LandingTitle,
  LandingSubtitle,
  LandingParagraph,
  LandingButton,
} from "./components";
import { Link } from "react-router-dom";

const LandingSection = () => {
  return (
    <section className={s.landingSection}>
      <LandingContainer>
        <LandingBox>
          <LandingText>
            <LandingTitle>Lorem, ipsum dolor.</LandingTitle>
            <LandingSubtitle>Lorem ipsum dolor sit amet.</LandingSubtitle>
            <LandingParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quod quam voluptates.
            </LandingParagraph>
            <Link to="/products">
              <LandingButton className={s.buttonShop}>SHOP NOW</LandingButton>
            </Link>
          </LandingText>
        </LandingBox>
        <LandingBox>
          <img className={s.landingImg} src={braceletCover} alt="" />
        </LandingBox>
      </LandingContainer>
    </section>
  );
};

export default LandingSection;

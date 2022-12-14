import React from "react";
import {
  CollectionContainer,
  CollectionSection,
  ImageContainer,
  Paragraph,
  TextContainer,
  Title,
  ViewButton,
  Pic,
} from "./components";
import { Link } from "react-router-dom";

import CollectionPic from "../../images/CollectionPic2.jpg";

const AllCollections = () => {
  return (
    <CollectionSection>
      <CollectionContainer>
        <TextContainer>
          <Title>De ce sa alegi Magazinul De Bratari?</Title>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque amet pariatur id quo quisquam dolor et totam
            provident a quidem.
          </Paragraph>
          <Link to="/products">
            <ViewButton>VIEW ALL COLLECTIONS</ViewButton>
          </Link>
        </TextContainer>
        <ImageContainer>
          <Pic src={CollectionPic} alt="" />
        </ImageContainer>
      </CollectionContainer>
    </CollectionSection>
  );
};

export default AllCollections;

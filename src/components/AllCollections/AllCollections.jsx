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

import CollectionPic from "../../images/CollectionPic2.jpg";

const AllCollections = () => {
  return (
    <CollectionSection>
      <CollectionContainer>
        <TextContainer>
          <Title>De ce sa alegi Magazinul De Bratari?</Title>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque amet
            pariatur id quo quisquam dolor et totam provident a quidem.
          </Paragraph>
          <ViewButton>VIEW ALL COLLECTIONS</ViewButton>
        </TextContainer>
        <ImageContainer>
          <Pic src={CollectionPic} alt="" />
        </ImageContainer>
      </CollectionContainer>
    </CollectionSection>
  );
};

export default AllCollections;

import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import {
  BannerContainer,
  ImageContainer,
  Image,
  Paragraph,
  TextContainer,
  Title,
  TextDiv,
  InfoCardsContainer,
  InfoContainer,
  InfoTitle,
  InfoParagraph,
  CardsDiv,
  Card,
  CardContainer,
  CardTextContainer,
  CardTitle,
  CardParagraph,
  VisitShopContainer,
  LeftContainer,
  RightContainer,
  LeftText,
  LeftTitle,
  LeftParagraph,
  SeeProductsButton,
} from "./components";

import aboutBanner from "../../images/AboutPageBanner.jpg";
import shoppingBag from "../../images/shoppingBag.png";
import goodQuality from "../../images/goodQuality.png";
import fastDelivery from "../../images/fastDelivery.png";
import factura from "../../images/factura.png";
import discount from "../../images/discount.png";
import viewAllShop from "../../images/viewAllShop.jpg";

const AboutPage = () => {
  return (
    <>
      <Header />
      <BannerContainer>
        <ImageContainer>
          <Image src={aboutBanner} />
        </ImageContainer>
        <TextContainer>
          <TextDiv>
            <Title>Cine suntem</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, omnis! Voluptate laudantium, mollitia
              commodi, modi doloremque architecto tenetur dolorem optio odio possimus quae assumenda magni nemo maiores?
              Mollitia quisquam quas at perspiciatis, non vel assumenda magni accusamus, optio ad eligendi!
            </Paragraph>
          </TextDiv>
        </TextContainer>
      </BannerContainer>
      <InfoCardsContainer>
        <InfoContainer>
          <InfoTitle>De ce o sa-ti placa de noi</InfoTitle>
          <InfoParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at commodi tempore quibusdam quasi
            necessitatibus magni reiciendis consectetur fugit optio?
          </InfoParagraph>
        </InfoContainer>
        <CardsDiv>
          <CardContainer>
            <img src={goodQuality} />
            <CardTextContainer>
              <CardTitle>Iti oferim calitate</CardTitle>
              <CardParagraph>
                Incercam mereu sa-ti oferim produse de buna calitate, iar orice sugestie din partea ta este bine venita!
              </CardParagraph>
            </CardTextContainer>
          </CardContainer>
          <CardContainer>
            <img src={shoppingBag} />
            <CardTextContainer>
              <CardTitle>Impachetam bine</CardTitle>
              <CardParagraph>
                Nu-ti face probleme! Avem grija ca produsul tau sa ajunga intr-o stare excelenta.
              </CardParagraph>
            </CardTextContainer>
          </CardContainer>
          <CardContainer>
            <img src={fastDelivery} />
            <CardTextContainer>
              <CardTitle>Trimitem imediat</CardTitle>
              <CardParagraph>
                Ne-ar placea sa teleportam produsele direct la tine pe masa dar inca nu putem. In schimb promitem sa
                expediem in mai putin de 24h!
              </CardParagraph>
            </CardTextContainer>
          </CardContainer>
          <CardContainer>
            <img src={factura} />
            <CardTextContainer>
              <CardTitle>Iti trimitem factura online</CardTitle>
              <CardParagraph>
                Stim cat de important este pentru tine sa stii cati bani ai cheltuit astazi asa ca noi iti trimitem
                rapid factura pe mail!
              </CardParagraph>
            </CardTextContainer>
          </CardContainer>
          <CardContainer>
            <img src={discount} />
            <CardTextContainer>
              <CardTitle>Reduceri dese</CardTitle>
              <CardParagraph>Vrem sa iesi mai ieftin asa ca noi iti oferim oferte des!</CardParagraph>
            </CardTextContainer>
          </CardContainer>
        </CardsDiv>
      </InfoCardsContainer>
      <VisitShopContainer>
        <LeftContainer>
          <LeftText>
            <LeftTitle>Viziteaza magazinul</LeftTitle>
            <LeftParagraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem maxime in tempore vitae recusandae libero
              laudantium doloribus cupiditate sapiente veniam?
            </LeftParagraph>
            <Link to="/products">
              <SeeProductsButton>VEZI PRODUSELE</SeeProductsButton>
            </Link>
          </LeftText>
        </LeftContainer>
        <RightContainer>
          <img src={viewAllShop} />
        </RightContainer>
      </VisitShopContainer>
      <Footer />
    </>
  );
};

export default AboutPage;

import React from "react";
import {
  FooterContainer,
  FooterSection,
  LinksContainer,
  NewsletterContainer,
  ShopLinks,
  InfoLinks,
  ContactLinks,
  LinksTitle,
  Links,
  ContactPhone,
  ContactMail,
  TextContainer,
  Title,
  Subtitle,
  Form,
  EmailInput,
  Label,
  DateInput,
  ButtonContainer,
  SubscribeButton,
  FooterSocials,
  FooterFacebook,
  FooterInstagram,
} from "./components";

import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { BiMailSend } from "react-icons/bi";

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <LinksContainer>
          <ShopLinks>
            <LinksTitle>Shop</LinksTitle>
            <Links href="">Colectii</Links>
            <Links href="">Produse noi</Links>
            <Links href="">Cele mai vandute</Links>
          </ShopLinks>
          <InfoLinks>
            <LinksTitle>Informatii Utile</LinksTitle>
            <Links href="">GDPR</Links>
            <Links href="">Politica de confidentialitate</Links>
            <Links href="">Politica de Retur</Links>
            <Links href="">Protectia Consumatorului</Links>
            <Links href="">FAQ</Links>
          </InfoLinks>
          <ContactLinks>
            <LinksTitle>Contact</LinksTitle>
            <ContactPhone href="tel:+40744559691">
              <FiPhoneCall />
            </ContactPhone>
            <ContactMail href="mailto: magazinuldebratari@gmail.com">
              <BiMailSend />
            </ContactMail>
          </ContactLinks>
        </LinksContainer>
        <NewsletterContainer>
          <TextContainer>
            <Title>Primesti 10% discount</Title>
            <Subtitle>cand te abonezi la newsletter!</Subtitle>
          </TextContainer>
          <Form>
            <EmailInput type="text" placeholder="ADRESA DE EMAIL" required />
            <Label>Data nasterii</Label>
            <DateInput type="date" required />
          </Form>
          <ButtonContainer>
            <SubscribeButton>SUBSCRIBE</SubscribeButton>
          </ButtonContainer>
          <FooterSocials>
            <FooterFacebook href="https://www.facebook.com/magazinuldebratari1">
              <SiFacebook />
            </FooterFacebook>
            <FooterInstagram href="https://www.instagram.com/magazinuldebratari/">
              <SiInstagram />
            </FooterInstagram>
          </FooterSocials>
        </NewsletterContainer>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;

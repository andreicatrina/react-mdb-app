import styled from "styled-components";

export const FooterSection = styled.section`
  background-color: #f0f0f0;
  padding: 60px 0 40px;
`;
export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1400px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const LinksContainer = styled.div`
  display: flex;
  width: 65%;
  gap: 20px;
  border-right: 2px solid #b4b4b4;
  /* justify-content: flex-end; */
  padding: 0 24px 0 60px;

  @media (max-width: 1000px) {
    order: 2;
    justify-content: space-evenly;
    border: none;
    padding: 0;
    /* width: 100%;
    max-width: 900px; */
    margin: 0 auto;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ShopLinks = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: var(--color-black);
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 1.2px;
    margin-bottom: 20px;
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const InfoLinks = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    text-align: center;
    justify-content: space-between;
  }
`;

export const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    text-align: center;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const LinksTitle = styled.h3`
  font-size: 18px;
  line-height: 24px;
  color: gray;
  margin: 0 0 30px;
`;

export const Links = styled.a`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1.2px;
  margin-bottom: 20px;
  color: var(--color-black);
  cursor: pointer;
`;

export const ContactPhone = styled.a`
  color: var(--color-black);
  margin-bottom: 12px;
  cursor: pointer;
  margin: 0 auto;

  svg {
    height: 18px;
    width: 18px;
    transition: 0.8s;

    :hover {
      color: var(--color-medium-nude);
    }
  }
`;

export const ContactMail = styled.a`
  color: var(--color-black);
  margin: 0 auto;
  cursor: pointer;

  svg {
    height: 22px;
    width: 22px;
    transition: 0.8s;

    :hover {
      color: var(--color-medium-nude);
    }
  }

  @media (max-width: 1000px) {
    max-width: 240px;
    width: 100%;
    inline-size: 144px;
    overflow-wrap: break-word;
    margin-top: 12px;
  }
`;

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  padding: 0 24px 0 24px;

  @media (max-width: 1000px) {
    order: 1;
    width: 100%;
    max-width: 500px;
  }
`;

export const TextContainer = styled.div`
  margin-bottom: 16px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    max-width: 450px;
  }
`;
export const Title = styled.h3`
  font-size: 36px;
  line-height: 48px;
  font-weight: 400;

  @media (max-width: 1000px) {
    text-align: left;
    padding: 12px 0;
  }
`;
export const Subtitle = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: var(--color-black);

  @media (max-width: 1000px) {
    text-align: left;
    padding: 0 0 12px 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
  }
`;

export const EmailInput = styled.input`
  height: 24px;
  max-width: 300px;
  width: 100%;
  margin-bottom: 12px;

  @media (max-width: 1000px) {
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    height: 50px;
    padding-left: 10px;
    font-size: 16px;
    margin-bottom: 12px;

    input[type="text"] {
      color: var(--color-black);
    }
  }
`;

export const Label = styled.label`
  font-size: 14px;

  @media (max-width: 1000px) {
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    margin-bottom: 8px;
    font-size: 16px;
  }
`;

export const DateInput = styled.input`
  height: 24px;
  max-width: 300px;
  width: 100%;

  @media (max-width: 1000px) {
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    height: 50px;
    padding: 0 10px;
    font-size: 18px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  margin-top: 20px;

  @media (max-width: 1000px) {
    width: 100%;
    max-width: 500px;
  }
`;

export const SubscribeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 300px;
  height: 30px;
  background-color: var(--color-medium-pink);
  color: var(--color-white);
  font-size: 10px;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    background-color: var(--color-white);
    color: var(--color-medium-pink);
    font-size: 14px;
  }

  @media (max-width: 1000px) {
    margin: 0 auto;
    width: 100%;
    max-width: 450px;
    height: 50px;
    border-radius: 8px;
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  max-width: 300px;
  margin-top: 20px;

  @media (max-width: 1000px) {
    margin: 0 auto;
    margin-top: 18px;
    margin-bottom: 18px;
    /* width: 100%; */
    /* max-width: 450px; */
  }
`;

export const FooterFacebook = styled.a`
  color: var(--color-medium-pink);

  :hover {
    color: #1877f2;
  }
`;

export const FooterInstagram = styled.a`
  color: var(--color-medium-pink);

  :hover {
    color: #e4405f;
  }
`;

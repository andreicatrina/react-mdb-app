import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { useParams } from "react-router-dom";
import { getProductById } from "../../components/NewProducts/slider";

import {
  ProductPageContainer,
  ProductImageContainer,
  ImageContainer,
  ImagesContainer,
  ProductDetailsContainer,
  ProductRatingContainer,
  ProductTitle,
  ProductPrice,
  ProductParagraph,
  SizeContainer,
  SizeParagraph,
  SizeDiv,
  Size,
  AddToCartContainer,
  AddToCartButton,
  InfoParagraph,
  QuantityContainer,
  MinusButton,
  Quantity,
  PlusButton,
  ProductDescriptionContainer,
  DescriptionContainer,
  DescriptionTitle,
  Description,
  TipsContainer,
  TipsTitle,
  Tips,
  ProductsSection,
  Title,
  Paragraph,
  TextContainer,
  ProductContainer,
  ProductCard,
  ProductDetails,
  AddToCart,
  RatingContainer,
  ProductPic,
  NamePriceContainer,
  Name,
  Price,
  RightSliderButton,
  LeftSliderButton,
  ProductContainer2,
  PostButton,
  EmailContainer,
  NameContainer,
  UserDetailsContainer,
  InputsContainer,
  GiveStarsContainer,
  ScoreLabel,
  WriteReviewTitle,
  WriteAReview,
  ReviewContainer,
  GradeContainer,
  ReviewGrade,
  StarsContainer,
  NumberOfReviews,
  CustomerReviewForm,
  ProductReviewSection,
  PostButtonContainer,
  GiveStars,
} from "./components";

import ProductPic1 from "../../images/ProductPic1.jpg";
import { AiFillStar } from "react-icons/ai";
import { FaCreativeCommonsZero } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { BsCartCheckFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

import React from "react";
import { useState } from "react";
import NewProducts from "../../components/NewProducts/NewProducts";
import { productList } from "../../components/NewProducts/slider";
import { useRef } from "react";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [count, setCount] = useState(1);
  const [showDescription, setShowDescription] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const [starClicked1, setStarClicked1] = useState(false);
  const [starClicked2, setStarClicked2] = useState(false);
  const [starClicked3, setStarClicked3] = useState(false);
  const [starClicked4, setStarClicked4] = useState(false);
  const [starClicked5, setStarClicked5] = useState(false);

  function ratingFunction1() {
    if (starClicked1 === false) {
      setStarClicked1(true);
    } else {
      setStarClicked1(false);
      setStarClicked2(false);
      setStarClicked3(false);
      setStarClicked4(false);
      setStarClicked5(false);
    }
  }
  function ratingFunction2() {
    if (starClicked2 === false) {
      setStarClicked2(true);
      setStarClicked1(true);
    } else {
      setStarClicked2(false);
      setStarClicked3(false);
      setStarClicked4(false);
      setStarClicked5(false);
    }
  }
  function ratingFunction3() {
    if (starClicked3 === false) {
      setStarClicked3(true);
      setStarClicked2(true);
      setStarClicked1(true);
    } else {
      setStarClicked3(false);
      setStarClicked4(false);
      setStarClicked5(false);
    }
  }
  function ratingFunction4() {
    if (starClicked4 === false) {
      setStarClicked4(true);
      setStarClicked3(true);
      setStarClicked2(true);
      setStarClicked1(true);
    } else {
      setStarClicked5(false);
      setStarClicked4(false);
    }
  }
  function ratingFunction5() {
    if (starClicked5 === false) {
      setStarClicked5(true);
      setStarClicked4(true);
      setStarClicked3(true);
      setStarClicked2(true);
      setStarClicked1(true);
    } else {
      setStarClicked5(false);
    }
  }

  function showCustomerReview() {
    if (showReview === false) {
      setShowReview(true);
    } else {
      setShowReview(false);
    }
  }

  function cartButton() {
    if (isClicked === false) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  }

  function plusFunction() {
    setCount(count + 1);
  }

  function minusFunction() {
    setCount(count - 1);
  }

  function openDescription() {
    if (showDescription === false) {
      setShowDescription(true);
    } else {
      setShowDescription(false);
    }
  }

  function openTips() {
    if (showTips === false) {
      setShowTips(true);
    } else {
      setShowTips(false);
    }
  }

  const divReference = useRef();

  const onClickRightButton = function () {
    // divReference.current.scroll({ left: 270, behaviour: "smooth" });
    divReference.current.scrollLeft += 310;
  };

  const onClickLeftButton = function () {
    divReference.current.scrollLeft -= 310;
  };

  const params = useParams();
  const productIdAsNumber = parseInt(params.productId);
  const product = getProductById(productIdAsNumber);
  console.log(product);

  return (
    <>
      <Header />
      <ProductPageContainer>
        <ProductImageContainer>
          <ImageContainer>
            <img src={ProductPic1} />
          </ImageContainer>
          <ImagesContainer>
            <img src={ProductPic1} alt="" />
            <img src={ProductPic1} alt="" />
            <img src={ProductPic1} alt="" />
            <img src={ProductPic1} alt="" />
            <img src={ProductPic1} alt="" />
          </ImagesContainer>
        </ProductImageContainer>
        <ProductDetailsContainer>
          <ProductRatingContainer>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </ProductRatingContainer>
          <ProductTitle>Nume Produs</ProductTitle>
          <ProductPrice>10 LEI</ProductPrice>
          {/* <ProductParagraph>informatii legate de achizitie</ProductParagraph> */}
          <SizeContainer>
            <SizeParagraph>MARIME:</SizeParagraph>
            <SizeDiv>
              <Size>18 cm</Size>
              <Size>18 cm</Size>
              <Size>18 cm</Size>
              <Size>18 cm</Size>
            </SizeDiv>
          </SizeContainer>
          <AddToCartContainer>
            <QuantityContainer>
              <MinusButton onClick={minusFunction}>-</MinusButton>
              <Quantity>{count}</Quantity>
              <PlusButton onClick={plusFunction}>+</PlusButton>
            </QuantityContainer>
            <AddToCartButton onClick={cartButton}>
              {isClicked === true ? <BsCartCheckFill /> : <GiShoppingCart />}
              {isClicked === true ? "ADAUGAT IN COS" : "ADAUGA IN COS"}
            </AddToCartButton>
          </AddToCartContainer>
          <InfoParagraph>
            <FaCreativeCommonsZero />
            Transport Gratuit pentru comenzi mai mari de 250 Lei
          </InfoParagraph>
          <ProductDescriptionContainer>
            <DescriptionContainer>
              <DescriptionTitle onClick={openDescription}>
                DESCRIERE
              </DescriptionTitle>
              {showDescription === true ? (
                <Description>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                  voluptatibus cupiditate molestias mollitia vitae culpa totam
                  adipisci itaque rerum, in numquam cum quis quibusdam voluptas
                  explicabo blanditiis incidunt? Esse, ducimus.
                </Description>
              ) : null}
            </DescriptionContainer>
            <TipsContainer>
              <TipsTitle onClick={openTips}>SFATURI</TipsTitle>
              {showTips === true ? (
                <Tips>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere mollitia molestiae quasi cumque reprehenderit sapiente!
                </Tips>
              ) : null}
            </TipsContainer>
          </ProductDescriptionContainer>
        </ProductDetailsContainer>
      </ProductPageContainer>

      {/* //////SLIDER/////// */}

      <ProductsSection>
        <TextContainer>
          <Title>Produse Similare</Title>
          <Paragraph>
            Nu te-ai hotarat inca? Compara-l cu alte produse similare
          </Paragraph>
        </TextContainer>
        <ProductContainer>
          <ProductContainer2 ref={divReference}>
            {productList.map((product, i) => {
              return (
                <ProductCard>
                  <Link to={`/products/${product.id}`}>
                    <ProductDetails>
                      <ProductPic src={product.image} alt="" />
                      <RatingContainer>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                      </RatingContainer>
                      <NamePriceContainer>
                        <Name>{product.name}</Name>
                        <Price>{`${product.price} LEI`}</Price>
                      </NamePriceContainer>
                    </ProductDetails>
                  </Link>

                  <AddToCart>ADD TO CART</AddToCart>
                </ProductCard>
              );
            })}
          </ProductContainer2>

          <LeftSliderButton onClick={onClickLeftButton}>
            <BsArrowLeft />
          </LeftSliderButton>
          <RightSliderButton onClick={onClickRightButton}>
            <BsArrowRight />
          </RightSliderButton>
        </ProductContainer>
      </ProductsSection>

      {/* /////////REVIEW SECTION/////// */}
      <ProductReviewSection>
        <ReviewContainer>
          <GradeContainer>
            <ReviewGrade>4.9</ReviewGrade>
            <StarsContainer>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </StarsContainer>
            <NumberOfReviews>2150 Reviews</NumberOfReviews>
          </GradeContainer>
          <WriteAReview onClick={showCustomerReview}>
            Spune-ti parerea
          </WriteAReview>
        </ReviewContainer>
        {showReview === true ? (
          <CustomerReviewForm>
            <WriteReviewTitle>SCRIE UN REVIEW</WriteReviewTitle>
            <ScoreLabel>RATING:</ScoreLabel>
            <GiveStarsContainer>
              <GiveStars onClick={ratingFunction1}>
                {starClicked1 === true ? <AiFillStar /> : <AiOutlineStar />}
              </GiveStars>
              <GiveStars onClick={ratingFunction2}>
                {starClicked2 === true ? <AiFillStar /> : <AiOutlineStar />}
              </GiveStars>
              <GiveStars onClick={ratingFunction3}>
                {starClicked3 === true ? <AiFillStar /> : <AiOutlineStar />}
              </GiveStars>
              <GiveStars onClick={ratingFunction4}>
                {starClicked4 === true ? <AiFillStar /> : <AiOutlineStar />}
              </GiveStars>
              <GiveStars onClick={ratingFunction5}>
                {starClicked5 === true ? <AiFillStar /> : <AiOutlineStar />}
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
        ) : null}
      </ProductReviewSection>

      <Footer />
    </>
  );
};

export default ProductPage;

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
  WriteAReview,
  ReviewContainer,
  GradeContainer,
  ReviewGrade,
  StarsContainer,
  NumberOfReviews,
  ProductReviewSection,
  CommentSection,
  FilterByRatingContainer,
  FilterRatingDiv,
  CommentContainer,
  CommentNameDiv,
  CommentRatingDiv,
  CommentaryDiv,
  CommentDate,
  CommentInfoDiv,
  FilterStarsDropDown,
} from "./components";

import ProductPic1 from "../../images/ProductPic1.jpg";
import { AiFillStar } from "react-icons/ai";
import { FaCreativeCommonsZero } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { BsCartCheckFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

import React from "react";
import { useState } from "react";
import NewProducts from "../../components/NewProducts/NewProducts";
import { productList } from "../../components/NewProducts/slider";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ProductPageReviewForm } from "./ProductPageReviewForm";

const ProductPage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [count, setCount] = useState(1);
  const [showDescription, setShowDescription] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showFilterStars, setShowFilterStars] = useState(false);

  function filterStars() {
    if (showFilterStars === false) {
      setShowFilterStars(true);
    } else {
      setShowFilterStars(false);
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
  console.log(product.reviews);

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
            {product.rating >= 1 ? <AiFillStar /> : <AiOutlineStar />}
            {product.rating >= 2 ? <AiFillStar /> : <AiOutlineStar />}
            {product.rating >= 3 ? <AiFillStar /> : <AiOutlineStar />}
            {product.rating >= 4 ? <AiFillStar /> : <AiOutlineStar />}
            {product.rating >= 5 ? <AiFillStar /> : <AiOutlineStar />}
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
              {isClicked === true ? "PRODUS ADAUGAT" : "ADAUGA IN COS"}
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
              {showDescription === false ? (
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
                        {product.rating >= 1 ? (
                          <AiFillStar />
                        ) : (
                          <AiOutlineStar />
                        )}
                        {product.rating >= 2 ? (
                          <AiFillStar />
                        ) : (
                          <AiOutlineStar />
                        )}
                        {product.rating >= 3 ? (
                          <AiFillStar />
                        ) : (
                          <AiOutlineStar />
                        )}
                        {product.rating >= 4 ? (
                          <AiFillStar />
                        ) : (
                          <AiOutlineStar />
                        )}
                        {product.rating >= 5 ? (
                          <AiFillStar />
                        ) : (
                          <AiOutlineStar />
                        )}
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
              {product.rating >= 1 ? <AiFillStar /> : <AiOutlineStar />}
              {product.rating >= 2 ? <AiFillStar /> : <AiOutlineStar />}
              {product.rating >= 3 ? <AiFillStar /> : <AiOutlineStar />}
              {product.rating >= 4 ? <AiFillStar /> : <AiOutlineStar />}
              {product.rating >= 5 ? <AiFillStar /> : <AiOutlineStar />}
            </StarsContainer>
            <NumberOfReviews>2150 Reviews</NumberOfReviews>
          </GradeContainer>
          <WriteAReview onClick={showCustomerReview}>
            Spune-ti parerea
          </WriteAReview>
        </ReviewContainer>
        {showReview === true ? <ProductPageReviewForm /> : null}
      </ProductReviewSection>

      {/* /////////COMMENT SECTION/////// */}

      <CommentSection>
        <FilterByRatingContainer>
          <FilterRatingDiv onClick={filterStars}>
            <span>RATING</span>
            <IoMdArrowDropdown />
          </FilterRatingDiv>
          {showFilterStars === true ? (
            <FilterStarsDropDown>
              <p>All</p>
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
              <div>
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
            </FilterStarsDropDown>
          ) : null}
        </FilterByRatingContainer>
        {product.reviews.map((review) => {
          return (
            <CommentContainer>
              <CommentInfoDiv>
                <CommentNameDiv>
                  <p>{review.name[0].toUpperCase()}</p>
                  <h3>{review.name}</h3>
                </CommentNameDiv>
                <CommentDate>{review.date.toLocaleString()}</CommentDate>
              </CommentInfoDiv>

              <CommentRatingDiv>
                {review.rating >= 1 ? <AiFillStar /> : <AiOutlineStar />}
                {review.rating >= 2 ? <AiFillStar /> : <AiOutlineStar />}
                {review.rating >= 3 ? <AiFillStar /> : <AiOutlineStar />}
                {review.rating >= 4 ? <AiFillStar /> : <AiOutlineStar />}
                {review.rating >= 5 ? <AiFillStar /> : <AiOutlineStar />}
              </CommentRatingDiv>
              <CommentaryDiv>
                <h3>{review.title}</h3>
                <p>{review.text}</p>
              </CommentaryDiv>
            </CommentContainer>
          );
        })}
      </CommentSection>
      <Footer />
    </>
  );
};

export default ProductPage;

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { useParams } from "react-router-dom";

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
import { getProductById, getReviewsForProduct } from "../../utils/firebase";
import { useEffect } from "react";
import { isProductInShoppingCart, removeProductFromCart, saveProductToCart } from "../../utils/shopping-cart";

const ProductPage = () => {
  const [count, setCount] = useState(1);
  const [showDescription, setShowDescription] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showFilterStars, setShowFilterStars] = useState(false);
  const [selectRating, setSelectRating] = useState(undefined);
  const [product, setProduct] = useState(undefined);
  const [reviews, setReviews] = useState([]);
  const params = useParams();
  const [isInShoppingCart, setIsInShoppingCart] = useState(isProductInShoppingCart(params.productId));

  useEffect(() => {
    setProductFromFirebase(params.productId);
    console.log(params.productId);
  }, [params.productId]);

  async function setProductFromFirebase(id) {
    // const [product, reviews] = await Promise.all([getProductById(id), getReviewsForProduct(product.id)]);
    const product = await getProductById(id);
    const reviews = await getReviewsForProduct(product.id);
    setProduct(product);
    setReviews(reviews);
    // console.log(reviews);
  }

  function filterRating(stars) {
    if (selectRating !== stars) {
      setSelectRating(stars);
    }
  }

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

  function onClickCartButton() {
    const isInShoppingCart = isProductInShoppingCart(params.productId);
    if (isInShoppingCart) {
      removeProductFromCart(params.productId);
    } else {
      saveProductToCart(params.productId);
    }
    setIsInShoppingCart(isProductInShoppingCart(params.productId));
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

  let filteredReviews = reviews.filter((r) => {
    if (selectRating === undefined) {
      return true;
    }

    if (r.rating === selectRating) {
      return true;
    } else {
      return false;
    }
  });

  if (!product) {
    return <p>loading</p>;
  }
  return (
    <>
      <Header />
      <ProductPageContainer>
        <ProductImageContainer>
          <ImageContainer>
            <img src={product.images[0]} />
          </ImageContainer>
          <ImagesContainer>
            {product.images.slice(1).map((image) => (
              <img src={image} />
            ))}
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
            {/* <QuantityContainer>
              <MinusButton onClick={minusFunction}>-</MinusButton>
              <Quantity>{count}</Quantity>
              <PlusButton onClick={plusFunction}>+</PlusButton>
            </QuantityContainer> */}
            <AddToCartButton onClick={onClickCartButton}>
              {isInShoppingCart === true ? <BsCartCheckFill /> : <GiShoppingCart />}
              {isInShoppingCart === true ? "PRODUS ADAUGAT" : "ADAUGA IN COS"}
            </AddToCartButton>
          </AddToCartContainer>
          <InfoParagraph>
            <FaCreativeCommonsZero />
            Transport Gratuit pentru comenzi mai mari de 250 Lei
          </InfoParagraph>
          <ProductDescriptionContainer>
            <DescriptionContainer>
              <DescriptionTitle onClick={openDescription}>DESCRIERE</DescriptionTitle>
              {showDescription === false ? (
                <Description>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde voluptatibus cupiditate molestias
                  mollitia vitae culpa totam adipisci itaque rerum, in numquam cum quis quibusdam voluptas explicabo
                  blanditiis incidunt? Esse, ducimus.
                </Description>
              ) : null}
            </DescriptionContainer>
            <TipsContainer>
              <TipsTitle onClick={openTips}>SFATURI</TipsTitle>
              {showTips === true ? (
                <Tips>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere mollitia molestiae quasi cumque
                  reprehenderit sapiente!
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
          <Paragraph>Nu te-ai hotarat inca? Compara-l cu alte produse similare</Paragraph>
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
                        {product.rating >= 1 ? <AiFillStar /> : <AiOutlineStar />}
                        {product.rating >= 2 ? <AiFillStar /> : <AiOutlineStar />}
                        {product.rating >= 3 ? <AiFillStar /> : <AiOutlineStar />}
                        {product.rating >= 4 ? <AiFillStar /> : <AiOutlineStar />}
                        {product.rating >= 5 ? <AiFillStar /> : <AiOutlineStar />}
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
          <WriteAReview onClick={showCustomerReview}>Spune-ti parerea</WriteAReview>
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
              <button
                onClick={() => {
                  filterRating(undefined);
                }}
              >
                All
              </button>
              <button
                onClick={() => {
                  filterRating(5);
                }}
              >
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </button>
              <button
                onClick={() => {
                  filterRating(4);
                }}
              >
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </button>
              <button
                onClick={() => {
                  filterRating(3);
                }}
              >
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </button>
              <button
                onClick={() => {
                  filterRating(2);
                }}
              >
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </button>
              <button
                onClick={() => {
                  filterRating(1);
                }}
              >
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </button>
            </FilterStarsDropDown>
          ) : null}
        </FilterByRatingContainer>

        {filteredReviews.map((review) => {
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

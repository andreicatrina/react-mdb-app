import s from "../NewProducts/NewProducts.module.css";
import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

import {
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
} from "./components";

import { productList } from "./slider";

import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import productPic from "../../images/productPic.jpg";

const NewProducts = () => {
  const divReference = useRef();

  const onClickRightButton = function () {
    // divReference.current.scroll({ left: 270, behaviour: "smooth" });
    divReference.current.scrollLeft += 310;
  };

  const onClickLeftButton = function () {
    divReference.current.scrollLeft -= 310;
  };

  return (
    <>
      <ProductsSection>
        <TextContainer>
          <Title>Produse Noi</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
            accusamus porro fugit deserunt harum fuga!
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
    </>
  );
};

export default NewProducts;

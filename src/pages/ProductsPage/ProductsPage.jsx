import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import { Link } from "react-router-dom";

import {
  DownContainer,
  ImageContainer,
  ProductsPageSection,
  TextContainer,
  TextImageContainer,
  UpContainer,
  FilterContainer,
  SortByContainer,
  ByCollectionContainer,
  ProductsContainer,
  ProductCard,
  ProductDetails,
  ProductPic,
  RatingContainer,
  NamePriceContainer,
  Name,
  Price,
  AddToCart,
  PageSelectorContainer,
  PageSelectorDiv,
  Sort,
  SortOptions,
  PageSelectorButton,
  ByCollectionFilterDiv,
  SpanIconContainer,
  CheckboxLinkDiv,
} from "./components";

import braceletCover2 from "../../images/braceletCover2.jpg";
import CategoryPic3 from "../../images/CategoryPic3.jpg";
import { FiArrowDown } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import { BsCartCheckFill } from "react-icons/bs";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";

import { productList } from "../../components/NewProducts/slider";
import { getProductById } from "../../components/NewProducts/slider";
import { useParams } from "react-router-dom";

import { useState } from "react";

const ProductsPage = () => {
  const [showSorting, setShowSorting] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [collectionFilterOpen, setCollectionFilterOpen] = useState(false);
  const [selectedCollections, setSelectedCollections] = useState(["Pentru El", "Pentru Ea", "Cupluri"]); //1.

  const pageSize = 12;
  const numberOfPages = Math.ceil(productList.length / pageSize);

  function addCollection(collection) {
    const newSelectedCollection = selectedCollections.concat([collection]);
    setSelectedCollections(newSelectedCollection); //3
  }

  function removeCollection(collection) {
    const newSelectedCollections = selectedCollections.filter((selectedCollection) => {
      return selectedCollection !== collection;
    });
    setSelectedCollections(newSelectedCollections); //3
  }

  function inputEvent(event, collection) {
    if (event.target.checked === true) {
      addCollection(collection); //4 //5
      console.log(event);
      console.log(event.target.checked);
    } else {
      removeCollection(collection); //4 //5
    }
  }

  function sortingFunction() {
    if (showSorting === false) {
      setShowSorting(true);
    } else {
      setShowSorting(false);
    }
  }

  function onClickAddToCart(productId) {
    // 1. verificam daca id'ul produsului este in lista cart
    console.log({ cartProducts });
    const isInCart = cartProducts.includes(productId);
    if (isInCart) {
      setCartProducts(cartProducts.filter((pId) => pId !== productId));
    } else {
      const newProducts = cartProducts.concat([productId]);
      setCartProducts(newProducts);
    }
  }

  function openCollectionFilters() {
    if (collectionFilterOpen === false) {
      setCollectionFilterOpen(true);
    } else {
      setCollectionFilterOpen(false);
    }
  }

  function onClickLeft() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function onClickRight() {
    if (currentPage <= numberOfPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  }
  const productsFilteredByCollection = productList.filter((product) => {
    // Filtram produsul dupa colectie (colectia sa existe in lista selectedCollections)
    console.log(selectedCollections.includes(product.collection));
    return selectedCollections.includes(product.collection); //3
  });
  console.log(productsFilteredByCollection);

  const productsOfPage = productsFilteredByCollection.filter((product, idx) => {
    if ((currentPage - 1) * pageSize <= idx && currentPage * pageSize - 1 >= idx) {
      return true;
    }
    return false;
  });

  function getPageButtons() {
    const buttons = [];
    for (let i = 1; i <= numberOfPages; i++) {
      buttons.push(
        <PageSelectorButton
          isSelected={currentPage === i}
          onClick={() => {
            setCurrentPage(i);
          }}
        >
          {i}
        </PageSelectorButton>
      );
    }

    return buttons;
  }

  return (
    <>
      <Header />
      <ProductsPageSection>
        <UpContainer>
          <TextImageContainer>
            <TextContainer>
              <h2>Shop All</h2>
            </TextContainer>
            <ImageContainer>
              <img src={braceletCover2} />
            </ImageContainer>
          </TextImageContainer>
        </UpContainer>
        <DownContainer>
          <FilterContainer>
            <h4>Filtreaza Dupa:</h4>
            <SortByContainer onClick={sortingFunction}>
              <Sort>
                SORTEAZA DUPA
                {showSorting === true ? (
                  <SortOptions>
                    <a>PRET CRESCATOR</a>
                    <a>PRET DESCRESCATOR</a>
                    <a>CELE MAI NOI</a>
                    <a>CELE MAI POPULARE</a>
                  </SortOptions>
                ) : null}
              </Sort>
              <FiArrowDown />
            </SortByContainer>
            <ByCollectionContainer>
              <SpanIconContainer onClick={openCollectionFilters}>
                <span>COLECTII</span>
                <FiArrowDown />
              </SpanIconContainer>

              {collectionFilterOpen === true ? (
                <ByCollectionFilterDiv>
                  <CheckboxLinkDiv>
                    <input
                      type="checkbox"
                      defaultChecked={true}
                      onChange={(event) => {
                        inputEvent(event, "Pentru El"); //2
                      }}
                    />
                    <span>Pentru El</span>
                  </CheckboxLinkDiv>
                  <CheckboxLinkDiv>
                    <input
                      type="checkbox"
                      defaultChecked={true}
                      onChange={(event) => {
                        inputEvent(event, "Pentru Ea"); //2
                      }}
                    />
                    <span>Pentru Ea</span>
                  </CheckboxLinkDiv>
                  <CheckboxLinkDiv>
                    <input
                      type="checkbox"
                      defaultChecked={true}
                      onChange={(event) => {
                        inputEvent(event, "Cupluri"); //2
                      }}
                    />
                    <span>Cupluri</span>
                  </CheckboxLinkDiv>
                </ByCollectionFilterDiv>
              ) : null}
            </ByCollectionContainer>
          </FilterContainer>
          <ProductsContainer>
            {productsOfPage.map((product) => {
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
                        <Price>{`${product.price} RON`}</Price>
                      </NamePriceContainer>
                    </ProductDetails>
                  </Link>

                  <AddToCart
                    onClick={() => {
                      onClickAddToCart(product.id);
                    }}
                  >
                    {cartProducts.includes(product.id) ? "PRODUS ADAUGAT" : "ADAUGA IN COS"}
                    {cartProducts.includes(product.id) ? <BsCartCheckFill /> : <GiShoppingCart />}
                  </AddToCart>
                </ProductCard>
              );
            })}
          </ProductsContainer>
        </DownContainer>
        <PageSelectorContainer>
          <PageSelectorDiv>
            <BiLeftArrowAlt onClick={onClickLeft} />
            {getPageButtons()}
            <BiRightArrowAlt onClick={onClickRight} />
          </PageSelectorDiv>
        </PageSelectorContainer>
      </ProductsPageSection>
      <Footer />
    </>
  );
};

export default ProductsPage;

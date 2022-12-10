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
  SortOptionButton,
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
import { useParams, useLocation } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "../../utils/firebase";

const ProductsPage = () => {
  const [showSorting, setShowSorting] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [collectionFilterOpen, setCollectionFilterOpen] = useState(false);
  const [selectedCollections, setSelectedCollections] = useState([]); //1.
  const [sortingType, setSortingType] = useState("most-popular");
  const [products, setProducts] = useState([]);

  let location = useLocation();

  useEffect(() => {
    setProductsFromFirebase();
  }, []);

  async function setProductsFromFirebase() {
    let products = await getProducts();
    setProducts(products);
  }

  useEffect(() => {
    let search = location.search;

    console.log(search);
    let searchParams = new URLSearchParams(search);
    let collectionsSearchParams = searchParams.get("collections");
    if (!collectionsSearchParams) {
      setSelectedCollections(["pentru-el", "pentru-ea", "cupluri"]);
    } else {
      let collectionsFromQueryParams = searchParams.get("collections").split(",");
      setSelectedCollections(collectionsFromQueryParams);
      console.log(collectionsFromQueryParams);
    }
  }, []);

  const sortingOptions = [
    {
      name: "Pret crescator",
      type: "price-asc",
    },
    {
      name: "Pret descrescator",
      type: "price-desc",
    },
    {
      name: "Cele mai noi",
      type: "newest",
    },
    {
      name: "Cele mai populare",
      type: "most-popular",
    },
  ];
  const pageSize = 12;

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
  const productsFilteredByCollection = products.filter((product) => {
    // Filtram produsul dupa colectie (colectia sa existe in lista selectedCollections)
    console.log(selectedCollections.includes(product.collection));
    return selectedCollections.includes(product.collection); //3
  });

  productsFilteredByCollection.sort((product1, product2) => {
    if (sortingType === "most-popular") {
      if (product1.rating > product2.rating) {
        return -1;
      } else {
        return 0;
      }
    }

    if (sortingType === "price-asc") {
      if (product1.price < product2.price) {
        return -1;
      } else {
        return 0;
      }
    }

    if (sortingType === "price-desc") {
      if (product1.price > product2.price) {
        return -1;
      } else {
        return 0;
      }
    }

    if (sortingType === "newest") {
      if (product1.date < product2.date) {
        return -1;
      } else {
        return 0;
      }
    }
  });

  const numberOfPages = Math.ceil(productsFilteredByCollection.length / pageSize);

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
                    {sortingOptions.map((sortingOption) => {
                      return (
                        <SortOptionButton
                          selected={sortingType === sortingOption.type}
                          onClick={() => {
                            setSortingType(sortingOption.type);
                          }}
                        >
                          {sortingOption.name.toUpperCase()}
                        </SortOptionButton>
                      );
                    })}
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
                      checked={selectedCollections.includes("pentru-el")}
                      onChange={(event) => {
                        inputEvent(event, "pentru-el"); //2
                      }}
                    />
                    <span>Pentru El</span>
                  </CheckboxLinkDiv>
                  <CheckboxLinkDiv>
                    <input
                      type="checkbox"
                      checked={selectedCollections.includes("pentru-ea")}
                      onChange={(event) => {
                        inputEvent(event, "pentru-ea"); //2
                      }}
                    />
                    <span>Pentru Ea</span>
                  </CheckboxLinkDiv>
                  <CheckboxLinkDiv>
                    <input
                      type="checkbox"
                      checked={selectedCollections.includes("cupluri")}
                      onChange={(event) => {
                        inputEvent(event, "cupluri"); //2
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
                      <ProductPic src={product.images[0]} alt="" />
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

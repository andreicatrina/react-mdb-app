import s from "./Header.module.css";
import { FiHeart } from "react-icons/fi";
import { HiSearch } from "react-icons/hi";
import { RiShoppingBagLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { ReactComponent as Logo } from "../../images/logoTransparent.svg";
import { BsArrowRightShort } from "react-icons/bs";
import logo from "../../images/Transparent2.png";
import braceletCover3 from "../../images/braceletCover3.jpg";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { searchProductsByName, productList } from "../NewProducts/slider";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  let searchedProducts = search === "" ? [] : searchProductsByName(search).slice(0, 10);

  function onInputChange(event) {
    setSearch(event.target.value);
  }

  function scrollToContact() {
    window.scrollTo(0, 3000);
  }

  function menuClick() {
    if (showMenu === false) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  function showSearchBar() {
    if (showSearch === false) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  }

  useEffect(() => {
    if (showMenu === true) {
      setShowSearch(false);
    }
  }, [showMenu]);

  useEffect(() => {
    if (showSearch === true) {
      setShowMenu(false);
    }
  }, [showSearch]);

  return (
    <header>
      <section className={s.headerSection}>
        <div className={s.headerContainer}>
          <div className={s.leftContainer}>
            <div className={s.logoContainer}>
              <a href="/" className={s.logoPic}>
                <img src={logo} alt="" />
              </a>
              <h2>Magazinul de Bratari</h2>
            </div>
          </div>
          <div className={s.centerMenuDiv}>
            <div onClick={menuClick} className={s.hamburgerMenu}>
              {showMenu === true ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
            <div className={s.headerMenu}>
              <div className={s.hoverMenuParent}>
                <Link to="/products">SHOP</Link>
                <div className={s.menuHoverContainerParent}>
                  <div className={s.menuHoverContainer}>
                    <div className={s.menuHoverLinks}>
                      <a className={s.links} href="">
                        Cele mai noi produse
                      </a>
                      <a className={s.links} href="">
                        Bestsellers
                      </a>
                      <Link className={s.links} to="/products">
                        Colectii
                      </Link>
                      <Link className={s.links} to="/products?collections=pentru-ea">
                        Pentru Ea
                      </Link>
                      <Link className={s.links} to="/products?collections=pentru-el">
                        Pentru El
                      </Link>
                      <Link className={s.links} to="/products?collections=cupluri">
                        Cupluri
                      </Link>
                    </div>
                    <div className={s.menuHoverProducts}>
                      <div className={s.productContainer}>
                        <img src={braceletCover3} alt="" />
                        <p>Nume Produs</p>
                      </div>
                      <div className={s.productContainer}>
                        <img src={braceletCover3} alt="" />
                        <p>Nume Produs</p>
                      </div>
                      <div className={s.productContainer}>
                        <img src={braceletCover3} alt="" />
                        <p>Nume Produs</p>
                      </div>
                      <div className={s.productContainer}>
                        <img src={braceletCover3} alt="" />
                        <p>Nume Produs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/about">ABOUT US</Link>
              <a onClick={scrollToContact}>CONTACT</a>
            </div>
          </div>

          <div className={s.rightContainer}>
            <a className={s.addFavorites} href="#">
              <FiHeart />
            </a>
            <a onClick={showSearchBar} className={s.searchIcon} href="#">
              <HiSearch />
            </a>
            <a className={s.shopBasket} href="#">
              <RiShoppingBagLine />
            </a>
            <Link className={s.accountIcon} to="/account">
              <BsPersonFill />
            </Link>
          </div>
        </div>

        {showMenu === true ? (
          <div className={s.mobileMenu}>
            <Link to="/products" className={s.shopMobile}>
              SHOP
              <BsArrowRightShort />
            </Link>
            <Link to="/about">ABOUT US</Link>
            <a onClick={scrollToContact}>CONTACT</a>
          </div>
        ) : null}
      </section>
      {showSearch === true ? (
        <div className={s.searchContainer}>
          <input
            className={s.searchInput}
            type="search"
            placeholder="Ce anume cauti?"
            value={search}
            onChange={onInputChange}
          />
          <div className={s.searchResultsContainer}>
            {searchedProducts.map((product) => {
              return (
                <Link to={`/products/${product.id}`}>
                  <img className={s.searchProductImage} src={product.image} />
                  {product.name}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;

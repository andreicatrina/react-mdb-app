import s from "./Header.module.css";
import { FiHeart } from "react-icons/fi";
import { HiSearch } from "react-icons/hi";
import { RiShoppingBagLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { ReactComponent as Logo } from "../../images/logoTransparent.svg";
import { BsArrowRightShort } from "react-icons/bs";
import logo from "../../images/Transparent2.png";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

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
              <a href="#">SHOP</a>
              <a href="#">ABOUT US</a>
              <a href="#">CONTACT</a>
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
          </div>
        </div>

        {showMenu === true ? (
          <div className={s.mobileMenu}>
            <a className={s.shopMobile} href="#">
              SHOP
              <BsArrowRightShort />
            </a>
            <a href="#">ABOUT US</a>
            <a href="#">CONTACT</a>
          </div>
        ) : null}
      </section>
      {showSearch === true ? (
        <div className={s.searchContainer}>
          <input
            className={s.searchInput}
            type="search"
            placeholder="Ce anume cauti?"
          />
        </div>
      ) : null}
    </header>
  );
};

export default Header;

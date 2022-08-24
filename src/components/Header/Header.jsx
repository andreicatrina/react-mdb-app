import s from "./Header.module.css";
import { FiHeart } from "react-icons/fi";
import { HiSearch } from "react-icons/hi";
import { RiShoppingBagLine } from "react-icons/ri";

import React from "react";

const Header = () => {
  return (
    <header>
      <section className={s.headerSection}>
        <div className={s.headerContainer}>
          <div className={s.leftContainer}>
            <div className={s.logoContainer}>
              <div className={s.logoPic}>LOGO</div>
            </div>
          </div>
          <div className={s.headerMenu}>
            <a href="#">SHOP</a>
            <a href="#">ABOUT US</a>
            <a href="#">CONTACT</a>
          </div>
          <div className={s.rightContainer}>
            <a href="#">
              <FiHeart />
            </a>
            <a href="#">
              <HiSearch />
            </a>
            <a href="#">
              <RiShoppingBagLine />
            </a>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;

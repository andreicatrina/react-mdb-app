import React, { useRef } from "react";

import { Swiper, SwiperSlide, SwiperSlides } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import s from "../Categories/Categories.module.css";

import CategoryPic1 from "../../images/categoryPic1.jpg";
import CategoryPic2 from "../../images/CategoryPic2.jpg";
import CategoryPic3 from "../../images/CategoryPic3.jpg";
import CategoryPic4 from "../../images/CategoryPic4.jpg";

import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { categoryList } from "./slider";

import {
  CategorySection,
  TextContainer,
  Title,
  CategoryContainer,
  CategoryCard,
  CategoryPic,
  CategoryTitle,
  CardContainer,
  ExploreContainer,
  Explore,
  CategoryDiv,
  SliderLeftButton,
  SliderRightButton,
  SwiperNavPrev,
  SwiperNavNext,
} from "./components";

const Categories = () => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  return (
    <CategorySection>
      <CategoryContainer>
        <TextContainer>
          <Title>Lorem ipsum dolor sit amet.</Title>
        </TextContainer>

        <CardContainer>
          <Swiper
            className={s.mySwiper}
            slidesPerView={4}
            spaceBetween={30}
            slidesPerGroup={2}
            loop={true}
            loopFillGroupWithBlank={false}
            // navigation={true}
            navigation={{
              prevEl: swiperNavPrevRef.current,
              nextEl: swiperNavNextRef.current,
            }}
            modules={[Navigation]}
            breakpoints={{
              // when window width is >= 640px
              1200: {
                // width: 800,
                slidesPerView: 4,
              },
              // when window width is >= 768px
              900: {
                // width: 600,
                slidesPerView: 3,
                spaceBetween: 15,
              },

              600: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = swiperNavPrevRef.current;
              swiper.params.navigation.nextEl = swiperNavNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            <SwiperSlide className={s.categoryDiv}>
              <CategoryPic src={CategoryPic1} alt="" />
              <CategoryTitle>Produs1</CategoryTitle>
            </SwiperSlide>
            <SwiperSlide className={s.categoryDiv}>
              <CategoryPic src={CategoryPic2} alt="" />
              <CategoryTitle>Produs2</CategoryTitle>
            </SwiperSlide>
            <SwiperSlide className={s.categoryDiv}>
              <CategoryPic src={CategoryPic3} alt="" />
              <CategoryTitle>Produs3</CategoryTitle>
            </SwiperSlide>
            <SwiperSlide className={s.categoryDiv}>
              <CategoryPic src={CategoryPic4} alt="" />
              <CategoryTitle>Produs4</CategoryTitle>
            </SwiperSlide>
            <SwiperSlide className={s.categoryDiv}>
              <CategoryPic src={CategoryPic1} alt="" />
              <CategoryTitle>Produs1</CategoryTitle>
            </SwiperSlide>
            <SwiperSlide className={s.categoryDiv}>
              <CategoryPic src={CategoryPic2} alt="" />
              <CategoryTitle>Produs2</CategoryTitle>
            </SwiperSlide>
            <SwiperSlide className={s.categoryDiv}>
              <CategoryPic src={CategoryPic3} alt="" />
              <CategoryTitle>Produs3</CategoryTitle>
            </SwiperSlide>
            <SwiperSlide className={s.categoryDiv}>
              <CategoryPic src={CategoryPic4} alt="" />
              <CategoryTitle>Produs4</CategoryTitle>
            </SwiperSlide>

            <SwiperNavPrev ref={swiperNavPrevRef}>
              <BsArrowLeft />
            </SwiperNavPrev>
            <SwiperNavNext ref={swiperNavNextRef}>
              <BsArrowRight />
            </SwiperNavNext>
          </Swiper>
        </CardContainer>
        <ExploreContainer>
          <Explore href="#">LET'S EXPLORE</Explore>
        </ExploreContainer>

        {/* <SliderLeftButton>
          <BsArrowLeft />
        </SliderLeftButton>
        <SliderRightButton>
          <BsArrowRight />
        </SliderRightButton> */}
      </CategoryContainer>
    </CategorySection>
  );
};

export default Categories;

////////////////////////////////////////

/*import React, { useRef } from "react";
import CategoryPic1 from "../../images/categoryPic1.jpg";
import CategoryPic2 from "../../images/CategoryPic2.jpg";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { categoryList } from "./slider";

import {
  CategorySection,
  TextContainer,
  Title,
  CategoryContainer,
  CategoryCard,
  CategoryPic,
  CategoryTitle,
  CardContainer,
  ExploreContainer,
  Explore,
  CategoryDiv,
  SliderLeftButton,
  SliderRightButton,
} from "./components";

const Categories = () => {
  const slideReference = useRef();

  const leftButtonClick = function () {
    slideReference.current.scrollLeft -= 310;
  };

  const rightButtonClick = function () {
    slideReference.current.scrollLeft += 310;
  };

  return (
    <CategorySection>
      <CategoryContainer>
        <TextContainer>
          <Title>Lorem ipsum dolor sit amet.</Title>
        </TextContainer>

        <CardContainer ref={slideReference}>
          {categoryList.map((category) => {
            return (
              <CategoryCard>
                <CategoryDiv>
                  <CategoryPic src={category.image} alt="" />
                  <CategoryTitle>{category.name}</CategoryTitle>
                </CategoryDiv>
              </CategoryCard>
            );
          })}
        </CardContainer>
        <ExploreContainer>
          <Explore href="#">LET'S EXPLORE</Explore>
        </ExploreContainer>

        <SliderLeftButton onClick={leftButtonClick}>
          <BsArrowLeft />
        </SliderLeftButton>
        <SliderRightButton onClick={rightButtonClick}>
          <BsArrowRight />
        </SliderRightButton>
      </CategoryContainer>
    </CategorySection>
  );
};

export default Categories;
 */

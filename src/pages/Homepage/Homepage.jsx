import React from "react";

import Header from "../../components/Header/Header";
import LandingSection from "../../components/LandingSection/LandingSection";
import NewProducts from "../../components/NewProducts/NewProducts";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import AllCollections from "../../components/AllCollections/AllCollections";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Header />
      <LandingSection />
      <NewProducts />
      <Banner />
      {/* <Categories /> */}
      <AllCollections />
      <Footer />
    </div>
  );
};

export default Homepage;

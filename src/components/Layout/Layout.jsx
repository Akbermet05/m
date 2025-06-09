import React from "react";
import Header from "./Header/Header";
import Footer from "./footer/Footer";
import Welcome from "../../page/Welcome";
import scss from "../Layout/Layout.module.scss";
import TrendingPage from "../../page/TrendingPage";
import PersonPage from "../../page/PersonPage";
import CategoryPage from "../../page/CategoryPage";
import DiscoverPage from "../../page/DiscoverPage";
const Layout = () => {
  return (
    <div className={scss.layout}>
      <Header />
      <main>
        <Welcome />
        <TrendingPage />
        <PersonPage />
        <CategoryPage />
        <DiscoverPage />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

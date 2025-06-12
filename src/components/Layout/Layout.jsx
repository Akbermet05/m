import React from "react";
import Header from "./Header/Header";
import Footer from "./footer/Footer";
import Welcome from "../../page/Welcome";
import scss from "../Layout/Layout.module.scss";
import TrendingPage from "../../page/TrendingPage";
import PersonPage from "../../page/PersonPage";
import CategoryPage from "../../page/CategoryPage";
import DiscoverPage from "../../page/DiscoverPage";
import MagicPage from "../../page/MagicPage";
import WorksPage from "../../page/WorksPage";
import JoinPage from "../../page/JoinPage";
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
        <MagicPage />
        <WorksPage />
        <JoinPage />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

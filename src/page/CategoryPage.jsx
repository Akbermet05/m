import React from "react";
import scss from "./CategoryPage.module.scss";
import logo from "../assets/11.svg";
import logo1 from "../assets/12.svg";
const CategoryPage = () => {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.category_title}>
          <h1>Browse Categories</h1>
        </div>
        <div className={scss.box}>
          <div className={scss.category}>
            <img className={scss.img} src={logo} alt="" />
            <img className={scss.image} src={logo1} alt="" />
            <h2>Art</h2>
          </div>
          <div className={scss.category}>
            <img className={scss.img} src={logo} alt="" />
            <img className={scss.image} src={logo1} alt="" />
            <h2>Art</h2>
          </div>
          <div className={scss.category}>
            <img className={scss.img} src={logo} alt="" />
            <img className={scss.image} src={logo1} alt="" />
            <h2>Art</h2>
          </div>
          <div className={scss.category}>
            <img className={scss.img} src={logo} alt="" />
            <img className={scss.image} src={logo1} alt="" />
            <h2>Art</h2>
          </div>
          <div className={scss.category}>
            <img className={scss.img} src={logo} alt="" />
            <img className={scss.image} src={logo1} alt="" />
            <h2>Art</h2>
          </div>
          <div className={scss.category}>
            <img className={scss.img} src={logo} alt="" />
            <img className={scss.image} src={logo1} alt="" />
            <h2>Art</h2>
          </div>
          <div className={scss.category}>
            <img className={scss.img} src={logo} alt="" />
            <img className={scss.image} src={logo1} alt="" />
            <h2>Art</h2>
          </div>
          <div className={scss.category}>
            <img className={scss.img} src={logo} alt="" />
            <img className={scss.image} src={logo1} alt="" />
            <h2>Art</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

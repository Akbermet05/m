import React from "react";
import scss from "./TrendingPage.module.scss";
import logo from "../assets/4.svg";
import logo1 from "../assets/5.svg";
import logo2 from "../assets/6.svg";
import logo3 from "../assets/7.svg";
import logo4 from "../assets/9.svg";
const TrendingPage = () => {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.trending_title}>
          <h1>Trending Collection</h1>
          <p>Checkout our weekly updated trending collection.</p>
        </div>
        <div className={scss.box}>
          <div className={scss.animals}>
            <img className={scss.img} src={logo} alt="" />
            <img className={scss.image} src={logo1} alt="" />
            <h3>DSGN Animals</h3>
            <div className={scss.fox}>
              <img src={logo2} alt="" />
              <p>MrFox</p>
            </div>
          </div>
          <div className={scss.animals}>
            <img className={scss.img} src={logo3} alt="" />
            <img className={scss.image} src={logo1} alt="" />
            <h3>DSGN Animals</h3>
            <div className={scss.fox}>
              <img src={logo2} alt="" />
              <p>MrFox</p>
            </div>
          </div>
          <div className={scss.animals}>
            <img className={scss.img} src={logo4} alt="" />
            <img className={scss.image} src={logo1} alt="" />
            <h3>DSGN Animals</h3>
            <div className={scss.fox}>
              <img src={logo2} alt="" />
              <p>MrFox</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingPage;

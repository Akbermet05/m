import React from "react";
import scss from "./CategoryPage.module.scss";
import logo from "../assets/11.svg";
import logo1 from "../assets/12.svg";
import logo3 from "../assets/monkey.svg";
import logo4 from "../assets/monkey1.svg";
import logo5 from "../assets/music.svg";
import logo6 from "../assets/music1.svg";
import logo7 from "../assets/person.svg";
import logo8 from "../assets/person1.svg";
import logo9 from "../assets/boy.svg";
import logo10 from "../assets/boy1.svg";
import logo11 from "../assets/key.svg";
import logo12 from "../assets/key1.svg";
import logo13 from "../assets/ball.svg";
import logo14 from "../assets/ball1.svg";
import logo15 from "../assets/kocmos.svg";
import logo16 from "../assets/kocmos1.svg";

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
            <img className={scss.img} src={logo3} alt="" />
            <img className={scss.image} src={logo4} alt="" />
            <h2>Collectibles</h2>
          </div>
          <div className={scss.category}>
            <img className={scss.img} src={logo5} alt="" />
            <img className={scss.image} src={logo6} alt="" />
            <h2>Music</h2>
          </div>
          <div className={scss.category}>
            <img className={scss.img} src={logo7} alt="" />
            <img className={scss.image} src={logo8} alt="" />
            <h2>Photography</h2>
          </div>
          <div className={scss.category}>
            <img className={scss.img} src={logo9} alt="" />
            <img className={scss.image} src={logo10} alt="" />
            <h2>Video</h2>
          </div>
          <div className={scss.category}>
            <img className={scss.img} src={logo11} alt="" />
            <img className={scss.image} src={logo12} alt="" />
            <h2>Utility</h2>
          </div>
          <div className={scss.category}>
            <img className={scss.img} src={logo13} alt="" />
            <img className={scss.image} src={logo14} alt="" />
            <h2>Sport</h2>
          </div>
          <div className={scss.category}>
            <img className={scss.img} src={logo15} alt="" />
            <img className={scss.image} src={logo16} alt="" />
            <h2>Virtual Worlds</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

import React from "react";
import logo from "../assets/15.png";
import scss from "./MagicPage.module.scss";
import logo1 from "../assets/16.svg";
import logo2 from "../assets/17.svg";
const MagicPage = () => {
  return (
    <div className={scss.container}>
      <img src={logo} alt="" />
      <div className="container">
        <div className={scss.magicbox}>
          <div className={scss.block}>
            <img className={scss.image} src={logo1} alt="" />
            <h2>Magic Mashrooms</h2>
            <button>See NFT</button>
          </div>
          <img src={logo2} alt="" />
          <span>See NFT</span>
        </div>
      </div>
    </div>
  );
};

export default MagicPage;

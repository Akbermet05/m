import React from "react";
import scss from "./Welcome.module.scss";
import logo from "../assets/2.svg";
import logo2 from "../assets/3.svg";
const Welcome = () => {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainWelcome}>
          <div className={scss.welcom}>
            <h1>Discover digital art & Collect NFTs</h1>
            <p>
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>
            <button>Get Started</button>
            <img src={logo2} alt="" />
          </div>
          <img className={scss.mainImage} src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;

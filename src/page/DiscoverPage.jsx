import React from "react";
import scss from "./DiscoverPage.module.scss";
import logo from "../assets/13.svg";
import logo1 from "../assets/20.svg";
import logo2 from '../assets/21.svg'
const DiscoverPage = () => {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.box}>
          <div className={scss.title}>
            <h1>Discover More NFTs</h1>
            <p>Explore new trending NFTs</p>
          </div>
          <button>See all</button>
        </div>
        <div className={scss.block}>
          <img src={logo1} alt="" />
          <img src={logo} alt="" />
          <img src={logo2} alt="" />
          <button className={scss.btn}>See all</button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;

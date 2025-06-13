import React from "react";
import scss from "./Footer.module.scss";
import logo from "../../../assets/1.svg";
import logo1 from "../../../assets/tele.svg";
const Footer = () => {
  return (
    <footer>
      <div className={scss.container}>
        <div className="container">
          <div className={scss.footer}>
            <div className={scss.block}>
              <img src={logo} alt="" />
              <p>NFT marketplace UI created with Anima for Figma.</p>
              <p>Join our community</p>
              <img src={logo1} alt="" />
            </div>
            <div className={scss.block}>
              <h1>Explore</h1>
              <p>Marketplace</p>
              <p>Rankings</p>
              <p>Connect a wallet</p>
            </div>
            <div className={scss.block}>
              <h1>Join our weekly digest</h1>
              <p>Get exclusive promotions & updates straight to your inbox.</p>
              <input type="text" placeholder="Enter your email here" />
              <button>Subscribe</button>
            </div>
          </div>
          <p style={{ paddingTop: "20px", paddingLeft:'20px' }}>
            Ⓒ NFT Market. Use this template freely.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

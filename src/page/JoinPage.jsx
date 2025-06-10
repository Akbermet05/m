import React from "react";
import scss from "./JoinPage.module.scss";
import logo from "../assets/join.svg";
const JoinPage = () => {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.join}>
          <img src={logo} alt="" />
          <div className={scss.box}>
            <h1>Join our weekly digest</h1>
            <p>Get exclusive promotions & updates straight to your inbox.</p>
            <input type="text" placeholder="Enter your email here" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;

import React from "react";
import logo from "../assets/18.svg";
import scss from "./WorksPage.module.scss";

const WorksPage = () => {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.title}>
          <h1>How it works</h1>
          <p>Find out how to get started</p>
        </div>
        <div className={scss.works}>
          <img src={logo} alt="" />
          <img src={logo} alt="" />
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WorksPage;

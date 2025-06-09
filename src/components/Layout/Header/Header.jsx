import React from "react";
import scss from "./Header.module.scss";
import logo from "../../../assets/1.svg";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <header className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <img src={logo} alt="" />
          <nav>
            <a href="">Marketplace</a>
            <a href="">Rankings </a>
            <a href="">Connect a wallet</a>
            <button>Sign Up</button>
          </nav>
          <span className={scss.burger_menu}>
            <IoMenu />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;

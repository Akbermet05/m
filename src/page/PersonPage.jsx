import React from "react";
import scss from "./PersonPage.module.scss";
import logo from "../assets/10.svg";
const PersonPage = () => {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.tittle}>
          <div className={scss.title}>
            <h1>Top creators</h1>
            <p>Checkout Top Rated Creators on the NFT Marketplace</p>
          </div>
          <button>View Rankings</button>
        </div>
        <div className={scss.box}>
          <div className={scss.person}>
            <h3>1</h3>
            <img src={logo} alt="" />
            <h2>Keepitreal</h2>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
          </div>
          <div className={scss.person}>
            <h3>2</h3>

            <img src={logo} alt="" />
            <h2>Keepitreal</h2>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
          </div>
          <div className={scss.person}>
            <h3>3</h3>

            <img src={logo} alt="" />
            <h2>Keepitreal</h2>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
          </div>
          <div className={scss.person}>
            <h3>4</h3>

            <img src={logo} alt="" />
            <h2>Keepitreal</h2>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
          </div>
          <div className={scss.person}>
            <h3>5</h3>

            <img src={logo} alt="" />
            <h2>Keepitreal</h2>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
          </div>
          <div className={scss.person}>
            <h3>6</h3>

            <img src={logo} alt="" />
            <h2>Keepitreal</h2>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
            <h4>View Rankings</h4>
          </div>
          <div className={scss.person}>
            <h3>7</h3>

            <img src={logo} alt="" />
            <h2>Keepitreal</h2>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
          </div>
          <div className={scss.person}>
            <h3>8</h3>

            <img src={logo} alt="" />
            <h2>Keepitreal</h2>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
          </div>
          <div className={scss.person}>
            <h3>9</h3>

            <img src={logo} alt="" />
            <h2>Keepitreal</h2>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
          </div>
          <div className={scss.person}>
            <h3>10</h3>

            <img src={logo} alt="" />
            <h2>Keepitreal</h2>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
          </div>
          <div className={scss.person}>
            <h3>11</h3>

            <img src={logo} alt="" />
            <h2>Keepitreal</h2>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
          </div>
          <div className={scss.person}>
            <h3>12</h3>

            <img src={logo} alt="" />
            <h2>Keepitreal</h2>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonPage;

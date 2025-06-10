import React from "react";
import scss from "./PersonPage.module.scss";
import logo from "../assets/10.svg";
import img1 from "../assets/a.svg";
import img2 from "../assets/b.svg";
import img3 from "../assets/c.svg";
import img4 from "../assets/d.svg";
import img5 from "../assets/f.svg";
import img6 from "../assets/j.svg";
import img7 from "../assets/y.svg";
import img8 from "../assets/m.svg";
import img9 from "../assets/n.svg";
import img10 from "../assets/l.svg";
import img11 from "../assets/w.svg";
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

            <img src={img11} alt="" />
            <h2>DigiLab </h2>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
          </div>
          <div className={scss.person}>
            <h3>3</h3>
            {/* <div className=""> */}
            <img src={img1} alt="" />
            {/* </div> */}
            <h2>GravityOne</h2>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
          </div>
          <div className={scss.person}>
            <h3>4</h3>

            <img src={img2} alt="" />
            <h2>Juanie</h2>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
          </div>
          <div className={scss.person}>
            <h3>5</h3>

            <img src={img3} alt="" />
            <h2>BlueWhale</h2>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
          </div>
          <div className={scss.person}>
            <h3>6</h3>

            <img src={img4} alt="" />
            <h2>mr fox</h2>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
            <h4>View Rankings</h4>
          </div>
          <div className={scss.person}>
            <h3>7</h3>

            <img src={img5} alt="" />
            <h2>Shroomie</h2>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
          </div>
          <div className={scss.person}>
            <h3>8</h3>

            <img src={img6} alt="" />
            <h2>robotica </h2>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
          </div>
          <div className={scss.person}>
            <h3>9</h3>

            <img src={img7} alt="" />
            <h2>RustyRobot</h2>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
          </div>
          <div className={scss.person}>
            <h3>10</h3>

            <img src={img8} alt="" />
            <h2>animakid</h2>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
          </div>
          <div className={scss.person}>
            <h3>11</h3>

            <img src={img9} alt="" />
            <h2>Dotgu</h2>
            <p>
              Total Sales: <span>34.53 ETH</span>
            </p>
          </div>
          <div className={scss.person}>
            <h3>12</h3>
            <img src={img10} alt="" />
            <h2>Ghiblier</h2>
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

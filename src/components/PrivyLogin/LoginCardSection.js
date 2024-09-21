import React from "react";
import Anon from "../../assets/images/asset.png";
import anam from "../../assets/images/asset1.png";
import anon from "../../assets/images/asset2.png";
import nft1 from '../../assets/images/yb.png'
import nft2 from '../../assets/images/by.png'
import banner1 from "../../assets/images/banner_1.png"
import banner2 from "../../assets/images/banner_2.png"
import banner3 from "../../assets/images/banner_3.png"
import banner4 from "../../assets/images/banner_4.png"

import './LoginCardSection.css';

const LoginCardSection = () => {
  return (
    <div className="card-container">
      <div className="card-item">
        <img className="card-image" src={banner1} alt="Image 1" />
      </div>
      <div className="card-item">
        <img className="card-image" src={banner2} alt="Image 2" />
      </div>
      <div className="card-item">
        <img className="card-image" src={banner3} alt="Image 3" />
      </div>
      <div className="card-item">
      <img className="card-image" src={banner4} alt="Image 3" />
    </div>
    </div>
  );
};

export default LoginCardSection;

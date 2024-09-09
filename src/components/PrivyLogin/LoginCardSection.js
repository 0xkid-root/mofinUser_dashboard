import React from "react";
import Anon from "../../assets/images/asset.png";
import anam from "../../assets/images/asset1.png";
import anon from "../../assets/images/asset2.png";
import nft1 from '../../assets/images/NFTS1.png'
import nft2 from '../../assets/images/NFTS2.png'
import nft3 from '../../assets/images/NFT3.png';
import './LoginCardSection.css';

const LoginCardSection = () => {
  return (
    <div className="card-container">
      <div className="card-item">
        <img className="card-image" src={nft1} alt="Image 1" />
      </div>
      <div className="card-item">
        <img className="card-image" src={nft2} alt="Image 2" />
      </div>
      <div className="card-item">
        <img className="card-image" src={nft3} alt="Image 3" />
      </div>
      <div className="card-item">
      <img className="card-image" src={nft2} alt="Image 3" />
    </div>
    </div>
  );
};

export default LoginCardSection;

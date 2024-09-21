import React, { useState } from "react";
import "./MarketSection.css";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsIcon from "@mui/icons-material/Settings";
import marketImage from "../../../assets/images/marketNFT1.png";
import marketImage1 from "../../../assets/images/marketNFT2.png";
import marketImage2 from "../../../assets/images/marketNFT3.png";
import marketImage3 from "../../../assets/images/marketNFT4.png";
import marketImage4 from "../../../assets/images/marketNFT5.png";
import marketImage5 from "../../../assets/images/marketNFT6.png";
import bitcoin from "../../../assets/images/binance.svg";
import binance from "../../../assets/images/bitcoin.svg";
import matic from "../../../assets/images/matic.svg";
import solana from "../../../assets/images/solona.png";
import uniswap from "../../../assets/images/uniswap.svg";
import jupiter from "../../../assets/images/jupiter.svg";
import ethereum from "../../../assets/images/ethereum.png";
import verfiedImage from "../../../assets/images/verifiedAccount.svg";
import sofinProfileImage from "../../../assets/images/sofinNFt.svg";
import marketPro from "../../../assets/images/profileSection.svg";
import FilterImage from "../../../assets/images/filterSetting.png";
import performingImage from "../../../assets/images/performeIma.svg";
import TradersPerformance from "./TradersPerformance";
import { Link ,useNavigate} from "react-router-dom";

const folioData = [
  {
    name: "Themanager",
    roi: "+25%",
    clones: "10/100",
    aum: "$50K",
    image: marketImage,
    image2: sofinProfileImage,
    coins: [bitcoin, binance, matic, ethereum],
  },
  {
    name: "Sofinal",
    roi: "+15%",
    clones: "9/100",
    aum: "$10K",
    image: marketImage1,
    image2: marketPro,
    coins: [bitcoin, solana, matic, uniswap],
  },
  {
    name: "Sofinal",
    roi: "-5%",
    clones: "5/100",
    aum: "$5K",
    image: marketImage2,
    image2: sofinProfileImage,
    coins: [jupiter, uniswap, solana, ethereum],
  },
  {
    name: "themanager",
    roi: "-5%",
    clones: "5/100",
    aum: "$5K",
    image: marketImage3,
    image2: marketPro,
    coins: [jupiter, uniswap, solana, matic],
  },
  {
    name: "Sofinal",
    roi: "+15%",
    clones: "9/100",
    aum: "$10K",
    image: marketImage4,
    image2: sofinProfileImage,
    coins: [bitcoin, solana, matic, ethereum],
  },
  {
    name: "themanager",
    roi: "+15%",
    clones: "9/100",
    aum: "$10K",
    image: marketImage5,
    image2: marketPro,
    coins: [bitcoin, solana, matic, jupiter],
  },
];

const MarketSection = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("SPOT");

  const handleFunction =()=>{
    // navigate('/marketchild')
  }

  return (
    <div className="main-container">
      <div className="market-header">
        <div className="market-header-left">
          {/**          <GridViewIcon style={{ marginRight: "10px" }} />
           */}

          <img src={performingImage} alt="" style={{marginRight:"10px"}} />
          <h2>List of Top Performing Folios</h2>
        </div>
        <div className="market-header-right">
        <div className="market-tabs">
          <span
            className={`market-tab ${activeTab === "SPOT" ? "active" : ""}`}
            onClick={() => setActiveTab("SPOT")}
          >
            SPOT
          </span>
          <span
            className={`market-tab ${activeTab === "FUTURES" ? "active" : ""}`}
            onClick={() => setActiveTab("FUTURES")}
          >
            FUTURES
          </span>
          <span
            className={`market-tab ${activeTab === "INDEX" ? "active" : ""}`}
            onClick={() => setActiveTab("INDEX")}
          >
            INDEX
          </span>
        </div>
        <img src={FilterImage} alt="filter image" className="filter-image" />
      </div>
      
      </div>

      <div className="mainMarketContent">
        <div className="folio-container">
          {folioData.map((folio, index) => (

            <div key={index} className="folio-card" onClick={handleFunction}>
              <div className="folio-image">
                <img src={folio.image} alt={folio.name} />
              </div>

              <div className="folio-info">
                <div className="folioManagerName">
                  <div className="folioManagerName-left">
                    <img src={folio.image2} alt="Profile Image" />
                    <p>{folio.name}</p>
                    <img
                      src={verfiedImage}
                      alt="Verified Icon"
                      className="yellowTick"
                    />
                  </div>

                  <div className="folioManagerName-right">
                    <div className="folio-coins">
                      {folio.coins.map((coin, i) => (
                        <img
                          key={i}
                          src={coin}
                          alt="coin icon"
                          className="coin-icon"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="folio-stats">
                  <div className="stat-item">
                    <p className="stat-label">Total ROI</p>
                    <p className="stat-value">{folio.roi}</p>
                  </div>
                  <div className="stat-item">
                    <p className="stat-label"># Clones</p>
                    <p className="stat-value">{folio.clones}</p>
                  </div>
                  <div className="stat-item">
                    <p className="stat-label">AUM</p>
                    <p className="stat-value">{folio.aum}</p>
                  </div>
                </div>
              </div>
            </div>


          ))}
        </div>
      </div>
      <TradersPerformance />
    </div>
  );
};

export default MarketSection;

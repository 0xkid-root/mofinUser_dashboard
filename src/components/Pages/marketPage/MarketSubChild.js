import React from "react";
import "./MarektSubChild.css";
import image1 from "../../../assets/images/profileImage.png";
import marketPro from "../../../assets/images/marketProfile.png";
import bitcoin from "../../../assets/images/bitcoin.png";
import shiba from "../../../assets/images/shiba.png";
import ethereum from "../../../assets/images/ethereum.png";
import solana from "../../../assets/images/solona.png";
import tether from "../../../assets/images/tether.png";

import FileCopyIcon from '@mui/icons-material/FileCopy';

const MarketSubChild = () => {
  return (
    <div className="main-container">
      <div className="main-content">
        <div className="leftImageSection">
          <img className="assetImage" src={image1} alt="assets images" />
        </div>

        <div className="rightSideSection">
          <div className="headerSection">

            <div className="rightSideAction">
              <h3 className="rightSideTitle">
                BNB, ETH & SOL smart money fund...
              </h3>

              <div className="buttonStyle">
              <button className="watchlistButton">⭐ Watchlist</button>
              <button className="cloneButton"><FileCopyIcon/> Clone it</button>
              </div>

            </div>

            <div className="rightSideManager">
              <img className="managerImage" src={marketPro} alt="manager" />
              <div className="managerInfo">
                <div className="managerName">themanager</div>
                <div className="managerDescription">
                  This is test data describing what funds are being managed by
                  the trader and how risk is managed.
                </div>
              </div>
            </div>
            
            
            <hr style={{color:"#595757",height:"2px", border:"2px solid #595757"}}/>
          </div>

          <div className="fundallocation ">


            <div className="assetColumn">
              <div className="findlist">
                <div className="fundimg">
                  <div className="imge1">
                    <img src={bitcoin} alt="bitcoin" />
                  </div>
                  <div className="name">Bitcoin</div>
                  <div className="amount ms-auto">$2,000</div>
                </div>

                <div className="progressbar">
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                  <span>71,68%</span>
                </div>
              </div>

              <div className="findlist">
                <div className="fundimg">
                  <div className="imge1">
                    <img src={ethereum} alt="ethereum" />
                  </div>
                  <div className="name">Ethereum</div>
                  <div className="amount ms-auto">$1,000</div>
                </div>
                <div className="progressbar">
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                  <span>71,68%</span>
                </div>
              </div>

              <div className="findlist">
                <div className="fundimg">
                  <div className="imge1">
                    <img src={shiba} alt="shiba" />
                  </div>
                  <div className="name">Shiba</div>
                  <div className="amount ms-auto">$500</div>
                </div>
                <div className="progressbar">
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                  <span>71,68%</span>
                </div>
              </div>
            </div>


            <div className="hr-container">
              <hr className="containerDivider" />
            </div>

            <div className="assetColumn">
              <div className="findlist">
                <div className="fundimg">
                  <div className="imge1">
                    <img src={solana} alt="solana" />
                  </div>
                  <div className="name">Solana</div>
                  <div className="amount ms-auto">$500</div>
                </div>
                <div className="progressbar">
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                  <span>71,68%</span>
                </div>
              </div>

              <div className="findlist">
                <div className="fundimg">
                  <div className="imge1">
                    <img src={tether} alt="tether" />
                  </div>
                  <div className="name">Tether</div>
                  <div className="amount ms-auto">$500</div>
                </div>
                <div className="progressbar">
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <span>71,68%</span>
                </div>
              </div>

              <div className="findlist">
                <div className="fundimg">
                  <div className="imge1">🟠</div>
                  <div className="name">other</div>
                  <div className="amount ms-auto">$1000</div>
                </div>
                <div className="progressbar">
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <span>71,68%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSubChild;

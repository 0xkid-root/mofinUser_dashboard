import React from "react";
import "./MarektSubChild.css";
import image1 from "../../../assets/images/profileImage.png";
import marketPro from "../../../assets/images/profileSection.svg";
import bitcoin from "../../../assets/images/bitcoin.png";
import shiba from "../../../assets/images/shiba.png";
import ethereum from "../../../assets/images/ethereum.png";
import solana from "../../../assets/images/solona.png";
import tether from "../../../assets/images/tether.png";
import verfiedImage from "../../../assets/images/verifiedAccount.svg";
import iconStar from "../../../assets/images/iconsStar.svg";
import IconCopy from "../../../assets/images/iconsCopy.svg";

import OverviewSection from "./OverviewSection";

const MarketSubChild = () => {
  return (
    <div className="main-container">
      <div className="main-content mb-3">

        <div className="leftImageSection">
          <img className="assetImage" src={image1} alt="assets images" />
        </div>

        <div className="rightSideSection">

          <div className="headerSection">

            <div className="rightSideAction">

              <div >
                <p className="rightSideTitle">
                  BNB, ETH & SOL smart money fund...
                </p>
              </div>

              <div className="buttonStyle">
                <button className="watchlistButton">
                  <img src={iconStar} alt="iconstar" /> Watchlist
                </button>

                <button className="cloneButton">
                  <img src={IconCopy} alt="iconcopy" /> Clone it
                </button>
              </div>

            </div>

            <div className="rightSideManager">
              <img className="managerImage" src={marketPro} alt="manager" />

              <div className="managerInfo">
                <div className="managerNameContainer">
                  <div className="managerName">themanager</div>
                  <img
                    src={verfiedImage}
                    alt="verified Image"
                    className="yellowTick"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="managerDescription">
                This is test data describing what funds are being managed by the
                trader and how risk is managed.
              </div>
            </div>

            <hr
              style={{
                color: "#595757",
                height: "1px",
                border: "1px solid #595757",
              }}
            />
          </div>

          <div className="fundallocationAsset ">
            <div className="assetColumn">
              <div className="findlistAsset">
                <div className="fundimgAsset">
                  <div className="imge1Asset">
                    <img src={bitcoin} alt="bitcoin" />
                  </div>
                  <div className="nameAsset">Bitcoin</div>
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

              <div className="findlistAsset">
                <div className="fundimgAsset">
                  <div className="imge1Asset">
                    <img src={ethereum} alt="ethereum" />
                  </div>
                  <div className="nameAsset">Ethereum</div>
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

              <div className="findlistAsset">
                <div className="fundimgAsset">
                  <div className="imge1Asset">
                    <img src={shiba} alt="shiba" />
                  </div>
                  <div className="nameAsset">Shiba</div>
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
              <div className="findlistAsset">
                <div className="fundimgAsset">
                  <div className="imge1Asset">
                    <img src={solana} alt="solana" />
                  </div>
                  <div className="nameAsset">Solana</div>
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

              <div className="findlistAsset">
                <div className="fundimgAsset">
                  <div className="imge1Asset">
                    <img src={tether} alt="tether" />
                  </div>
                  <div className="nameAsset">Tether</div>
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

              <div className="findlistAsset">
                <div className="fundimgAsset">
                  <div className="imge1Asset">🟠</div>
                  <div className="nameAsset">other</div>
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
      <OverviewSection />
    </div>
  );
};

export default MarketSubChild;

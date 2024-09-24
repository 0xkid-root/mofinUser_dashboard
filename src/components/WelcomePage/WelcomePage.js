import React from "react";
import "./WelcomePage.css";
import { usePrivy } from "@privy-io/react-auth";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import sofinYellow from "../../assets/images/sofinYellowIcon.svg"

const WelcomePage = () => {
  const { user, logout } = usePrivy();
  const navigate = useNavigate();
  console.log("user address is here:", user?.wallet?.address);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(user?.wallet?.address);
    toast.success("Address copied!");
  };

  const handleLoginClick = async (event) => {
    event.preventDefault();
    try {
      await logout();
      setTimeout(() => {
        navigate("/");
      }, 100);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const handleTelegramClick = () => {
    window.open("https://bit.ly/4etjV40", "_blank");
  };

  return (
    <div className="welcome-container">
    
    
      <h1>Welcome to Sofin</h1>

      <p className="request-whitelist">
        We are still in closed beta and onboarding is whitelisted. Please fill
        out this form to get whitelisted for closed beta.
      </p>

      <div className="address-container">
        <input
          value={user?.wallet?.address || ""}
          readOnly
          className="address-textarea"
        />
        <button className="copy-button" onClick={copyToClipboard}>
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </div>

      <div className="button-container">
        <button className="action-button" style={{backgroundColor:"#FFDE02", color:"#000"}} onClick={handleLoginClick}>
          <ArrowBackIcon
            style={{ fontSize: 24, marginRight: 8, color: "black" }}
          />
          Go back
        </button>
        <button className="action-button" onClick={handleTelegramClick}>
          
          Get Whitelisted
        </button>
      </div>
      <p style={{fontSize:"14px"}}>
        <span className="note">Please Note:</span> Sofin will never email you or
        contact you through any other means to collect private key, wallet
        address or ask for money.
      </p>

      <ToastContainer autoClose={2000} hideProgressBar={true} />
    </div>
  );
};

export default WelcomePage;

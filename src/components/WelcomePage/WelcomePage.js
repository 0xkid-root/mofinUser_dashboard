import React from "react";
import "./WelcomePage.css";
import { usePrivy } from "@privy-io/react-auth";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import WalletLoginIcon from "../../assets/images/WalletLoginIcon.svg";
import TelegramIcon from '@mui/icons-material/Telegram';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    window.open("https://t.me/sofinapp", "_blank");
  };

  return (
    <div className="welcome-container">
      <h1>Welcome!</h1>
      <p className="request-whitelist">
        Glad to see you are interested in embarking on your Crypto journey with <span className="note">Sofin</span>. We are still in <span className="note">beta</span> and onboarding is <span className="note">whitelisted</span>.
        Please copy your address below. Join our telegram and share it with us on <span className="request-whitelist-channel">#request_to_whitelist</span> channel.
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
        <button className="action-button" onClick={handleLoginClick}>
          <ArrowBackIcon style={{ fontSize: 24, marginRight: 8, color: "white" }} />
          Go to Home
        </button>
        <button className="action-button" onClick={handleTelegramClick}>
          <TelegramIcon style={{ fontSize: 24, marginRight: 8, color: "white" }} />
          Telegram
        </button>
      </div>
      <p>
        <span className="note">Note:</span> Sofin will never ask for your private key.
      </p>

      <ToastContainer autoClose={2000}  hideProgressBar={true} /> 
    </div>
  );
};

export default WelcomePage;

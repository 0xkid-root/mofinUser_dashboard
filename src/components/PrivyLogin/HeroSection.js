import React from "react";
import "./HeroSection.css";
import videoSrc from "../../assets/images/1050.mp4";


const HeroSection = () => {
  return (
    <div className="hero-section">
      <video className="hero-video" autoPlay muted loop>
        <source
          src={videoSrc}
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <h1 className="hero-title">
          The first decentralized liquid <br /> co-investing protocol
        </h1>
        <p className="hero-description">
          Sofin enables traders and fund managers to create on-chain, fully
          liquid trading and investment strategies with instant secondary market
          access.
        </p>
        <button className="hero-button">Get Started</button>
        <button className="hero-button demo-button">Try For Demo</button>
      </div>
    </div>
  );
};

export default HeroSection;

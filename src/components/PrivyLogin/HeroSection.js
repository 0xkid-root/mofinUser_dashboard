import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <video className="hero-video" autoPlay muted loop>
        <source
          src="https://d33vw3iu5hs0zi.cloudfront.net/media/exness_c76dfeb683.webm"
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

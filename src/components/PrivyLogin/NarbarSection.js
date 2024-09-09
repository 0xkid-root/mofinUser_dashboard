import React, { useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import "./NavbarSection.css";
import WalletLoginIcon from "../../assets/images/WalletLoginIcon.svg";
import Logo from "../../assets/images/logo_dark.svg";
// import MenuIcon from "../../assets/images/menu_icon.svg";
import MenuIcon from "@mui/icons-material/Menu";
import HeroSection from "./HeroSection";
import LoginCardSection from "./LoginCardSection";

const NavbarSection = () => {
  const { login } = usePrivy();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="navbar-container">
        <div className="logo-wrapper">
          <img src={Logo} alt="Company Logo" className="company-logo" />
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <MenuIcon />
        </div>

        <div className={`buttons-wrapper ${isMenuOpen ? "show" : ""}`}>
          {/*                    <div className='connect-wrapper'>
                        <button className="connect-button">Register</button>
                    </div>
 */}

          <div className="connect-wrapper" onClick={login}>
            <img src={WalletLoginIcon} alt="Wallet Icon" />
            <button className="connect-button">Login</button>
          </div>
        </div>
      </div>

      <HeroSection />
      <LoginCardSection />
    </div>
  );
};

export default NavbarSection;

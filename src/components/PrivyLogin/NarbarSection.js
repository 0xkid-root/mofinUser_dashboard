import React from 'react';
import { usePrivy } from "@privy-io/react-auth";
import './NavbarSection.css';
import WalletLoginIcon from "../../assets/images/WalletLoginIcon.svg";

const NavbarSection = () => {
    const { login } = usePrivy();

    return (
        <div className="navbar-container">
            <div className="connect-wrapper" onClick={login}>
                <img src={WalletLoginIcon} alt="Wallet Icon" />
                <button className="connect-button" >Login</button>
            </div>
        </div>
    );
};

export default NavbarSection;

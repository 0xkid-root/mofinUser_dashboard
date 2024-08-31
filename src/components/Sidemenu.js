import React, { useState } from 'react';
import Dashboard from '../assets/images/dasboard.svg';
import Market from '../assets/images/trade.svg';
import Wallet from '../assets/images/Group.svg';
import Staking from '../assets/images/donate.svg';
import Loans from '../assets/images/protocols.svg';
import Settings from '../assets/images/setting.svg';
import user from '../assets/images/user.svg';
import LogOut from '../assets/images/logout.svg';
import { usePrivy } from "@privy-io/react-auth";
import { Link } from 'react-router-dom';

export default function Sidemenu() {
  const { logout, ready, authenticated } = usePrivy();
  const [isToggled, setIsToggled] = useState(false);
  // console.log("logout is here:", logout);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    logout();
  };

  return (
    <>
      <button className='btn btn-sm clchn ms-3 d-inline-block d-sm-none' onClick={handleToggle}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`sidemenu fixed-top ${isToggled ? 'active' : ''}`}>
        <ul>
          <li><Link to='/user' className='active'> <img src={Dashboard} alt="Dashboard" /> <span>Dashboard</span></Link></li>
          <li><Link to='/market'> <img src={Market} alt="Market" /> <span>Market</span> </Link></li>
          <li><Link to='/wallet'> <img src={Wallet} alt="Wallet" /> <span>Wallet</span></Link></li>
          <li><Link to='/stacking'> <img src={Staking} alt="Staking" /> <span>Staking</span></Link></li>
          <li><Link to='/loans'> <img src={Loans} alt="Loans" /> <span>Loans</span></Link></li>
          <li><Link to='#'> <img src={Settings} alt="Settings" /> <span>Settings</span></Link></li>
          <li><Link to='/profile'> <img src={user} alt="Profile" /> <span>Profile</span></Link></li>
          <li className='mt-auto'>
            <Link to='' onClick={handleLogout}>
              <img src={LogOut} alt="Log Out" /> <span>Log Out</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

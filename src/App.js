import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Sidemenu from "./components/Sidemenu";
import Workarea from "./components/Workarea";
import NavbarSection from "./components/PrivyLogin/NarbarSection";
import ParticlesComponent from "./components/particles/Particles";
import ProtectedRoute from "./auth/ProtectedRoute";
import { usePrivy } from "@privy-io/react-auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/style.css";
import MarketSection from "./components/Pages/marketPage/MarketSection";
import MarketSubChild from "./components/Pages/marketPage/MarketSubChild";
import WalletSection from "./components/Pages/WalletSection";
import StackingSection from "./components/Pages/StackingSection";
import LoansSection from "./components/Pages/LoansSection";
import ProfileSection from "./components/Pages/ProfileSection";
import LoadingComponent from "./components/LoadingPage/LoadingComponent";
import WelcomePage from "./components/WelcomePage/WelcomePage";

import { CheckWhitelistStatus } from "./contract/BlockchainIntreaction";

function App() {
  const { ready, authenticated, user } = usePrivy();
  const navigate = useNavigate();
  const location = useLocation();
  const [isWhitelisted, setIsWhitelisted] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleAsyncCheckWhiteList = async (userAddress) => {
    try {
      const result = await CheckWhitelistStatus(userAddress); 
      console.log("Whitelist check result:", result);
      return result;
    } catch (error) {
      console.log("Error checking whitelist status:", error);
      return false;
    }
  };
  useEffect(() => {
    const checkAuthenticationAndWhitelist = async () => {
      if (ready) {
        if (authenticated) {
          const userAddress = user?.wallet?.address;
          console.log("User address:", userAddress);

          if (userAddress) {
            const whitelistStatus = await handleAsyncCheckWhiteList(userAddress);
            setIsWhitelisted(whitelistStatus); 

            if (whitelistStatus) {
              if (location.pathname === "/" || location.pathname === "/welcome") {
                setLoading(false);
                navigate("/user", { replace: true }); 
              }
            } else {
              setLoading(false);
              navigate("/welcome", { replace: true });
            }
          }
        } else {
          setIsWhitelisted(false);
          if (location.pathname === "/welcome" && location.pathname !== "/") {
            setLoading(false);
            navigate("/", { replace: true });
          }
        }
        setLoading(false);
      }
    };

    checkAuthenticationAndWhitelist(); 
  }, [ready, authenticated, user, navigate, location.pathname]);

  const showParticles = location.pathname !== "/";

  if (loading || !ready) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
      >
        <ParticlesComponent />
        <LoadingComponent />
      </div>
    );
  }

  return (
    <React.Fragment>
      {showParticles && <ParticlesComponent />}
      <Routes>
        {isWhitelisted ? (
          <>
            <Route
              path="/user"
              element={
                <ProtectedRoute>
                  <Header />
                  <Sidemenu />
                  <Workarea />
                </ProtectedRoute>
              }
            />
            <Route
              path="/market"
              element={
                <ProtectedRoute>
                  <Header />
                  <Sidemenu />
                  <MarketSection />
                </ProtectedRoute>
              }
            />
            <Route
              path="/marketchild"
              element={
                <ProtectedRoute>
                  <Header />
                  <Sidemenu />
                  <MarketSubChild />
                </ProtectedRoute>
              }
            />
            <Route
              path="/wallet"
              element={
                <ProtectedRoute>
                  <Header />
                  <Sidemenu />
                  <WalletSection />
                </ProtectedRoute>
              }
            />
            <Route
              path="/stacking"
              element={
                <ProtectedRoute>
                  <Header />
                  <Sidemenu />
                  <StackingSection />
                </ProtectedRoute>
              }
            />
            <Route
              path="/loans"
              element={
                <ProtectedRoute>
                  <Header />
                  <Sidemenu />
                  <LoansSection />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Header />
                  <Sidemenu />
                  <ProfileSection />
                </ProtectedRoute>
              }
            />
            <Route path="/welcome" element={<Navigate to="/user" replace />} />
            <Route path="*" element={<Navigate to="/user" replace />} />
          </>
        ) : (
          <>
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/" element={<NavbarSection />} />
            <Route path="*" element={<Navigate to="/welcome" replace />} />
          </>
        )}
      </Routes>
     
    </React.Fragment>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

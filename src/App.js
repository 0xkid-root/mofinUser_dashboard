import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
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
import MarketSection from "./components/Pages/MarketSection";
import WalletSection from "./components/Pages/WalletSection";
import StackingSection from "./components/Pages/StackingSection";
import LoansSection from "./components/Pages/LoansSection";
import ProfileSection from "./components/Pages/ProfileSection";
import ForbiddenSection from "./components/ErrorPage/ForbiddenSection";
import LoadingComponent from './components/LoadingPage/LoadingComponent';

function App() {
  const { ready, authenticated, user } = usePrivy();
  // console.log("user is here:",user.linkedAccounts)
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!ready) {
      return;
    }

    if (authenticated && user?.wallet?.address) {
      if (location.pathname === "/forbidden") {
        navigate("/user", { replace: true });
      } else if (location.pathname === "/") {
        navigate("/user", { replace: true });
      }
    } else if (authenticated && !user?.wallet?.address) {
      if (location.pathname !== "/forbidden") {
        navigate("/forbidden", { replace: true });
      }
    }
  }, [authenticated, navigate, location.pathname, ready, user?.wallet?.address]);

  if (!ready) {
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
      <ParticlesComponent />
      {!authenticated && <NavbarSection />}
      <Routes>
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
        <Route
          path="/forbidden"
          element={
            user?.wallet?.address ? (
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
            ) : (
              <ProtectedRoute>
                <ForbiddenSection />
              </ProtectedRoute>
            )
          }
        />
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

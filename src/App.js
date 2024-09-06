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
import MarketSection from "./components/Pages/MarketSection";
import WalletSection from "./components/Pages/WalletSection";
import StackingSection from "./components/Pages/StackingSection";
import LoansSection from "./components/Pages/LoansSection";
import ProfileSection from "./components/Pages/ProfileSection";
import LoadingComponent from "./components/LoadingPage/LoadingComponent";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import { users } from "./UserRoles";
import SmartAccountModal from "./ModelComponent/SmartAccountModal";

function App() {
  const { ready, authenticated, user } = usePrivy();
  const navigate = useNavigate();
  const location = useLocation();
  const [isWhitelisted, setIsWhitelisted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false); // New state to track if modal has been shown

  useEffect(() => {
    if (ready) {
      if (authenticated && user?.wallet?.address) {
        const currentUser = users.find(
          (u) =>
            u?.address?.toLowerCase() === user?.wallet?.address?.toLowerCase()
        );

        if (currentUser && currentUser.isWhitelist === "true") {
          setIsWhitelisted(true);
          if (location.pathname === "/" || location.pathname === "/welcome") {
            navigate("/user", { replace: true });
          }

          // Only open modal if user is on /user route, isSmartAccount is false, and the modal hasn't been shown yet
          if (
            location.pathname === "/user" &&
            currentUser.isSmartAccount === "false" &&
            !isModalShown
          ) {
            setTimeout(() => {
              setShowModal(true);
              setIsModalShown(true);
            }, 5000); 
          }
        } else {
          setIsWhitelisted(false);
          navigate("/welcome", { replace: true });
        }
      } else {
        setIsWhitelisted(false);
        if (location.pathname === "/welcome" && location.pathname !== "/") {
          navigate("/", { replace: true });
        }
      }
    }
  }, [ready, authenticated, user, navigate, location.pathname, isModalShown]);

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
      <SmartAccountModal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Smart Account"
        content="Your account type is not supported."
      />
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




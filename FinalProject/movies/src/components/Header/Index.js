import "./Header.css";
import logo from "../../assets/logo.svg";
import { useEffect, useState } from "react";
import Modal from "../../shared/modal";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router";
import HamburgerMenu from "../../shared/HamburgerMenu";
import { useDeviceType } from "../../hooks/useDeviceType";

function Header() {
  const [openModal, setOpenModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const user = localStorage.getItem("loggedInUser");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const { isDesktop } = useDeviceType();

  useEffect(() => {
    setIsLoggedIn(user);
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className="header">
        <div className="logoContainer">
          <img className="logo" src={logo} alt="icon" width={40} height={40} />
          <button className="logoName" onClick={() => navigate("/")}>
            King Movie
          </button>
        </div>
        {isDesktop ? (
          <>
            <div className="headerBtns">
              <button className="headerBtn" onClick={() => navigate("/")}>
                home
              </button>
              <button className="headerBtn">about</button>
              <button className="headerBtn">contact</button>
            </div>
            <div className="rightBtnsContainer">
              {isLoggedIn ? (
                <button className="SignUpBtn" onClick={() => handleLogout()}>
                  Log out
                </button>
              ) : (
                <>
                  <button
                    className="SignUpBtn"
                    onClick={() => setOpenLoginModal(true)}
                  >
                    Login
                  </button>
                  <button
                    className="SignUpBtn"
                    onClick={() => setOpenModal(true)}
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </>
        ) : (
          <HamburgerMenu
            isLoggedIn={isLoggedIn}
            setOpenLoginModal={setOpenLoginModal}
            setOpenModal={setOpenModal}
            handleLogout={handleLogout}
          />
        )}
      </div>
      <Modal open={openLoginModal} handleClose={() => setOpenLoginModal(false)}>
        <div className="formTitle">Login</div>
        <LoginForm
          open={openLoginModal}
          handleClose={() => setOpenLoginModal(false)}
        />
      </Modal>
      <Modal open={openModal} handleClose={() => setOpenModal(false)}>
        <div className="formTitle">Sign up</div>
        <RegistrationForm
          open={openModal}
          handleClose={() => setOpenModal(false)}
        />
      </Modal>
    </>
  );
}

export default Header;

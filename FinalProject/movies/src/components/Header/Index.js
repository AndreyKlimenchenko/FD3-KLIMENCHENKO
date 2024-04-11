import "./Header.css";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import { useEffect, useState } from "react";
import Modal from "../../shared/modal";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router";

function Header() {
  const [openModal, setOpenModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const user = localStorage.getItem("loggedInUser");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

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
        <div className="headerBtns">
          <button className="headerBtn">home</button>
          <button className="headerBtn">about</button>
          <button className="headerBtn">contact</button>
        </div>
        <div className="rightBtnsContainer">
          <div className="searchContainer">
            <input className="headerInput" type="text" placeholder="Search.." />
            <button className="headerSearch" type="submit">
              <img
                className="searchIcon"
                src={search}
                alt="search"
                width={18}
                height={18}
              />
            </button>
          </div>
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
              <button className="SignUpBtn" onClick={() => setOpenModal(true)}>
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
      <Modal open={openLoginModal} handleClose={() => setOpenLoginModal(false)}>
        <div>Login</div>
        <LoginForm handleClose={() => setOpenLoginModal(false)} />
      </Modal>
      <Modal open={openModal} handleClose={() => setOpenModal(false)}>
        <div>Sign up</div>
        <RegistrationForm handleClose={() => setOpenModal(false)} />
      </Modal>
    </>
  );
}

export default Header;

import "./Header.css";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import { useState } from "react";
import Modal from "../../shared/modal";
import RegistrationForm from "./RegistrationForm";

function Header() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="header">
        <div className="logoContainer">
          <img className="logo" src={logo} alt="icon" width={40} height={40} />
          <a className="logoName" href="#">
            King Movie
          </a>
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
          <button className="SignUpBtn" onClick={() => setOpenModal(true)}>
            Sign Up
          </button>
        </div>
      </div>
      <Modal open={openModal} handleClose={() => setOpenModal(false)}>
        <div>sign up</div>
        <RegistrationForm handleClose={() => setOpenModal(false)} />
      </Modal>
    </>
  );
}

export default Header;

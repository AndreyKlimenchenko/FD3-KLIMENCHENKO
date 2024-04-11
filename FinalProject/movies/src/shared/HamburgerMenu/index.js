import { useState } from "react";
import {
  MenuLabel,
  Icon,
  NavBackground,
  Navigation,
  ItemLink,
  List,
} from "./HamburgerMenu.styles";
import { useNavigate } from "react-router";

function HamburgerMenu({
  isLoggedIn,
  setOpenLoginModal,
  setOpenModal,
  handleLogout,
}) {
  const [click, setClick] = useState(false);

  const navigate = useNavigate();

  const handleClick = (path = "/") => {
    navigate(path);
    setClick((prevState) => !prevState);
  };

  return (
    <>
      <MenuLabel
        htmlFor="navi-toggle"
        onClick={() => setClick((prevState) => !prevState)}
      >
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        <List>
          <li>
            <ItemLink onClick={() => handleClick("/")}>Home</ItemLink>
          </li>
          <li>
            <ItemLink onClick={() => handleClick()}>About</ItemLink>
          </li>
          <li>
            <ItemLink onClick={() => handleClick()}>Contact</ItemLink>
          </li>
          {isLoggedIn ? (
            <li>
              <ItemLink onClick={() => handleLogout()}>Log out</ItemLink>
            </li>
          ) : (
            <>
              <li>
                <ItemLink onClick={() => setOpenLoginModal(true)}>
                  Login
                </ItemLink>
              </li>
              <li>
                <ItemLink onClick={() => setOpenModal(true)}>Sign Up</ItemLink>
              </li>
            </>
          )}
        </List>
      </Navigation>
    </>
  );
}

export default HamburgerMenu;

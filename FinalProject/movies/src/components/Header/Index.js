import "./Index.css";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <div className="header">
        <img src={logo} alt="icon" width={40} height={40} />
        <a href="#">King Movie</a>
        <div>
          <button>Home</button>
          <button>About</button>
          <button>Contact</button>
        </div>
        <div>
          <input type="text" placeholder="Search.." />
          <button type="submit">search</button>
        </div>
        <button>Sign Up</button>
    </div>
  );
}

export default Header;

import { useState } from "react";
import { IMG_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={IMG_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

import { LOGO_URL } from "../utils/appConstant";
import { useState, useEffect } from "react";
import { Link} from "react-router-dom";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");

  const updateBtnContent = () => {
    btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
    
  }

  useEffect(()=>{
    console.log("use effect header");
  },[btnNameReact])

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us (class based componenet)</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li><button onClick={() => updateBtnContent()}>{btnNameReact}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

import { LOGO_URL } from "../utils/appConstant";
import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");

  const updateBtnContent = () => {
    btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
    
  }

  const onlineStatus = useOnlineStatus();

  useEffect(()=>{
    console.log("use effect header");
  },[btnNameReact])

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo">
        <img className="w-56" src={LOGO_URL} />
      </div>

      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            {/* Integrating custom hooks Episode 9 */}
            Online Status: <b>{onlineStatus ? 'Online' : 'Offline'}</b>
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us (class based componenet)</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <li><button onClick={() => updateBtnContent()}>{btnNameReact}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

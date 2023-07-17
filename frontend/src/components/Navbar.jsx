import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import {
    FaHome,
}from "react-icons/fa";

import {PersonCircle,
  PersonCheckFill} from "react-bootstrap-icons"


function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">

      <div className="rightSide">
        <Link to="/"><FaHome></FaHome><br></br>Home</Link>
        <Link to="/logi1"><PersonCircle></PersonCircle><br></br>Staff Login </Link>
        <Link to="/logi2"><PersonCheckFill></PersonCheckFill><br></br> Student Login </Link>
        <button onClick={toggleNavbar}>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
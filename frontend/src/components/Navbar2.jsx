import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import {
    FaHome
}from "react-icons/fa";
import {
        PersonLinesFill,
        Power,
        PersonVcardFill,
        
} from "react-bootstrap-icons"


function Navbar2() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">

      <div className="rightSide">
        <Link to="/"><FaHome></FaHome><br></br>Home</Link>
        <Link to="/Sfview1"><PersonLinesFill></PersonLinesFill><br></br>Staff List </Link>
        <Link to="/Stmark"><PersonVcardFill></PersonVcardFill><br></br> Student & Mark List </Link>
        <Link to="/"><Power></Power><br></br>Logout</Link>
        <button onClick={toggleNavbar}>
        </button>
      </div>
    </div>
  );
}

export default Navbar2;
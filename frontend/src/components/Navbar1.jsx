import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import {
    FaHome
}from "react-icons/fa";
import {PersonPlus,
        BoxArrowInRight,
        Power,
        PersonFillAdd,
        PersonFillGear,
        EnvelopeExclamationFill
        
} from "react-bootstrap-icons"


function Navbar1() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">

      <div className="rightSide">
        <Link to="/"><FaHome></FaHome><br></br>Home</Link>
        <Link to="/Adreg"><PersonFillGear></PersonFillGear><br></br>Add Admin </Link>
        <Link to="/Sfreg"><PersonPlus></PersonPlus><br></br> Add Staff </Link>
        <Link to="/Streg"><PersonFillAdd></PersonFillAdd><br></br> Add Student </Link>
        <Link to="/complaint"><EnvelopeExclamationFill></EnvelopeExclamationFill><br></br> Complaints </Link>
        <Link to="/"><BoxArrowInRight></BoxArrowInRight><br></br>Login</Link>
        <Link to="/"><Power></Power><br></br>Logout</Link>
        <button onClick={toggleNavbar}>
        </button>
      </div>
    </div>
  );
}

export default Navbar1;
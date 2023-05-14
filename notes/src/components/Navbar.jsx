import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

// TO CHECK IF USER IS LOGGED IN OR NOT



  return (
    <>
      <ul className="nav-ul">
        <li>< Link to="/">Home</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </>
  );
};

export default Navbar;

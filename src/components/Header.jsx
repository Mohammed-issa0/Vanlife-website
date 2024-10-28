import React, { act } from "react";
import { Link, NavLink } from "react-router-dom";
import avatar from "../images/avatar-icon.png";
export default function Header() {
  const activeStyles = {
    color: "#ff8c38",
    textDecoration: "underline",
    letterSpacing: "1px",
    fontWight: "bold",
  };

  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }
  return (
    <header>
      <Link className="site-logo" to="/">
        #<span>V</span>an<span>l</span>ife
      </Link>
      <nav>
        <NavLink
          to="host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img src={avatar} className="login-icon" />
        </Link>
        <button className="btn" onClick={fakeLogOut}>
          X
        </button>
      </nav>
    </header>
  );
}

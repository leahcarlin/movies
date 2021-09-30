import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <div className="NavBar">
      <NavLink className="NavLink" to="/" exact={true}>
        Home
      </NavLink>
      <NavLink className="NavLink" to="/about">
        About
      </NavLink>
      <NavLink className="NavLink" to="/discover">
        Discover
      </NavLink>
    </div>
  );
}

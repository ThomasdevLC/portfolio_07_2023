import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <div className="nav">
      <ul className="nav__list">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li className="nav__list__name">Portfolio</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="nav__list__name">À propos / CV</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default HeaderNav;

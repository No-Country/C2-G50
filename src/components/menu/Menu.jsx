import React, { useState } from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navLink__active">
              <span className="iconify" data-icon="mdi:view-dashboard"></span>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portafolio" activeClassName="navLink__active">
              <span className="iconify" data-icon="bx:bxs-wallet"></span>
              Portafolio
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/news" activeClassName="navLink__active">
              <span className="iconify" data-icon="bx:bx-world"></span> News
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/settings" activeClassName="navLink__active">
              <span className="iconify" data-icon="uiw:setting"></span> Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Menu;

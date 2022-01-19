import React, { useState } from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <nav>
        <ul>
          <NavLink to="/" activeClassName="active__link">
            <li>
              <span class="iconify" data-icon="mdi:view-dashboard"></span>
              Dashboard
            </li>
          </NavLink>
          <NavLink to="/portafolio" activeClassName="active__link">
            <li>
              <span class="iconify" data-icon="bx:bxs-wallet"></span> Portafolio
            </li>
          </NavLink>
          <NavLink to="/news" activeClassName="active__link">
            <li>
              <span class="iconify" data-icon="bx:bx-world"></span> News
            </li>
          </NavLink>
          <NavLink to="/settings" activeClassName="active__link">
            <li>
              <span class="iconify" data-icon="uiw:setting"></span> Settings
            </li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Menu;

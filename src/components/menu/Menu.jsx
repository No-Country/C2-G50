import React, { useState } from "react";
import "./Menu.css";
import "../../App.css";
import { NavLink } from "react-router-dom";
import useLocalStorage from 'use-local-storage'

const Menu = () => {
  const [openNav, setOpenNav] = useState(false);
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : 'light';
    setTheme(newTheme);
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <>
      <button className="nav-button" onClick={() => setOpenNav(!openNav)}>
        <span className="iconify" data-icon="fluent:navigation-16-filled"></span>
      </button>
      <nav className={`app ${openNav ? 'openNav' : ''}`} data-theme={theme}>
        <ul className="nav-list">
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
          <li >
            <button className="dark-mode" onClick={function(){ switchTheme(); refreshPage() }} >
              {theme === 'light' ? <span className="iconify" data-icon="bx:bxs-moon"></span> : <span className="iconify" data-icon="akar-icons:sun-fill"></span>} 
              Theme
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Menu;

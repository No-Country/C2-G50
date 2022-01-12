import React, {useState} from 'react';
import './Menu.css'
import {Link} from "react-router-dom";

const Menu = () => {
const [openNav, setOpenNav] = useState(false);

return (
  <>
    <header>
      <nav>
        <button onClick={() => setOpenNav(!openNav)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav> 
    </header>
  </>
  )
}


export default Menu

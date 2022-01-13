import React, {useState} from 'react';
import './Menu.css'
import {Link} from "react-router-dom";

const Menu = () => {
const [openNav, setOpenNav] = useState(false);

return (
  <>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/"><span class="iconify" data-icon="mdi:view-dashboard"></span> Dashboard</Link>
          </li>
          <li>
            <Link to="/portafolio"><span class="iconify" data-icon="bx:bxs-wallet"></span> Portafolio</Link>
          </li>
          <li>
            {/* <Link to="/news"><span class="iconify" data-icon="wpf:globe-earth"></span> News</Link> */}
            <Link to="/news"><span class="iconify" data-icon="bx:bx-world"></span> News</Link>

          </li>
          <li>
            <Link to="/settings"><span class="iconify" data-icon="uiw:setting"></span> Settings</Link>
          </li>
        </ul>
      </nav> 
    </header>
  </>
  )
}


export default Menu

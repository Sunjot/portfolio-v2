import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom';
import HomeIcon from '../images/icon.png'

const Header = () => {

  const [headerBorder, setHeaderBorder] = useState("");

  const scrollHandler = () => {
    if (window.pageYOffset > 0 && headerBorder === "") setHeaderBorder("border-act");
    if (window.pageYOffset === 0 && headerBorder === "border-act") setHeaderBorder("");
  }

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
  }, []);

  return (
    <div id="header" className={headerBorder}>
      <NavLink to="/" id="hl1-a" className="header-link" key="hl1">
        <img id="home-icon" src={HomeIcon} />
      </NavLink>
      <div id="header-link-collect">
        <div id="hl2">
          <NavLink exact to="/me" activeClassName='selected' id="hl2-a" className="header-link" key="hl1">About Me</NavLink>
        </div>
        <div id="hl3">
          <NavLink exact to="/projects" activeClassName='selected' id="hl3-a" className="header-link" key="hl1">Projects</NavLink>
        </div>
        <div id="hl4">
          <NavLink exact to="/contact" activeClassName='selected' id="hl4-a" className="header-link" key="hl1">Contact</NavLink>
        </div>
      </div>
      <div id="header-line"/>
    </div>
  );
}

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/realworld.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <NavLink to="/">
          <img className="header__logo" src={Logo} alt="Логотип RealWorld" />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

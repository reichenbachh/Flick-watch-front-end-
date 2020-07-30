import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
const BurgerNav = () => {
  const showSettings = (event) => {
    event.preventDefault();
  };

  const [openState, setOpenState] = useState({ isOPen: false });

  const closeMenu = () => {
    setOpenState({ isOPen: true });
  };

  const isMenuOpen = () => {
    setOpenState(openState.isOPen);
  };

  return (
    <Menu right isOpen={openState.isOPen} onStateChange={closeMenu}>
      <Link id='home' className='menu-item' to='/trending'>
        Trending
      </Link>
      <Link id='about' className='menu-item' to='/tvShows'>
        TV Shows
      </Link>
      <Link id='contact' className='menu-item' to='/movies'>
        Movies
      </Link>
      <Link id='contact' className='menu-item' to='/login'>
        Login
      </Link>
    </Menu>
  );
};

export default BurgerNav;

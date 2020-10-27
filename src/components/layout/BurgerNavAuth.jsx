import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const AuthNav = ({ logoutUser }) => {
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
        profile
      </Link>
      <Link id='contact' className='menu-item' to='/trackedFlicks'>
        Tracked Shows
      </Link>
      <Link
        id='contact'
        onClick={() => logoutUser()}
        className='menu-item'
        to='/login'
      >
        Logout
      </Link>
      <Link to='/search'>
        <i className='fas fa-search '></i>
      </Link>
    </Menu>
  );
};

export default AuthNav;

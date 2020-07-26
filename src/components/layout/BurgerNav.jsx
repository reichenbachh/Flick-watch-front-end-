import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
const BurgerNav = () => {
  const showSettings = (event) => {
    event.preventDefault();
  };

  return (
    <Menu>
      <Link id='home' className='menu-item' to='/trending'>
        Trending
      </Link>
      <Link id='about' className='menu-item' to='/#!'>
        TV Shows
      </Link>
      <Link id='contact' className='menu-item' to='/movies'>
        Movies
      </Link>
      <Link id='contact' className='menu-item' to='/login'>
        Login
      </Link>
      <Link onClick={showSettings} className='menu-item--small' href='#!'>
        Login
      </Link>
    </Menu>
  );
};

export default BurgerNav;

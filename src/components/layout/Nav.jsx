import React from "react";
import { Link } from "react-router-dom";
import LOGOw from "../../assets/LOGOw.png";

const Nav = () => {
  return (
    <div id='home-nav'>
      <div className='nav'>
        <div className='logo'>
          <Link to='/'>
            <img src={LOGOw} alt='' srcSet='' />
          </Link>
        </div>
        <div className='menu'>
          <ul>
            <li>
              <Link to='/trending'>Trending</Link>
            </li>
            <li>
              <a href='#!'>Tv Shows</a>
            </li>
            <li>
              <Link to='/movies'>Movies</Link>
            </li>
            <li>
              <Link to='/login'>Sign Up?</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;

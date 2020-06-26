import React from "react";
import { Link } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import LOGOw from "../../assets/LOGOw.png";

const Nav = () => {
  return (
    <div id='home-landing'>
      <div className='nav'>
        <div className='logo'>
          <a href='#!'>
            <img src={LOGOw} alt='' srcset='' />
          </a>
        </div>
        <div className='menu'>
          <ul>
            <li>
              <a href='#!'>Discover</a>
            </li>
            <li>
              <a href='#!'>Tv Shows</a>
            </li>
            <li>
              <a href='#!'>Movies</a>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='landing-text'>
        <h1>
          <span className='disco-link'>
            <a href=''>Discover </a>
          </span>{" "}
          and track your favourite movies and TV Shows
        </h1>
      </div>
    </div>
  );
};

export default Nav;

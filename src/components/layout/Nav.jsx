import React from "react";
import BurgerNav from "./BurgerNav";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import LOGOw from "../../assets/LOGOw.png";

const Nav = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <div>
      {isDesktopOrLaptop && (
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
                  <Link to='/tvShows'>Tv Shows</Link>
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
      )}
      {isTabletOrMobile && (
        <div id='home-nav'>
          <div className='nav'>
            <div className='logo'>
              <Link to='/'>
                <img src={LOGOw} alt='' srcSet='' />
              </Link>
            </div>
            <div className='menu'>
              <BurgerNav />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;

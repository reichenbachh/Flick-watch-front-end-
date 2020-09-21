import React, { useEffect } from "react";
import { connect } from "react-redux";
import BurgerNav from "./BurgerNav";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import LOGOw from "../../assets/LOGOw.png";
import DropDownMenu from "./DropDownMenu";

const Nav = ({ auth: { isAuthenticated, user } }) => {
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
                  <Link to='/search'>
                    <i className='fas fa-search '></i>
                  </Link>
                </li>
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
                  {isAuthenticated && user ? (
                    <a href='#!'>
                      <DropDownMenu userName={user.username} />
                    </a>
                  ) : (
                    <Link to='/login'>Sign Up</Link>
                  )}
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Nav);

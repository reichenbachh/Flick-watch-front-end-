import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

const DropDownMenu = ({ userName, logoutUser }) => {
  return (
    <div id='dropDown'>
      <div className='dropDownTitle'>{userName}</div>
      <div className='dropDownContent'>
        <ul className='dropMenuItems'>
          <li onClick={() => logoutUser()}>
            <Link to=''>Logout</Link>{" "}
          </li>
          <li>
            <Link to=''>Profile</Link>
          </li>
          <li>
            <Link to='/trackedFlicks'>Tracked Shows</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(DropDownMenu);

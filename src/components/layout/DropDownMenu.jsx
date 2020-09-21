import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

const DropDownMenu = ({ userName, logoutUser }) => {
  return (
    <div id='dropDown'>
      <div className='dropDownTitle'>{userName}</div>
      <div className='dropDownContent'>
        <ul className='dropMenuItems'>
          <li onClick={() => logoutUser()}>Logout</li>
          <li>Profile</li>
          <li>Tracked Shows</li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(DropDownMenu);

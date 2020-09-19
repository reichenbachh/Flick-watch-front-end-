import React from "react";

const DropDownMenu = ({ userName }) => {
  return (
    <div id='dropDown'>
      <div className='dropDownTitle'>{userName}</div>
      <div className='dropDownContent'>
        <ul className='dropMenuItems'>
          <li>
            Logout <i class='fas fa-sign-out-alt'></i>
          </li>
          <li>
            Profile <i class='fas fa-user'></i>{" "}
          </li>
          <li>
            Tracked Shows <i class='fas fa-plus'></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDownMenu;

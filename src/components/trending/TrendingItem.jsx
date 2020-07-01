import React from "react";
import login_bg from "../../assets/login_bg.jpg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const TrendingItem = () => {
  const percentage = 66;
  return (
    <div className='Movie-card'>
      <div className='card-img'>
        <img src={login_bg} alt='' srcset='' />
      </div>
      <div className='details'>
        <div className='date'>123131232</div>
        <div className='name'>Lorem ipsum dolor sit amet consectetur</div>
        <div className='rating'>1.4/10</div>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
    </div>
  );
};

export default TrendingItem;

import React from "react";
import preloader from "../../assets/preloader.gif";

const Preloader = () => {
  return (
    <div className='loader'>
      <img src={preloader} alt='' srcSet='' />
    </div>
  );
};

export default Preloader;

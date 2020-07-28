import React from "react";
import ScrollCard from "../layout/ScrollCard";

const Upcoming = ({ upcoming }) => {
  return (
    <div className='upcoming-scroll'>
      <div className='title'>
        <h1>
          Upcoming <span className='title-span'>Global</span>
        </h1>
      </div>
      <div className='content-scroll'>
        {upcoming.results.map((data) => (
          <ScrollCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Upcoming;

import React from "react";
import ScrollCard from "../layout/ScrollCard";

const TopRated = ({ topRated }) => {
  return (
    <div className='topRated-scroll'>
      <div className='title'>
        <h1>
          TopRated <span className='title-span'>Global</span>
        </h1>
      </div>
      <div className='content-scroll'>
        {topRated.results.map((data) => (
          <ScrollCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default TopRated;

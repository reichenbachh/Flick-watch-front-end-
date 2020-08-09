import React from "react";
import ShowScrollCard from "../layout/ShowScrollCard";
const TopRatedShows = ({ topRated }) => {
  return (
    <div className='topRatedTV-scroll'>
      <div className='title'>
        <h1>
          Top Rated Show <span className='title-span'>Global</span>
        </h1>
      </div>
      <div className='content-scroll'>
        {topRated.results.map((data) => (
          <ShowScrollCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};
export default TopRatedShows;

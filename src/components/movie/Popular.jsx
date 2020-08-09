import React from "react";
import MovieScrollCard from "../layout/MovieScrollCard";

const Popular = ({ popular }) => {
  return (
    <div className='popular-scroll'>
      <div className='title'>
        <h1>
          Top Popular <span className='title-span'>Global</span>
        </h1>
      </div>
      <div className='content-scroll'>
        {popular.results.map((data) => (
          <MovieScrollCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Popular;

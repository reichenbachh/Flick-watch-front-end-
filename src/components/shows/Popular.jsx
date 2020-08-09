import React from "react";
import ShowScrollCard from "../layout/ShowScrollCard";
const Popular = ({ popular }) => {
  return (
    <div className='popularTV-scroll'>
      <div className='title'>
        <h1>
          Popular Shows <span className='title-span'>Global</span>
        </h1>
      </div>
      <div className='content-scroll'>
        {popular.results.map((data) => (
          <ShowScrollCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};
export default Popular;

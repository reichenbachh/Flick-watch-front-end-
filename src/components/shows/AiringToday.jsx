import React from "react";
import ShowScrollCard from "../layout/ShowScrollCard";

const AiringToday = ({ airingToday }) => {
  return (
    <div className='airingTodayTV-scroll'>
      <div className='title'>
        <h1>
          AiringToday <span className='title-span'>Global</span>
        </h1>
      </div>
      <div className='content-scroll'>
        {airingToday.results.map((data) => (
          <ShowScrollCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default AiringToday;

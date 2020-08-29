import React from "react";
import no_image from "../../assets/no_image.png";

const SeasonCardSingle = ({ seasonInfo }) => {
  const {
    poster_path,
    name,
    overview,
    air_date,
    episode_count,
  } = seasonInfo[0];
  return (
    <div className='seasons-card'>
      <div className='season-card-image'>
        {poster_path ? (
          <img src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt='' />
        ) : (
          <img src={no_image} alt='' />
        )}
      </div>
      <div className='seasons-card-info'>
        <div className='season-info-upper'>
          <h4>{name}</h4>
          <p>
            {air_date.split("-")[0]} | {episode_count} episodes{" "}
          </p>
        </div>
        <div className='season-info-lower'>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default SeasonCardSingle;

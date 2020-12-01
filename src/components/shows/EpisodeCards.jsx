import React from "react";
import no_image from "../../assets/no_image.png";

const EpisodeCards = ({ seasonInfo }) => {
  const { name, air_date, overview, still_path, episode_number } = seasonInfo;
  return (
    <div className='seasons-card'>
      <div className='season-card-image'>
        {still_path ? (
          <img src={`https://image.tmdb.org/t/p/w342/${still_path}`} alt='' />
        ) : (
          <img src={no_image} alt='' />
        )}
      </div>
      <div className='seasons-card-info'>
        <div className='season-info-upper'>
          <h4>{name}</h4>

          <p>
            {air_date ? air_date.split("-")[0] : null} | episode{" "}
            {episode_number}
          </p>
        </div>
        <div className='season-info-lower'>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCards;

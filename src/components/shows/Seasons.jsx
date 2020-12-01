import React from "react";
import no_image from "../../assets/no_image.png";
import { Link } from "react-router-dom";

const Seasons = ({ seasonInfo, id, episode_num }) => {
  const {
    poster_path,
    name,
    overview,
    air_date,
    episode_count,
    season_number,
  } = seasonInfo;

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
          <Link
            to={
              window.location.href.includes("showDetailsSeason")
                ? `/showDetailsEpisode/${id}/${seasonInfo.id}/${season_number}`
                : `/showDetailsSeason/${id}`
            }
          >
            <h4>{name}</h4>
          </Link>
          <p>
            {air_date ? air_date.split("-")[0] : null} | {episode_count}{" "}
            episodes{" "}
          </p>
        </div>
        <div className='season-info-lower'>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Seasons;

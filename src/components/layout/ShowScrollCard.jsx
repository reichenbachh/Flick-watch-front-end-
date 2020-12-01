import React from "react";
import { Link } from "react-router-dom";
import no_image from "../../assets/no_image.png";

const ScrollCard = ({ data }) => {
  const {
    id,
    media_type,
    original_language,
    title,
    vote_average,
    release_date,
    first_air_date,
    poster_path,
    name,
  } = data;

  return (
    <Link to={id ? `/showDetails/${id}` : `/showDetails/${data.tmdb_id}`}>
      <div className='Movie-card-scroll'>
        {poster_path ? (
          <div className='card-img'>
            <img
              src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
              alt=''
              srcSet=''
            />
          </div>
        ) : (
          <div className='card-img'>
            <img src={no_image} alt='' srcSet='' />
          </div>
        )}

        <div className='details'>
          <div className='deText'>
            {release_date ? (
              <div className='date'>
                {" "}
                <p>{release_date}</p>{" "}
              </div>
            ) : (
              <div className='date'>
                {" "}
                <p>{first_air_date}</p>{" "}
              </div>
            )}

            {media_type ? (
              <div className='media'>
                <p>{media_type}</p>
              </div>
            ) : (
              <div className='media'>
                <p>Tv</p>
              </div>
            )}

            {title ? (
              <div className='name'>{title}</div>
            ) : (
              <div className='name'>{name}</div>
            )}
          </div>
          <div className='rating'>
            <p>
              <span className='rate'>{vote_average}</span>/10
            </p>
            <p>
              <span className='rate'>{original_language}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ScrollCard;

import React from "react";

const ScrollCard = ({ data }) => {
  const {
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
    <div className='Movie-card-scroll'>
      <div className='card-img'>
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt=''
          srcSet=''
        />
      </div>
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
  );
};

export default ScrollCard;

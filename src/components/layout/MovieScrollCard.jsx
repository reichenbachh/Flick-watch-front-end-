import React from "react";
import { Link } from "react-router-dom";
import no_image from "../../assets/no_image.png";
import ReactTooltip from "react-tooltip";
const MovieScrollCard = ({ data, removeFlick, flick_id }) => {
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
    <div className='Movie-card-scroll'>
      {poster_path ? (
        <Link to={id ? `/movieDetails/${id}` : `/movieDetails/${data.tmdb_id}`}>
          <div className='card-img'>
            <img
              src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
              alt=''
              srcSet=''
            />
          </div>
        </Link>
      ) : (
        <Link to={id ? `/movieDetails/${id}` : `/movieDetails/${data.tmdb_id}`}>
          <div className='card-img'>
            <img src={no_image} alt='' srcSet='' />
          </div>
        </Link>
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
            <span className='rate'>
              {original_language ? original_language : data.language}
            </span>
          </p>
          {window.location.href.includes("trackedFlicks") ? (
            <p>
              <i
                onClick={() => {
                  removeFlick(flick_id, "movie", localStorage.getItem("id"));
                }}
                data-tip='untrack flick'
                class='fas fa-trash fa-lg'
              ></i>
              <ReactTooltip />
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MovieScrollCard;

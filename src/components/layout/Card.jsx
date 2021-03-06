import React from "react";
import { Link } from "react-router-dom";
import no_image_symb from "../../assets/no_image_symb.png";
const Card = ({ data }) => {
  const {
    id,
    media_type,
    original_language,
    title,
    vote_average,
    release_date,
    poster_path,
  } = data;
  if (media_type === "person") {
    return null;
  }
  if (media_type === "movie") {
    return (
      <Link to={`/movieDetails/${id}`}>
        <div className='Movie-card'>
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
              <img src={no_image_symb} alt='' srcSet='' />
            </div>
          )}

          <div className='details'>
            <div className='deText'>
              <div className='date'>
                {" "}
                <p>{release_date}</p>{" "}
              </div>
              <div className='media'>
                <p>{media_type}</p>
              </div>
              <div className='name'>{title}</div>
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
  } else if (media_type === "tv") {
    return (
      <Link to={`/showDetails/${id}`}>
        <div className='Movie-card'>
          <div className='card-img'>
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt=''
              srcSet=''
            />
          </div>
          <div className='details'>
            <div className='deText'>
              <div className='date'>
                {" "}
                <p>{release_date}</p>{" "}
              </div>
              <div className='media'>
                <p>{media_type}</p>
              </div>
              <div className='name'>{title}</div>
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
  }
};
export default Card;

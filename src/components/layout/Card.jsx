import React from "react";
import login_bg from "../../assets/login_bg.jpg";
const Card = ({ data }) => {
  const {
    media_type,
    original_language,
    title,
    vote_average,
    release_date,
    poster_path,
  } = data;
  return (
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
  );
};

export default Card;

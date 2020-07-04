import React from "react";
import login_bg from "../../assets/login_bg.jpg";
const TrendingItem = ({ trend }) => {
  const {
    media_type,
    original_language,
    title,
    vote_average,
    backdrop_path,
    release_date,
    poster_path,
  } = trend;
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

export default TrendingItem;

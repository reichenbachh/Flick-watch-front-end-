import React from "react";

const DetailsCard = ({ details }) => {
  const {
    genres,
    original_language,
    original_title,
    overview,
    release_date,
    status,
    runtime,
    vote_average,
    poster_path,
    backdrop_path,
  } = details;

  //Extract only year from release date
  let splitDate = release_date.split("-");
  console.log(genres);
  return (
    <div
      style={{
        background: `linear-gradient(to right, #0d0d0c 50%, transparent 100%),url(https://image.tmdb.org/t/p/original/${backdrop_path})no-repeat center center/cover`,
      }}
      className='details-card'
    >
      <div className='details-wrapper'>
        <div className='image'>
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt=''
            srcSet=''
          />
        </div>
        <div className='genInfo'>
          <div className='info'>
            <div className='Info-primary'>
              <h1>{original_title}</h1>
              <p>{splitDate[0]}</p>
            </div>
            <div className='info-secondary'>
              <div className='runtime'>
                <h4>{runtime}mins</h4>
              </div>
              <div className='ratings'>
                <h4>
                  <span className='rate'>{vote_average}</span>/10
                </h4>
              </div>
              <div className='tags'>
                {genres.map((genre) => (
                  <p key={genre.id}>{genre.name},</p>
                ))}
              </div>
            </div>
          </div>
          <div className='overview'>
            <p>{overview}</p>
          </div>
          <div className='options'>
            <i class='fas fa-plus '></i>
            <i class='fas fa-play '></i>
            <i class='fas fa-globe '></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;

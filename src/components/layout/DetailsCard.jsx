import React from "react";
import { useMediaQuery } from "react-responsive";

const DetailsCard = ({ details }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 650px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 650px)" });
  const {
    genres,
    original_title,
    overview,
    release_date,
    runtime,
    vote_average,
    poster_path,
    backdrop_path,
  } = details;

  //Extract only year from release date
  let splitDate = release_date.split("-");
  return (
    <div>
      {isDesktopOrLaptop && (
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
                <i className='fas fa-plus '></i>
                <i className='fas fa-play '></i>
                <i className='fas fa-globe '></i>
              </div>
            </div>
          </div>
        </div>
      )}
      {isTabletOrMobile && (
        <div
          style={{
            background: `linear-gradient(to top, #0d0d0c 50%, transparent 100%),url(https://image.tmdb.org/t/p/original/${backdrop_path})no-repeat center center/cover`,
          }}
          className='details-card'
        >
          <div className='details-wrapper'>
            <div className='row-1'>
              <div className='image'>
                <img
                  src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                  alt=''
                  srcSet=''
                />
              </div>
              <div className='info'>
                <div className='Info-primary'>
                  <h1>{original_title}</h1>
                  <p>{splitDate[0]}</p>
                </div>
                <div className='info-secondary'>
                  <div className='info-row-1'>
                    <div className='runtime'>
                      <h4>{runtime}mins</h4>
                    </div>
                    <div className='ratings'>
                      <h4>
                        <span className='rate'>{vote_average}</span>/10
                      </h4>
                    </div>
                  </div>

                  <div className='tags'>
                    <p>{genres[0].name}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='genInfo'>
              <div className='overview'>
                <p>{overview}</p>
              </div>
              <div className='options'>
                <i className='fas fa-plus '></i>
                <i className='fas fa-play '></i>
                <i className='fas fa-globe '></i>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsCard;

import React from "react";
import { useMediaQuery } from "react-responsive";
import ReactTooltip from "react-tooltip";
import TrailerModal from "./TrailerModal";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import no_image from "../../assets/no_image.png";

const DetailsCard = ({ path, details, modal, onOpenModal, onCloseModal }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 650px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 650px)" });
  const {
    genres,
    homepage,
    original_title,
    original_name,
    overview,
    first_air_date,
    episode_run_time,
    release_date,
    runtime,
    vote_average,
    poster_path,
    backdrop_path,
  } = details;
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
            {poster_path ? (
              <div className='image'>
                <img
                  src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                  alt=''
                  srcSet=''
                />
              </div>
            ) : (
              <div className='image'>
                <img src={no_image} alt='' srcSet='' />
              </div>
            )}

            <div className='genInfo'>
              <div className='info'>
                <div className='Info-primary'>
                  <h1>{original_title ? original_title : original_name}</h1>
                  <p>
                    {release_date
                      ? release_date.split("-")[0]
                      : first_air_date.split("-")[0]}
                  </p>
                </div>
                <div className='info-secondary'>
                  <div className='runtime'>
                    <h4>
                      {runtime || runtime === 0 ? runtime : episode_run_time[0]}
                      mins
                    </h4>
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
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  data-tip='Track flick'
                  href={homepage}
                >
                  <i className='fas fa-plus '></i>
                </a>
                <ReactTooltip />
                <a onClick={onOpenModal} data-tip='watch trailer'>
                  <i className='fas fa-play '></i>
                </a>
                <ReactTooltip />
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  data-tip='visit website'
                  href={homepage}
                >
                  <i className='fas fa-globe '></i>
                </a>
                <ReactTooltip />
              </div>
            </div>
          </div>
          <Modal open={modal} onClose={onCloseModal} center>
            <TrailerModal path={path} />
          </Modal>
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
                  src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
                  alt=''
                  srcSet=''
                />
              </div>
              <div className='info'>
                <div className='Info-primary'>
                  <h1>{original_title}</h1>
                  <p>
                    {release_date
                      ? release_date.split("-")[0]
                      : first_air_date.split("-")[0]}
                  </p>
                </div>
                <div className='info-secondary'>
                  <div className='info-row-1'>
                    <div className='runtime'>
                      <h4>
                        {runtime || runtime === 0
                          ? runtime
                          : episode_run_time[0]}
                        mins
                      </h4>
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
                <a href='#!'>
                  <i className='fas fa-plus '></i>
                </a>
                <a onClick={onOpenModal}>
                  <i className='fas fa-play '></i>
                </a>
                <a target='_blank' rel='noopener noreferrer' href={homepage}>
                  <i className='fas fa-globe '></i>
                </a>
              </div>
            </div>
          </div>
          <Modal open={modal} onClose={onCloseModal}>
            <TrailerModal path={path} />
          </Modal>
        </div>
      )}
    </div>
  );
};

export default DetailsCard;

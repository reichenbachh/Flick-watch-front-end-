import React from "react";
import no_image from "../../assets/no_image.png";
import { Link, withRouter } from "react-router-dom";

const SimilarScrollCard = ({ data }) => {
  const {
    backdrop_path,
    vote_average,
    original_title,
    release_date,
    id,
  } = data;
  return (
    <Link to={`/movieDetails/${id}`}>
      {" "}
      <div className='similar-scroll-card'>
        <div className='img-overlay'></div>
        {backdrop_path ? (
          <img
            className='sim-scroll-img'
            src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`}
            alt=''
            srcSet=''
          />
        ) : (
          //@todo, create landscape place holder for no image
          <img className='sim-scroll-img' src={no_image} alt='' srcSet='' />
        )}

        <div className='text-wrap'>
          <div className='text'>
            <h4>{original_title} </h4>
            <p>
              {" "}
              <span className='rate'>{vote_average}</span>/10{" "}
            </p>
            <p>{release_date} </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default withRouter(SimilarScrollCard);

import React from "react";
import no_image_landscape from "../../assets/no_image_landscape.png";
import { Link, withRouter } from "react-router-dom";

const SimilarScrollCardShow = ({ data }) => {
  const {
    backdrop_path,
    vote_average,
    original_title,
    release_date,
    original_name,
    id,
  } = data;
  return (
    <Link to={`/showDetails/${id}`}>
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
          <img
            className='sim-scroll-img'
            src={no_image_landscape}
            alt=''
            srcSet=''
          />
        )}

        <div className='text-wrap'>
          <div className='text'>
            <h4>{original_title ? original_title : original_name} </h4>
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

export default withRouter(SimilarScrollCardShow);

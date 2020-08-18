import React from "react";

const SimilarScrollCard = ({ data }) => {
  console.log(data);
  const { backdrop_path, vote_average, original_title, release_date } = data;
  return (
    <div className='similar-scroll-card'>
      <div className='img-overlay'></div>
      <img
        className='sim-scroll-img'
        src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`}
        alt=''
        srcset=''
      />
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
  );
};

export default SimilarScrollCard;

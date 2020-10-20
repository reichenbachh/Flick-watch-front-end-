import React from "react";
import { connect } from "react-redux";
import { getNextPageMovie, getPrevPageMovie } from "../../actions/SearchAction";

const MovieSearchPaginate = ({
  query,
  getNextPageMovie,
  getPrevPageMovie,
  total_pages,
  page,
  match,
}) => {
  console.log(page, total_pages);
  let nextPage = page + 1;
  let prevPage = page - 1;
  const nextPageClick = () => {
    getNextPageMovie(query, nextPage);
  };
  const prevPageClick = () => {
    getPrevPageMovie(query, prevPage);
  };
  if (page === 1) {
    return (
      <div className='pag-links'>
        <div className='nextBtn'>
          <button onClick={nextPageClick}>Next</button>
        </div>
      </div>
    );
  } else if (page === total_pages) {
    return (
      <div className='pag-links'>
        <div className='prevBtn'>
          <button onClick={prevPageClick}>Prev</button>
        </div>
      </div>
    );
  }
  return (
    <div className='pag-links'>
      <div className='prevBtn'>
        <button onClick={prevPageClick}>Prev</button>
      </div>
      <div className='nextBtn'>
        <button onClick={nextPageClick}>Next</button>
      </div>
    </div>
  );
};

export default connect(null, { getNextPageMovie, getPrevPageMovie })(
  MovieSearchPaginate
);

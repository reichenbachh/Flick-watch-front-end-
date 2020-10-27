import React from "react";
import { connect } from "react-redux";
import { getNextPageTV, getPrevPageTV } from "../../actions/SearchAction";

const TvSearchPaginate = ({
  query,
  getNextPageTV,
  getPrevPageTV,
  total_pages,
  page,
  match,
}) => {
  console.log(match);
  let nextPage = page + 1;
  let prevPage = page - 1;
  const nextPageClick = () => {
    getNextPageTV(query, nextPage);
  };
  const prevPageClick = () => {
    getPrevPageTV(query, prevPage);
  };
  if (total_pages === 1) {
    return null;
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

export default connect(null, { getNextPageTV, getPrevPageTV })(
  TvSearchPaginate
);

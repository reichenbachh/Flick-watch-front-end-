import React from "react";
import { connect } from "react-redux";
import { getNextPage, getPrevPage } from "../../actions/TrendingActions";

const PaginateLinks = ({
  getNextPage,
  getPrevPage,
  total_pages,
  page,
  match,
}) => {
  console.log(match);
  let nextPage = page + 1;
  let prevPage = page - 1;
  const nextPageClick = () => {
    getNextPage(nextPage);
  };
  const prevPageClick = () => {
    getPrevPage(prevPage);
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
  } else if (page === 1) {
    return (
      <div className='pag-links'>
        <div className='nextBtn'>
          <button onClick={nextPageClick}>Next</button>
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

export default connect(null, { getNextPage, getPrevPage })(PaginateLinks);

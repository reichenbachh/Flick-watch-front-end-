import React from "react";
import { connect } from "react-redux";
import { getNextPage, getPrevPage } from "../../actions/TrendingActions";
const PaginateLinks = ({
  trending: { trending },
  getPrevPage,
  getNextPage,
}) => {
  let { page, total_pages } = trending;
  let nextPage = page + 1;
  let prevPage = page - 1;
  const nextPageClick = () => {
    getNextPage(nextPage);
  };
  const prevPageClick = () => {
    getPrevPage(prevPage);
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
      <div className='nextBtn'>
        <button onClick={nextPageClick}>Next</button>
      </div>
      <div className='prevBtn'>
        <button onClick={prevPageClick}>Prev</button>
      </div>
    </div>
  );
};

const mapToStateProps = (state) => ({
  trending: state.trending,
});
export default connect(mapToStateProps, { getNextPage, getPrevPage })(
  PaginateLinks
);

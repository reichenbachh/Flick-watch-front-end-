import React, { useState } from "react";
import { connect } from "react-redux";
import Nav from "../layout/Nav";
import { searchFlick } from "../../actions/SearchAction";
import Preloader from "../layout/Preloader";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";

const Search = ({
  search: { error, loading, searchData, totalPages },
  searchFlick,
}) => {
  const [searchState, setSearchState] = useState("");
  const [radioState, setRadioState] = useState("");

  const handleRadio = (e) => {
    setRadioState(e.target.value);
  };
  const onChange = (e) => {
    setSearchState(e.target.value);
  };
  const onSubmitSearch = () => {
    if (searchState === "") {
      ToastsStore.error("Please fill the search field");
    } else if (radioState === "") {
      ToastsStore.error("Please choose a category,movies or tv shows");
    } else {
      searchFlick(searchState, radioState);
    }
  };

  if (loading) {
    return (
      <div id='trending_area_loader'>
        <div className='title'>
          <div className='content'>
            <Preloader />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='search-area'>
      <Nav />
      <div className='search-wrapper'>
        <div className='search_box'>
          <input type='text' placeholder='search flick' onChange={onChange} />
          <a onClick={onSubmitSearch} href='#!'>
            <i className='fas fa-search srch'></i>
          </a>
        </div>
        <div className='filter-options'>
          <div className='radio'>
            <input
              type='radio'
              onChange={handleRadio}
              name='radioSelect'
              id='Movies'
              value='movie'
            />
            <label htmlFor='Movies'>Movies</label>
          </div>
          <div className='radio'>
            <input
              type='radio'
              onChange={handleRadio}
              name='radioSelect'
              id='Tv Shows'
              value='tv'
            />
            <label htmlFor='Tv Shows'>Tv Shows</label>
          </div>
        </div>
      </div>
      {searchData ? (
        <div className='search-content'>
          {searchData.results.map((data) => (
            <p>data.original_title</p>
          ))}
        </div>
      ) : null}
      {totalPages === 0 ? <h1>No results</h1> : null}
      <ToastsContainer
        position={ToastsContainerPosition.TOP_RIGHT}
        store={ToastsStore}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  search: state.search,
});

export default connect(mapStateToProps, { searchFlick })(Search);

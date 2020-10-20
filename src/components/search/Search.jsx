import React, { useState } from "react";
import { connect } from "react-redux";
import Nav from "../layout/Nav";
import { searchFlick, setLoading } from "../../actions/SearchAction";
import MovieSearchPaginate from "../layout/MovieSearchPaginate";
import TvSearchPaginate from "../layout/TvSearchPaginate";
import MoviesScrollCard from "../layout/MovieScrollCard";
import ShowScrollCard from "../layout/ShowScrollCard";
import Preloader from "../layout/Preloader";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";

const Search = ({
  search: { error, loading, tvSearchData, movieSearchData, query },
  searchFlick,
}) => {
  const [searchState, setSearchState] = useState("");
  const [activeLinkState, setActiveLinkState] = useState("movies");

  const onChange = (e) => {
    setSearchState(e.target.value);
  };

  const switchToTv = () => {
    setActiveLinkState("series");
  };
  const switchToMovies = () => {
    setActiveLinkState("movies");
  };
  const onSubmitSearch = () => {
    if (searchState === "") {
      ToastsStore.error("Please fill the search field");
    } else {
      setLoading();
      searchFlick(searchState);
    }
  };

  const submitOnEnter = (e) => {
    if (e.key === "Enter") {
      if (searchState === "") {
        ToastsStore.error("Please fill the search field");
      } else {
        setLoading();
        searchFlick(searchState);
      }
    }
  };
  return (
    <div onKeyPress={submitOnEnter} className='search-area'>
      <Nav />
      <div className='search-wrapper'>
        <div className='search_box'>
          <input type='text' placeholder='search flick' onChange={onChange} />
          <a onClick={onSubmitSearch} href='#!'>
            <i className='fas fa-search srch'></i>
          </a>
        </div>
        <div className='filter-options'>
          <div className='movies-tab'>
            {activeLinkState === "movies" ? (
              <a href='#!' className='active' onClick={switchToMovies}>
                Movies
              </a>
            ) : (
              <a href='#!' onClick={switchToMovies}>
                Movies
              </a>
            )}
          </div>
          <div className='tv-tab'>
            {activeLinkState === "series" ? (
              <a href='#!' className='active' onClick={switchToTv}>
                Shows
              </a>
            ) : (
              <a href='#!' onClick={switchToTv}>
                Shows
              </a>
            )}
          </div>
        </div>
      </div>
      <div className='search-page-content'>
        {loading && (
          <div className='search-preloader'>
            <Preloader />
          </div>
        )}
        {activeLinkState === "movies" && movieSearchData ? (
          <div>
            <div className='searh-content'>
              {movieSearchData.results.map((data) => (
                <div className='search-cards'>
                  <MoviesScrollCard data={data} key={data.id} />
                </div>
              ))}
            </div>
            <MovieSearchPaginate
              query={query}
              page={movieSearchData.page}
              total_pages={movieSearchData.total_pages}
            />
          </div>
        ) : null}
        {activeLinkState === "series" && tvSearchData ? (
          <div>
            <div className='searh-content'>
              {tvSearchData.results.map((data) => (
                <div className='search-cards'>
                  <ShowScrollCard data={data} key={data.id} />
                </div>
              ))}
            </div>
            <TvSearchPaginate
              query={query}
              page={tvSearchData.page}
              total_pages={tvSearchData.total_pages}
            />
          </div>
        ) : null}
      </div>
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

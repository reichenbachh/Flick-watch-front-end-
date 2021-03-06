import React, { useEffect, useState } from "react";
import Nav from "../layout/Nav";
import Preloader from "../layout/Preloader";
import { connect } from "react-redux";
import { getFlickList, removeFlick } from "../../actions/TrackedFlickActions";
import ShowScrollCard from "../layout/ShowScrollCard";
import MovieScrollCard from "../layout/MovieScrollCard";

const TrackedFlicks = ({
  getFlickList,
  removeFlick,
  flickList: { loading, flickListData, message },
}) => {
  useEffect(() => {
    getFlickList(localStorage.getItem("id"));
    //eslint-disable-next-line
  }, [message]);
  const [activeLinkState, setActiveLinkState] = useState("movies");

  const switchToTv = () => {
    setActiveLinkState("series");
  };
  const switchToMovies = () => {
    setActiveLinkState("movies");
  };

  if (loading === true || flickListData === null) {
    return (
      <div id='trending_area_loader'>
        <div className='title'>
          <div className='content'>
            <Preloader />
          </div>
        </div>
      </div>
    );
  } else if (message === "no tracked movies") {
    return (
      <div className='trackedFlicks-page'>
        <Nav />
        <div className='leading'>
          <h1>
            Your <span>Tracked</span> Flicks
          </h1>

          <div className='trackedflicksArea '>
            <h1>You havent Tracked any Movies or Shows</h1>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='trackedFlicks-page'>
        <Nav />
        <div className='leading'>
          <h1>
            Your <span>Tracked</span> Flicks
          </h1>
          <div className='tracked-flick-options'>
            <div className='tv-option'>
              {activeLinkState === "movies" ? (
                <a href='#!' onClick={switchToMovies} className='active'>
                  Movies
                </a>
              ) : (
                <a href='#!' onClick={switchToMovies}>
                  Movies
                </a>
              )}
            </div>
            <div className='movie-option'>
              {activeLinkState === "series" ? (
                <a href='#!' onClick={switchToTv} className='active'>
                  Shows
                </a>
              ) : (
                <a href='#!' onClick={switchToTv}>
                  Shows
                </a>
              )}
            </div>
          </div>
          {flickListData.movieList.length === 0 &&
          activeLinkState === "movies" ? (
            <div className='trackedflicksArea '>
              <h1>You havent Tracked any Movies</h1>
            </div>
          ) : (
            <div className='tracked-flick-content'>
              {activeLinkState === "movies"
                ? flickListData.movieList.map((data) => (
                    <MovieScrollCard
                      flick_id={data._id}
                      key={data._id}
                      data={data}
                      removeFlick={removeFlick}
                    />
                  ))
                : null}
            </div>
          )}
          {flickListData.showList.length === 0 &&
          activeLinkState === "series" ? (
            <div className='trackedflicksArea '>
              <h1>You havent Tracked Shows</h1>
            </div>
          ) : (
            <div className='tracked-flick-content'>
              {activeLinkState === "series"
                ? flickListData.showList.map((data) => (
                    <ShowScrollCard
                      flick_id={data._id}
                      key={data._id}
                      removeFlick={removeFlick}
                      data={data}
                    />
                  ))
                : null}
            </div>
          )}
        </div>
      </div>
    );
  }
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  flickList: state.flickList,
});

export default connect(mapStateToProps, { getFlickList, removeFlick })(
  TrackedFlicks
);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMovieData } from "../../actions/MovieActions";
import Preloader from "../layout/Preloader";
import Nav from "../layout/Nav";
import Upcoming from "./Upcoming";
import Popular from "./Popular";
import TopRated from "./TopRated";

const MoviePage = ({
  movie: { upcoming, loading, topRated, popular },
  getMovieData,
}) => {
  useEffect(() => {
    getMovieData();
    //eslint-disable-next-line
  }, []);
  if (loading || upcoming === null) {
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
    <div id='movie_area'>
      <Nav />
      <Upcoming upcoming={upcoming} />
      <Popular popular={popular} />
      <TopRated topRated={topRated} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});
export default connect(mapStateToProps, { getMovieData })(MoviePage);

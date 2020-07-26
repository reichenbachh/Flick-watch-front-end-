import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUpcomingMovies } from "../../actions/MovieActions";
import Preloader from "../layout/Preloader";
import ScrollCard from "../layout/ScrollCard";

const Upcoming = ({ movie: { latest, loading }, getUpcomingMovies }) => {
  useEffect(() => {
    getUpcomingMovies();
    //eslint-disable-next-line
  }, []);
  console.log(latest, loading);
  if (loading || latest === null) {
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
    <div className='upcoming-scroll'>
      <div className='title'>
        <h1>
          Upcoming <span className='title-span'>Global</span>
        </h1>
      </div>
      <div className='content-scroll'>
        {latest.results.map((data) => (
          <ScrollCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});
export default connect(mapStateToProps, { getUpcomingMovies })(Upcoming);

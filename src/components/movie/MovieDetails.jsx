import React, { useEffect } from "react";
import Preloader from "../layout/Preloader";
import Nav from "../layout/Nav";
import { connect } from "react-redux";
import { fetchMovieDetails, clearState } from "../../actions/MovieActions";
import DetailsCard from "../layout/DetailsCard";

const MovieDetails = ({
  movie: { details },
  loading,
  fetchMovieDetails,
  clearState,
  match,
}) => {
  useEffect(() => {
    clearState();
    fetchMovieDetails(match.params.id);
    //eslint-disable-next-line
  }, []);

  if (loading === null || details === null) {
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
    <div className='movie-details'>
      <Nav />
      <DetailsCard details={details} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});
export default connect(mapStateToProps, { fetchMovieDetails, clearState })(
  MovieDetails
);

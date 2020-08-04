import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchDetails } from "../../actions/MovieActions";

const MovieDetails = ({ movie: { details }, loading, fetchDetails, match }) => {
  useEffect(() => {
    fetchDetails(match.params.id);
    //eslint-disable-next-line
  }, []);

  if (loading === null || details === null) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${details.backdrop_path})`,
        height: `100vh`,
      }}
      className='movie-details'
    >
      lets gooo
    </div>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});
export default connect(mapStateToProps, { fetchDetails })(MovieDetails);

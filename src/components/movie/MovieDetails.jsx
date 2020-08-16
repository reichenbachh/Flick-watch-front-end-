import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { fetchMovieDetails, clearState } from "../../actions/MovieActions";

import Preloader from "../layout/Preloader";
import Nav from "../layout/Nav";
import DetailsCard from "../layout/DetailsCard";
import Details from "../layout/Details";

const MovieDetails = ({
  movie: { details, trailer },
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

  const [modal, setModalState] = useState(false);

  const onOpenModal = () => {
    setModalState(true);
  };

  const onCloseModal = () => {
    setModalState(false);
  };
  if (loading === null || details === null || trailer === null) {
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
  const path = trailer.results.map((item) => {
    return item.key;
  });
  return (
    <div className='movie-details'>
      <Nav />
      <DetailsCard
        path={path}
        modal={modal}
        onOpenModal={onOpenModal}
        onCloseModal={onCloseModal}
        details={details}
        id={match.params.id}
      />
      <Details details={details} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});
export default connect(mapStateToProps, { fetchMovieDetails, clearState })(
  MovieDetails
);

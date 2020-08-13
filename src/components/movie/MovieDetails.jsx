import React, { useEffect, useState } from "react";
import Preloader from "../layout/Preloader";
import Nav from "../layout/Nav";
import { connect } from "react-redux";
import { fetchMovieDetails, clearState } from "../../actions/MovieActions";
import DetailsCard from "../layout/DetailsCard";

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
  console.log(trailer);
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});
export default connect(mapStateToProps, { fetchMovieDetails, clearState })(
  MovieDetails
);

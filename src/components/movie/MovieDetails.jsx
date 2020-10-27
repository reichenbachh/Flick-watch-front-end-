import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { fetchMovieDetails, clearState } from "../../actions/MovieActions";

import Preloader from "../layout/Preloader";
import SimilarScrollCard from "../layout/SimilarScrollCard";
import Nav from "../layout/Nav";
import DetailsCard from "../layout/DetailsCard";
import Details from "../layout/Details";

const MovieDetails = ({
  movie: { details, trailer, similar },
  auth: { user },
  loading,
  fetchMovieDetails,
  clearState,
  match,
  history,
}) => {
  useEffect(() => {
    clearState();
    fetchMovieDetails(match.params.id);
  }, [match]);
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
        user={user}
        path={path}
        modal={modal}
        onOpenModal={onOpenModal}
        onCloseModal={onCloseModal}
        details={details}
        id={match.params.id}
      />
      <div className='details-below'>
        {similar.results.length === 0 ? (
          ""
        ) : (
          <div className='details-right'>
            <div className='similar-wrapper'>
              <h1>
                Similar<span className='title-span'>Movies</span>
              </h1>

              <div className='similar-scroll'>
                {similar.results.map((data) => (
                  <SimilarScrollCard key={data.id} data={data} />
                ))}
              </div>
            </div>
          </div>
        )}

        <div className='details'>
          <Details details={details} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie,
  auth: state.auth,
});
export default connect(mapStateToProps, { fetchMovieDetails, clearState })(
  MovieDetails
);

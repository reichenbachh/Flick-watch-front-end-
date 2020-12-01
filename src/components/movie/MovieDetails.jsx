import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { fetchMovieDetails, clearState } from "../../actions/MovieActions";
import { trackFlick, clearFlickState } from "../../actions/TrackedFlickActions";

import Preloader from "../layout/Preloader";
import SimilarScrollCard from "../layout/SimilarScrollCard";
import Nav from "../layout/Nav";
import DetailsCard from "../layout/DetailsCard";
import Details from "../layout/Details";

import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";

const MovieDetails = ({
  movie: { details, trailer, similar },
  auth: { user },
  flickList: { message, error, success },
  loading,
  trackFlick,
  clearFlickState,
  fetchMovieDetails,
  clearState,
  match,
  history,
}) => {
  useEffect(() => {
    clearState();
    fetchMovieDetails(match.params.id);
  }, [match]);

  useEffect(() => {
    if (message) {
      ToastsStore.success(message);
      clearFlickState();
    }
    if (error) {
      ToastsStore.error(error);
      clearFlickState();
    }
  }, [message, error]);
  const [modal, setModalState] = useState(false);

  const onOpenModal = () => {
    setModalState(true);
  };

  const onCloseModal = () => {
    setModalState(false);
  };
  const trackFlickHandler = async (e, payloadData) => {
    e.preventDefault();
    if (!user) {
      return ToastsStore.error("Please login to track flick");
    } else {
      let data = {
        user: localStorage.getItem("id"),
        payloadName: "movie",
        payloadData: payloadData,
      };

      trackFlick(data);
    }
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
        trackFlickHandler={trackFlickHandler}
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
        <ToastsContainer
          position={ToastsContainerPosition.TOP_RIGHT}
          store={ToastsStore}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie,
  auth: state.auth,
  flickList: state.flickList,
});
export default connect(mapStateToProps, {
  fetchMovieDetails,
  clearFlickState,
  clearState,
  trackFlick,
})(MovieDetails);

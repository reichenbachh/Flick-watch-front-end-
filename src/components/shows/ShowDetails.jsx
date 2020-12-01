import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getShowDetails, clearState } from "../../actions/TvShowActions";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";

import { trackFlick, clearFlickState } from "../../actions/TrackedFlickActions";
import Nav from "../layout/Nav";
import DetailsCard from "../layout/DetailsCard";
import Preloader from "../layout/Preloader";
import DetailsShow from "../layout/DetailsShow";
import Seasons from "../shows/Seasons";
import SeasonCardSingle from "../shows/SeasonCardSingle";
import SimilarScrollCardShow from "../layout/SimilarScrollCardShow";

const ShowDetails = ({
  match,
  trackFlick,
  clearFlickState,
  flickList: { error, message },
  auth: { user },
  tvShow: { loading, details, trailer, similar },
  getShowDetails,
  clearState,
}) => {
  useEffect(() => {
    clearState();
    getShowDetails(match.params.id);
  }, [match.params.id]);

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
        payloadName: "show",
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
  console.log("yes");
  return (
    <div className='show-details'>
      <Nav />
      <DetailsCard
        user={user}
        trackFlickHandler={trackFlickHandler}
        path={path}
        modal={modal}
        onOpenModal={onOpenModal}
        onCloseModal={onCloseModal}
        details={details}
        id={match.params.id}
      />
      <div className='details-below'>
        <div className='details-right'>
          <div className='similar-wrapper'>
            <h1>
              Current<span className='title-span'> season</span>
            </h1>
            {details.seasons.length === 1 ? (
              <SeasonCardSingle
                id={match.params.id}
                seasonInfo={details.seasons}
                key={details.seasons.id}
              />
            ) : (
              details.seasons.map((season, index) => {
                if (details.seasons.length - 2 === index) {
                  return (
                    <Seasons
                      id={match.params.id}
                      seasonInfo={season}
                      key={season.id}
                    />
                  );
                }
              })
            )}
          </div>
          {similar.results.length === 0 ? (
            ""
          ) : (
            <div>
              {" "}
              <h1>
                Similar<span className='title-span'> Shows</span>
              </h1>
              <div className='similar-scroll'>
                {similar.results.map((data) => (
                  <SimilarScrollCardShow key={data.id} data={data} />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className='details'>
          <DetailsShow details={details} />
        </div>
      </div>
      <ToastsContainer
        position={ToastsContainerPosition.TOP_RIGHT}
        store={ToastsStore}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  tvShow: state.tvShow,
  auth: state.auth,
  flickList: state.flickList,
});

export default connect(mapStateToProps, {
  getShowDetails,
  clearState,
  trackFlick,
  clearFlickState,
})(ShowDetails);

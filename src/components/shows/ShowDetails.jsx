import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getShowDetails, clearState } from "../../actions/TvShowActions";

import Nav from "../layout/Nav";
import DetailsCard from "../layout/DetailsCard";
import Preloader from "../layout/Preloader";
import DetailsShow from "../layout/DetailsShow";
import SimilarScrollCard from "../layout/SimilarScrollCard";

const ShowDetails = ({
  match,
  tvShow: { loading, details, trailer },
  getShowDetails,
  clearState,
}) => {
  useEffect(() => {
    clearState();
    getShowDetails(match.params.id);
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
    <div className='show-details'>
      <Nav />
      <DetailsCard
        path={path}
        modal={modal}
        onOpenModal={onOpenModal}
        onCloseModal={onCloseModal}
        details={details}
        id={match.params.id}
      />
      <div className='details-below'>
        <div className='similar-wrapper'>
          <h1>
            Similar<span className='title-span'>Movies</span>
          </h1>
          {/* <div className='similar-scroll'>
            {similar.results.map((data) => (
              <SimilarScrollCard key={data.id} data={data} />
            ))}
          </div> */}
        </div>
        <div className='details'>
          <DetailsShow details={details} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tvShow: state.tvShow,
});

export default connect(mapStateToProps, { getShowDetails, clearState })(
  ShowDetails
);

import React, { useState, useEffect } from "react";
import Nav from "../layout/Nav";
import DetailsCard from "../layout/DetailsCard";
import Preloader from "../layout/Preloader";
import { connect } from "react-redux";
import { getShowDetails, clearState } from "../../actions/TvShowActions";

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
    </div>
  );
};

const mapStateToProps = (state) => ({
  tvShow: state.tvShow,
});

export default connect(mapStateToProps, { getShowDetails, clearState })(
  ShowDetails
);

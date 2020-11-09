import React, { useEffect } from "react";
import Nav from "../layout/Nav";
import Preloader from "../layout/Preloader";
import { connect } from "react-redux";
import { getFlickList } from "../../actions/TrackedFlickActions";

const TrackedFlicks = ({
  getFlickList,
  flickList: { flickListData, loading },
}) => {
  useEffect(() => {
    setTimeout(() => getFlickList(localStorage.getItem("id")), 1000);

    //eslint-disable-next-line
  }, []);
  if (loading || !flickListData) {
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
    <div className='trackedFlicks-page'>
      {console.log(flickListData)}
      <Nav />
      <div className='leading'>
        <h1>
          Your <span>Tracked</span> Flicks
        </h1>
        <div className='tracked-flick-options'>
          <div className='tv-option'>Movies</div>
          <div className='movie-option'>Shows</div>
        </div>
      </div>

      <div className='trackedflicksArea'>
        {flickListData.message === "no tracked movies" ? (
          <h1>You havent tracked any flicks</h1>
        ) : null}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  flickList: state.flickList,
});

export default connect(mapStateToProps, { getFlickList })(TrackedFlicks);

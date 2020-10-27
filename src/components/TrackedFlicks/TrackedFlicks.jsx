import React, { useEffect } from "react";
import Nav from "../layout/Nav";
import { connect } from "react-redux";
import { getFlickList } from "../../actions/TrackedFlickActions";
import ShowScrollCard from "../layout/ShowScrollCard";
import MovieScrollCard from "../layout/MovieScrollCard";

const TrackedFlicks = ({ auth: { user }, getFlickList }) => {
  useEffect(() => {
    getFlickList(user.id);
  }, [user]);
  return (
    <div className='trackedFlicks-page'>
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

      <div className='trackedflicksArea'></div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  flickList: state.flickList,
});

export default connect(mapStateToProps, { getFlickList })(TrackedFlicks);

import React from "react";
import { connect } from "react-redux";
import { getShowDetails } from "../../actions/TvShowActions";

const showDetails = ({
  match,
  tvShow: { loading, details },
  getShowDetails,
}) => {
  return (
    <div>
      <h1>Lets gooooooo</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tvShow: state.tvShow,
});

export default connect(mapStateToProps)(showDetails);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTvShowData } from "../../actions/TvShowActions";
import Preloader from "../layout/Preloader";
import Nav from "../layout/Nav";
import AiringToday from "./AiringToday";
import Popular from "./Popular";
import TopRated from "./TopRatedShows";

const ShowsPage = ({
  tvShow: { popular, airingToday, topRated, loading },
  getTvShowData,
}) => {
  useEffect(() => {
    getTvShowData();
    //eslint-disable-next-line
  }, []);
  if (loading || popular === null) {
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
    <div id='show-area'>
      <Nav />
      <AiringToday airingToday={airingToday} />
      <Popular popular={popular} />
      <TopRated topRated={topRated} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  tvShow: state.tvShow,
});

export default connect(mapStateToProps, { getTvShowData })(ShowsPage);

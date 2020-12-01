import React, { useEffect } from "react";
import Nav from "../layout/Nav";
import { connect } from "react-redux";
import { getShowDetails } from "../../actions/TvShowActions";
import Preloader from "../layout/Preloader";
import Seasons from "../shows/Seasons";

const SeasonDetails = ({
  tvShow: { details, loading },
  match,
  getShowDetails,
}) => {
  useEffect(() => {
    getShowDetails(match.params.id);
  }, [getShowDetails, match.params]);

  if (loading === null || details === null) {
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
    <div className='season-details'>
      <Nav />
      <div className='season-content'>
        {details.seasons.map((info, index) => (
          <Seasons
            key={info.id}
            id={match.params.id}
            episode_num={index + 1}
            seasonInfo={info}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tvShow: state.tvShow,
});

export default connect(mapStateToProps, { getShowDetails })(SeasonDetails);

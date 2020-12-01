import React, { useEffect } from "react";
import Nav from "../layout/Nav";
import { connect } from "react-redux";
import { getShowEpisode } from "../../actions/TvShowActions";
import Preloader from "../layout/Preloader";
import EpisodeCards from "../shows/EpisodeCards";

const EpisodeDetails = ({
  match,
  tvShow: { episodeDetails, loading },
  getShowEpisode,
}) => {
  useEffect(() => {
    let seasonId = match.params.seasonid;
    let seasonNum = match.params.seasonNum;
    getShowEpisode(seasonNum, seasonId);
    //eslint-disable-next-line
  }, []);
  if (loading === null || episodeDetails === null) {
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
        {episodeDetails.episodes.map((info) => (
          <EpisodeCards key={info.id} seasonInfo={info} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tvShow: state.tvShow,
});

export default connect(mapStateToProps, { getShowEpisode })(EpisodeDetails);

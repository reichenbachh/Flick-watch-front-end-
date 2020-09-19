import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "../layout/Card";
import PaginateLinks from "../layout/PaginateLinks";
import Nav from "../layout/Nav";
import { getTrending } from "../../actions/TrendingActions";
import { loadUser } from "../../actions/authActions";
import Preloader from "../layout/Preloader";

const TrendingArea = ({
  trending: { loading, trending },
  getTrending,
  loadUser,
}) => {
  useEffect(() => {
    getTrending();
    loadUser();
    //eslint-disable-next-line
  }, []);

  if (loading || trending === null) {
    return (
      <div id='trending_area_loader'>
        <div className='title'>
          <div className='content'>
            <Preloader />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id='trending_area'>
        <Nav />
        <div className='title'>
          <h1>
            Trending <span className='title-span'>Global</span>
          </h1>
        </div>
        <div className='content'>
          {trending.results.map((data) => (
            <Card data={data} key={data.id} />
          ))}
        </div>
        <PaginateLinks />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  trending: state.trending,
  auth: state.auth,
});

export default connect(mapStateToProps, { getTrending, loadUser })(
  TrendingArea
);

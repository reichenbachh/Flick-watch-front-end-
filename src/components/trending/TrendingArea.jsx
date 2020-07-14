import React, { useEffect } from "react";
import { connect } from "react-redux";
import TrendingItem from "./TrendingItem";
import PaginateLinks from "../layout/PaginateLinks";
import Nav from "../layout/Nav";
import { getTrending } from "../../actions/movieActions";
import Preloader from "../layout/Preloader";

const TrendingArea = ({ movie: { loading, trending }, getTrending }) => {
  useEffect(() => {
    getTrending();
    console.log(getTrending);
    //eslint-disable-next-line
  }, []);

  if (loading || trending === null) {
    return (
      <div id='trending_area_loader'>
        <Nav />
        <div className='title'>
          <h1>
            Trending <span className='title-span'>Global</span>
          </h1>
          <div className='content'>
            <Preloader />
          </div>
        </div>
      </div>
    );
  } else {
    console.log(trending);
    const { page, pages_total, pages_results } = trending;
    return (
      <div id='trending_area'>
        <Nav />
        <div className='title'>
          <h1>
            Trending <span className='title-span'>Global</span>
          </h1>
        </div>
        <div className='content'>
          {trending.results.map((trend) => (
            <TrendingItem trend={trend} key={trend.id} />
          ))}
        </div>
        <PaginateLinks />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps, { getTrending })(TrendingArea);

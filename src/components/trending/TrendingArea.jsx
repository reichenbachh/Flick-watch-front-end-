import React, { useEffect } from "react";
import { connect } from "react-redux";
import TrendingItem from "./TrendingItem";
import Nav from "../layout/Nav";
import { getTrending } from "../../actions/movieActions";

const TrendingArea = ({ movie: { loading, trending }, getTrending }) => {
  useEffect(() => {
    getTrending();
    console.log(getTrending);
    //eslint-disable-next-line
  }, []);

  if (loading || trending === null) {
    return <h1>Loading</h1>;
  } else {
    console.log(trending);
    return (
      <div id='trending_area'>
        <Nav />
        <div className='title'>
          <h1>
            Trending <span className='title-span'>Global</span>
          </h1>
        </div>
        <div className='content'>
          {trending.map((trend) => (
            <TrendingItem trend={trend} key={trend.id} />
          ))}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps, { getTrending })(TrendingArea);

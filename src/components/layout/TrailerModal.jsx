import React from "react";
import ReactPlayer from "react-player";

const TrailerModal = ({ path }) => {
  if (path.length === 0) {
    return (
      <div className='trailer-wrapper'>
        <h1>No Trailers Available</h1>;
      </div>
    );
  }
  return (
    <div className='trailer-wrapper'>
      {/* <ReactPlayer url={`https://www.youtube.com/watch?v=${path[0]}`} /> */}
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${path[0]}`}
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default TrailerModal;

import React from "react";
import ReactPlayer from "react-player";

const TrailerModal = ({ path }) => {
  console.log(path.length);
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
      {/* <video
        typeof='video/mp4'
        controls
        autoPlay
        src={`https://www.youtube.com/watch?v=${path[0]}`}
      ></video> */}
    </div>
  );
};

export default TrailerModal;

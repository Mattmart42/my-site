import React from "react";
import shmackVideo from "../assets/images/shmack-video-small.mp4";
import shmackPoster from "../assets/images/shmack3.png";

const SHMACKVideo = () => {
  return (
    <div className="shmack-video">
      <video controls poster={shmackPoster}>
        <source src={shmackVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SHMACKVideo;
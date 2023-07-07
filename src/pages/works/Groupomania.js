import React, { useState, useRef } from "react";
import WorksComponent from "../../components/WorksComponent";
import video from "../../assets/videos/groupomania-video.mp4";
import transition from "../../utils/transitions";

const Groupomania = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="groupomania-container">
      <WorksComponent />

      <div className="container__video">
        <button className="container__video__btn" onClick={toggleVideo}>
          {isPlaying ? "ll Pause" : "► Play video"}
        </button>
        <video
          className="container__video__player"
          width="100%"
          src={video}
          type="video/mp4"
          loop
          ref={videoRef}
        ></video>
      </div>
    </section>
  );
};

export default transition(Groupomania);

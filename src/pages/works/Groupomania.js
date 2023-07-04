import React, { useState, useRef } from "react";
import WorksComponent from "../../components/WorksComponent";
import video from "../../assets/videos/groupomania-video.mp4";

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
      <button className="container__video-btn" onClick={toggleVideo}>
        {isPlaying ? "ll Pause" : "► Play video"}
      </button>
      <video
        className="container__video"
        width="100%"
        src={video}
        type="video/mp4"
        loop
        ref={videoRef}
      ></video>
    </section>
  );
};

export default Groupomania;

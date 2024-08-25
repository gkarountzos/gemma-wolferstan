import React from "react";

interface VideoProps {
  src: string;
  title: string;
}

const Video = ({ src, title }: VideoProps) => {
  return (
    <div className="video-container">
      <iframe
        src={src}
        title={title}
        width="100%"
        height="376"
        allowFullScreen
        className="rounded-md"
      />
    </div>
  );
};

export default Video;

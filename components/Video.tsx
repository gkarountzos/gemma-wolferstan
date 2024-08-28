import React, { useState } from "react";

interface VideoProps {
  src: string;
  title: string;
}

const Video = ({ src, title }: VideoProps) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className="video-container relative w-full pb-[56.25%] h-0 overflow-hidden rounded-md">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-white"></div>
        </div>
      )}
      <iframe
        src={src}
        title={title}
        allowFullScreen
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={handleLoad}
      />
    </div>
  );
};

export default Video;

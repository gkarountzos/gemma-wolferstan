import React, { useState } from "react";

interface VideoProps {
  src: string;
  title: string;
}

const Video = ({ src, title }: VideoProps) => {
  const [loading, setLoading] = useState(true);

  // Handler for when the iframe has loaded
  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className="video-container relative">
      {loading && (
        <div className="absolute rounded-md inset-0 flex items-center justify-center bg-black/30 z-10">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-white"></div>
        </div>
      )}
      <iframe
        src={src}
        title={title}
        width="100%"
        height="376"
        allowFullScreen
        className={`rounded-md transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={handleLoad}
      />
    </div>
  );
};

export default Video;

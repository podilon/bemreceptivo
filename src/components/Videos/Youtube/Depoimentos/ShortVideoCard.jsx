import { useState, memo } from "react";

const ShortVideoCard = memo(({ url, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = url.split("/embed/")[1]; // Extraindo ID do vídeo
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg?v=${new Date().getTime()}`;

  return (
    <div className="w-full flex justify-center">
      {isPlaying ? (
        <iframe
          width="315"
          height="560"
          src={`${url}?autoplay=1`}
          title={title}
          allowFullScreen
          className="w-full max-w-xs rounded-lg shadow-lg"
        ></iframe>
      ) : (
        <div
          className="relative cursor-pointer w-full max-w-xs"
          onClick={() => setIsPlaying(true)}
        >
          <img
            src={thumbnail}
            alt={title}
            className="w-full rounded-lg shadow-lg"
            loading="eager"  
            fetchpriority="high" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
            <svg
              className="w-12 h-12 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z"></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
});

export default ShortVideoCard;

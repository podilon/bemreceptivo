import { useState, useEffect, memo } from "react";

const VideoCard = memo(({ title, videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    setThumbnail(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
  }, [videoId]); // Atualiza o thumbnail ao mudar o vídeo

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
      <div
        className="relative w-full aspect-[9/16] cursor-pointer p-1 border-4 border-white shadow-lg rounded-2xl"
        onClick={() => setIsPlaying(true)}
      >
        {isPlaying ? (
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            src={thumbnail}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
            loading="lazy"
          />
        )}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 text-center">{title}</h2>
      </div>
    </div>
  );
});

export default VideoCard;

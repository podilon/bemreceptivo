import { useState, memo } from "react";

const VideoCard = memo(({ title, videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg?v=${new Date().getTime()}`;


  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
      <div className="relative w-full aspect-[9/16] cursor-pointer" onClick={() => setIsPlaying(true)}>
        {isPlaying ? (
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <img 
              src={thumbnail} 
              alt={title} 
              className="absolute top-0 left-0 w-full h-full object-cover" 
              loading="eager"  
              fetchpriority="high" 
               referrerPolicy="no-referrer"
              onError={(e) => e.target.src = "https://via.placeholder.com/480x360?text=Thumbnail+Indisponível"} // Fallback para erro
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"></path>
              </svg>
            </div>
          </>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 text-center">{title}</h2>
      </div>
    </div>
  );
});

export default VideoCard;

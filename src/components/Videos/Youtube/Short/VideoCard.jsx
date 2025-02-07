import "react";

const VideoCard = ({ title, videoUrl }) => {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
        <div className="relative w-full aspect-[9/16]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={videoUrl}
            title={title}            
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 text-center">{title}</h2>
        </div>
      </div>
    );
  };
  
  export default VideoCard;
  
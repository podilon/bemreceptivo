import  { memo } from "react";

const VideoCard = memo(({ url, title }) => {
  return (
    <div className="w-full flex justify-center">
      <iframe
        width="560"
        height="315"
        src={url}
        title={title}
        allowFullScreen
        className="w-full max-w-lg rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
});

export default VideoCard;

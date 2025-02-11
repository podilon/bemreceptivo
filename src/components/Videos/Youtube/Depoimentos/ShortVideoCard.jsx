import  { memo } from "react";

const ShortVideoCard = memo(({ url, title }) => {
  return (
    <div className="w-full flex justify-center">
      <iframe
        width="315"
        height="560"
        src={url}
        title={title}
        allowFullScreen
        className="w-full max-w-xs rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
});

export default ShortVideoCard;

import { useState, useEffect, memo } from "react";

const ShortVideoCard = memo(({ url, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    const videoId = url.split("/embed/")[1]; // Extraindo ID do vídeo
    setThumbnail(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
  }, [url]); // Atualiza o thumbnail quando a URL muda

  return (
    <div className="flex justify-center">
      <div className="relative w-[320px] h-[570px] p-2 bg-white border-4 border-white shadow-xl rounded-2xl">
        {isPlaying ? (
          <iframe
            src={`${url}?autoplay=1`}
            title={title}
            allowFullScreen
            className="w-full h-full rounded-xl shadow-lg"
          ></iframe>
        ) : (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover rounded-xl cursor-pointer"
            loading="eager"
            fetchpriority="high"
            referrerPolicy="no-referrer"
            onClick={() => setIsPlaying(true)} // Inicia o vídeo ao clicar
          />
        )}
      </div>
    </div>
  );
});

export default ShortVideoCard;

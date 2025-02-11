import { useMemo } from "react";
import VideoCard from "./VideoCard";

const VideoGallery = () => {
  const videos = useMemo(() => [
    { title: "Litoral Leste", videoId: "NDVaQ3yWsgY" },
    { title: "Litoral Oeste", videoId: "ybNZbaE7uSY" }
  ], []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 py-16 px-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
        Veja nossos passeios pelo Litoral Leste e Oeste do Ceará
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        {videos.map((video) => (
          <VideoCard key={video.videoId} title={video.title} videoId={video.videoId} />
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;

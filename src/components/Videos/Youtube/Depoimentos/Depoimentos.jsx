import "react";
import VideoCard from "./VideoCard";
import ShortVideoCard from "./ShortVideoCard";

const Depoimentos = () => {
  // Vídeos no formato 16:9
  const videosYoutube = [
    { url: "https://www.youtube.com/embed/Rh1gdxv_LVE", title: "Depoimento 1" },
    { url: "https://www.youtube.com/embed/op8AevAQ9NU", title: "Depoimento 2" },
  ];

  // Shorts do YouTube (formato vertical)
  const shortsYoutube = [
    { url: "https://www.youtube.com/embed/c5WLffdjBiM", title: "Short 1" },
    { url: "https://www.youtube.com/embed/uRgt9ADgabg", title: "Short 2" },
    { url: "https://www.youtube.com/embed/duPECGqIYJ8", title: "Short 3" },
    { url: "https://www.youtube.com/embed/2aKZO-5jogc", title: "Short 4" },
    { url: "https://www.youtube.com/embed/kFMxQkyjJWU", title: "Short 5" },
    { url: "https://www.youtube.com/embed/nkO8NyHTnWk", title: "Short 6" },
  ];

  return (
    <div id="depoimentos"className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-50 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">O que dizem sobre nós... Assistam os depoimentos!</h2>

      {/* Vídeos em formato 16:9 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
        {videosYoutube.map((video, index) => (
          <VideoCard key={index} url={video.url} title={video.title} />
        ))}
      </div>

      {/* Shorts do YouTube (formato vertical) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shortsYoutube.map((short, index) => (
          <ShortVideoCard key={index} url={short.url} title={short.title} />
        ))}
      </div>
    </div>
  );
};

export default Depoimentos;

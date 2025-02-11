const OptimizedImage = ({
  avifSrc,
  webpSrc,
  svgSrc,
  pngSrc,
  alt = "Imagem",
  className = "",
  width,
  height,
  loading = "lazy" // Permite configurar se deseja lazy loading ou não
}) => {
  // Ajusta automaticamente os caminhos das imagens no Vite
  const getImagePath = (src) => {
    if (!src) return null;
    return src.startsWith("http") ? src : `${import.meta.env.BASE_URL}${src.replace(/^\/+/, "")}`;
  };

  return (
    <picture>
      {avifSrc && <source srcSet={getImagePath(avifSrc)} type="image/avif" />}
      {webpSrc && <source srcSet={getImagePath(webpSrc)} type="image/webp" />}
      {svgSrc && <source srcSet={getImagePath(svgSrc)} type="image/svg+xml" />}
      
      {/* Fallback seguro */}
      {pngSrc ? (
        <img
          src={getImagePath(pngSrc)}
          alt={alt}
          className={className}
          loading={loading}
          width={width}
          height={height}
        />
      ) : (
        <span className="text-red-500">Erro: Nenhuma imagem fornecida</span>
      )}
    </picture>
  );
};

export default OptimizedImage;

const OptimizedImage = ({
  avifSrc,
  webpSrc,
  svgSrc,
  pngSrc,
  alt = "Imagem",
  className = "",
  width,
  height,
  loading = "lazy", // Lazy loading por padrão
  fetchpriority = "auto" // Controle de prioridade
}) => {
  const getImagePath = (src) => {
    if (!src) return null;
    return src.startsWith("http") ? src : `${import.meta.env.BASE_URL}${src.replace(/^\/+/, "")}`;
  };

  return (
    <picture style={{ display: "block", width: width ? `${width}px` : "auto", height: height ? `${height}px` : "auto" }}>
      {avifSrc && <source srcSet={getImagePath(avifSrc)} type="image/avif" />}
      {webpSrc && <source srcSet={getImagePath(webpSrc)} type="image/webp" />}
      {svgSrc && <source srcSet={getImagePath(svgSrc)} type="image/svg+xml" />}
      
      {/* Imagem com dimensões fixas e prioridade ajustável */}
      {pngSrc ? (
        <img
          src={getImagePath(pngSrc)}
          alt={alt}
          className={className}
          loading={loading}
          fetchpriority={fetchpriority}
          width={width}
          height={height}
          style={{ 
            display: "block", 
            objectFit: "cover", 
            aspectRatio: width && height ? `${width}/${height}` : "auto" 
          }}
        />
      ) : (
        <span className="text-red-500">Erro: Nenhuma imagem fornecida</span>
      )}
    </picture>
  );
};

export default OptimizedImage;

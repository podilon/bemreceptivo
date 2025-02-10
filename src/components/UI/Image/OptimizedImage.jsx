const OptimizedImage = ({ avifSrc, webpSrc, svgSrc, pngSrc, alt = "Imagem", className = "" }) => {
  // Ajusta automaticamente os caminhos das imagens com base na configuração do Vite
  const getImagePath = (src) => (src ? `${import.meta.env.BASE_URL}${src.replace(/^\/+/, '')}` : null);

  return (
    <picture>
      {/* AVIF - Melhor formato de compressão disponível */}
      {avifSrc && <source srcSet={getImagePath(avifSrc)} type="image/avif" />}
      {/* WebP - Alternativa intermediária caso AVIF não seja suportado */}
      {webpSrc && <source srcSet={getImagePath(webpSrc)} type="image/webp" />}
      {/* SVG - Se aplicável */}
      {svgSrc && <source srcSet={getImagePath(svgSrc)} type="image/svg+xml" />}
      {/* PNG - Fallback padrão */}
      <img
        src={getImagePath(pngSrc)}
        alt={alt}
        className={className}
        loading="lazy" // Lazy loading para otimização
      />
    </picture>
  );
};

export default OptimizedImage;

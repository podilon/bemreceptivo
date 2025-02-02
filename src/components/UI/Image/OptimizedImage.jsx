import 'react';

const OptimizedImage = ({ avifSrc, svgSrc, pngSrc, alt, className }) => {
  return (
    <picture>
      {/* Usar o AVIF se o navegador suportar */}
      <source srcSet={avifSrc} type="image/avif" />
      {/* Usar o SVG se o navegador suportar */}
      <source srcSet={svgSrc} type="image/svg+xml" />
      {/* Usar o PNG como fallback */}
      <img
        src={pngSrc}
        alt={alt}
        className={className}
        loading="lazy" // Opcional: Lazy loading para otimização de desempenho
      />
    </picture>
  );
};

export default OptimizedImage;

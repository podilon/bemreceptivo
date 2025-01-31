

const OptimizedImage = ({ avifSrc, svgSrc, pngSrc, alt, className }) => {
    return (
      <picture>
        {/* Primeiro tenta carregar a imagem em AVIF, caso o navegador suporte */}
        <source srcSet={avifSrc} type="image/avif" />
        
        {/* Depois tenta carregar o SVG (caso o navegador não suporte AVIF) */}
        <source srcSet={svgSrc} type="image/svg+xml" />
        
        {/* Por fim, carrega a imagem PNG como fallback final */}
        <img src={pngSrc} alt={alt} className={className} />
      </picture>
    );
  };
  
  export default OptimizedImage;
  
import { useInView } from "react-intersection-observer";
import Button from "../UI/Button/Button";
import OptimizedImage from "../UI/Image/OptimizedImage";

const DestinoCard = ({ image, title, description, buttonText, onButtonClick, alt }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="bg-white rounded-lg shadow-lg overflow-hidden">
      {inView && (
        <div className="flex-1 flex justify-center items-center p-4">
          <OptimizedImage
            avifSrc={image.avif}
            webpSrc={image.webp}
            svgSrc={image.svg}
            pngSrc={image.png}
            alt={alt} // Passando o alt para a imagem otimizada
            className="rounded-xl object-cover shadow-2xl transition-transform duration-300 ease-in-out 
                       hover:scale-105 hover:shadow-3xl 
                       w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] 
                       lg:w-[460px] lg:h-[460px]"
          />
        </div>
      )}

      <div className="p-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button text={buttonText} onClick={onButtonClick} />
      </div>
    </div>
  );
};

export default DestinoCard;

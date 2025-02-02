import 'react';
import Button from '../UI/Button/Button';  // Importando o botão da nova estrutura
import OptimizedImage from '../UI/Image/OptimizedImage';


const DestinoCard = ({ image, title, description, buttonText, onButtonClick }) => {
  return (

    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Imagem do destino */}
      <div className="flex-1 flex justify-center items-center p-4">
        <OptimizedImage
          avifSrc={image.avif}
          svgSrc={image.svg}
          pngSrc={image.png}
          alt={title}
          className="rounded-xl object-cover shadow-2xl transition-transform duration-300 ease-in-out 
hover:scale-105 hover:shadow-3xl 
w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] 
lg:w-[460px] lg:h-[460px]"
        />
      </div>

      <div className="p-4">
        {/* Título */}
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>

        {/* Descrição */}
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Botão */}
        <Button text={buttonText} onClick={onButtonClick} />
      </div>
    </div>
  );
};

export default DestinoCard;

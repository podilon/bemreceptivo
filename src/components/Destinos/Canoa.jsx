import 'react';

import Button from '../UI/Button/Button';
import OptimizedImage from '../UI/Image/OptimizedImage';

const CanoaQuebradaCard = () => {
  const destino = {
    title: 'Lagoinha',
    description:
      'Lagoinha - A povoação adquiriu fama ao ser descoberta, na década de 1970, pelos "hippies", que ali encontraram um lugar remoto, com grandes belezas, habitado apenas por uma tribo indígena e alguns pescadores. Até hoje preservam a tradição de pescar com jangadas no mar.',
    image: {
      avif: '/images/avif/bem-receptivo-lagoinha.avif',
        svg: '/images/svg/bem-receptivo-lagoinha.svg',
        png: '/images/png/bem-receptivo-lagoinha.png',
    },
    buttonText: 'Ver Mais',
    onButtonClick: () => alert('Mais informações sobre Canoa Quebrada'),
  };

  return (
    <section className="flex flex-col lg:flex-row bg-white shadow-lg rounded-xl p-6 space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Imagem */}
      <div className="flex-1 flex justify-center items-center">
       
        <OptimizedImage
          avifSrc={destino.image.avif}
          svgSrc={destino.image.svg}
          pngSrc={destino.image.png}
          alt={destino.title}
          className="rounded-lg object-cover shadow-md 
                     w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] 
                     lg:w-[480px] lg:h-[480px]"
        />
      </div>
      
      {/* Conteúdo */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{destino.title}</h1>
        <p className="text-gray-600 mb-4">{destino.description}</p>
        <ul className="text-gray-700 mb-4 list-disc pl-5">
          <li>★ Saídas sextas, sábados e domingos a partir de 07:00 (rota dos hotéis)</li>
          <li>Inclui: Transporte rodoviário, Guia de turismo</li>
          <li>Não inclui: Passeios opcionais de buggy, quadriciclos, catamarã, jangada e similares</li>
        </ul>
        
        <Button onClick={destino.onButtonClick} className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center gap-2">
          <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
          {destino.buttonText}
        </Button>
        
      </div>
    </section>
  );
};

export default CanoaQuebradaCard;

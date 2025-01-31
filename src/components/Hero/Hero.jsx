import { useState, useEffect } from 'react';
import OptimizedImage from '../UI/Image/OptimizedImage';

const Hero = () => {
  const cardsData = [
    {
      title: 'Fortaleza',
      image: {
        avif: '/images/avif/bem-receptivo-fortaleza-1.avif',
        svg: '/images/svg/bem-receptivo-fortaleza-1.svg',
        png: '/images/png/bem-receptivo-fortaleza-1.png',
      },
      description: 'Explore as belezas de Fortaleza, suas praias e cultura.',
    },
    {
      title: 'Jericoacoara',
      image: {
        avif: '/images/avif/bem-receptivo-jeri-1.avif',
        svg: '/images/svg/bem-receptivo-jeri-1.svg',
        png: '/images/png/bem-receptivo-jeri-1.png',
      },
      description: 'Visite o paraíso em Jericoacoara, com suas dunas e lagoas.',
    },
    {
      title: 'Lagoinha',
      image: {
        avif: '/images/avif/bem-receptivo-lagoinha.avif',
        svg: '/images/svg/bem-receptivo-lagoinha.svg',
        png: '/images/png/bem-receptivo-lagoinha.png',
      },
      description: 'Descubra a tranquilidade e os ventos de Lagoinha.',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [cardsData.length]);

  return (
    <div  id="home" className="relative w-full min-h-screen flex items-center justify-center 
                    bg-gradient-to-l from-green-500 to-blue-600 shadow-lg rounded-lg px-8
                    pt-[120px] lg:pt-[100px]">
      
      <section className="flex flex-col-reverse lg:flex-row w-full max-w-6xl items-center justify-between gap-8">
        
        {/* Texto */}
        <div className="flex-1 text-white text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4">Bem Receptivo Passeios em Fortaleza/Ceará</h1>
          <h2 className="text-xl font-light mb-4">
            Realizamos Serviços de Receptivo (Transfer IN/OUT) em Fortaleza e Passeios no Ceará para: Jericoacoara, Canoa Quebrada, Cumbuco, Beach Park, Lagoinha, Mundaú, Morro Branco, Praia das Fontes, Águas Belas e City Tour.
          </h2>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-400 transition-colors duration-300 mb-6">
            Saiba Mais
          </button>
        </div>

        {/* Imagem Redonda e Centralizada */}
        <div className="flex-1 flex justify-center items-center p-4">
          <OptimizedImage
            avifSrc={cardsData[currentImageIndex].image.avif}
            svgSrc={cardsData[currentImageIndex].image.svg}
            pngSrc={cardsData[currentImageIndex].image.png}
            alt={cardsData[currentImageIndex].title}
            className="rounded-full object-cover shadow-lg 
                       w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] 
                       lg:w-[460px] lg:h-[460px]"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;

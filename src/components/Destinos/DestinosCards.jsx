import 'react';
import DestinoCard from './DestinoCard'; // Importando o DestinoCard atualizado

const DestinosCards = () => {
  const destinos = [
    {
      title: 'Jericoacoara',
      description: 'Conheça as incríveis dunas e praias paradisíacas de Jericoacoara.',
      image: {
        avif: '/images/avif/bem-receptivo-jeri-1.avif',
        svg: '/images/svg/bem-receptivo-jeri-1.svg',
        png: '/images/png/bem-receptivo-jeri-1.png',
      },
      buttonText: 'Ver Mais',
      onButtonClick: () => alert('Mais informações sobre Jericoacoara'),
    },
    {
      title: 'Lagoinha',
      description: 'Uma das praias mais famosas do Ceará, conhecida pelo seu astral único.',
      image: {
        avif: '/images/avif/bem-receptivo-lagoinha.avif',
        svg: '/images/svg/bem-receptivo-lagoinha.svg',
        png: '/images/png/bem-receptivo-lagoinha.png',
      },
      buttonText: 'Ver Mais',
      onButtonClick: () => alert('Mais informações sobre Lagoinha'),
    },
    {
      title: 'Praia do Futuro',
      description: 'A Praia do Futuro é famosa por suas barracas de praia e águas cristalinas.',
      image: {
        avif: '/images/avif/bem-receptivo-fortaleza-1.avif',
        svg: '/images/svg/bem-receptivo-fortaleza-1.svg',
        png: '/images/png/bem-receptivo-fortaleza-1.png',
      },
      buttonText: 'Ver Mais',
      onButtonClick: () => alert('Mais informações sobre Praia do Futuro'),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-yellow-300   via-yellow-400 to-orange-500   py-20 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
        Conheça nossos principais destinos no Ceará
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {destinos.map((destino, index) => (
          <DestinoCard
            key={index}
            image={destino.image}
            title={destino.title}
            description={destino.description}
            buttonText={destino.buttonText}
            onButtonClick={destino.onButtonClick}
            className="w-[90%] sm:w-[80%] h-[400px] mx-auto shadow-lg shadow-black/20 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          />
        ))}
      </div>
    </div>
  );
};

export default DestinosCards;

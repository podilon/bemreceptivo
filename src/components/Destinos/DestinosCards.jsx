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
      onButtonClick: () => alert('Mais informações sobre Canoa Quebrada'),
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {destinos.map((destino, index) => (
        <DestinoCard
          key={index}
          image={destino.image}
          title={destino.title}
          description={destino.description}
          buttonText={destino.buttonText}
          onButtonClick={destino.onButtonClick}
        />
      ))}
    </div>
  );
};

export default DestinosCards;

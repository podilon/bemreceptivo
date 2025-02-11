import DestinoCard from './DestinoCard'; // Importando o DestinoCard atualizado

const DestinosCards = () => {
  const destinos = [
    {
      title: 'Jericoacoara',
      description: 'Conheça as incríveis lagoas de águas cristalinas e praias paradisíacas de Jericoacoara.',
      image: {
        avif: '/images/avif/bem-receptivo-jeri-1.avif',
        webp: '/images/webp/bem-receptivo-jeri-1.webp', 
        svg: '/images/svg/bem-receptivo-jeri-1.svg',
        png: '/images/png/bem-receptivo-jeri-1.png',
      },
      alt: 'Vista das dunas, lagoas cristalinas e praias de Jericoacoara, Ceará',
      buttonText: 'Ver Mais',
      onButtonClick: () => alert('Mais informações sobre Jericoacoara'),
    },
    {
      title: 'Lagoinha',
      description: 'Paisagem deslumbrante da Praia de Lagoinha, com falésias avermelhadas contrastando com o verde mar, coqueiros balançando ao vento e jangadas coloridas ancoradas na areia dourada',
      image: {
        avif: '/images/avif/bem-receptivo-lagoinha.avif',
        webp: '/images/webp/bem-receptivo-lagoinha.webp', 
        svg: '/images/svg/bem-receptivo-lagoinha.svg',
        png: '/images/png/bem-receptivo-lagoinha.png',
      },
      alt: 'Praia de Lagoinha, com mar azul e coqueiros ao fundo',
      buttonText: 'Ver Mais',
      onButtonClick: () => alert('Mais informações sobre Lagoinha'),
    },
    {
      title: 'Fortaleza',
      description: 'Explore a capital cearense, famosa por suas belas praias e rica cultura.',
      image: {
        avif: '/images/avif/bem-receptivo-fortaleza-1.avif',
        webp: '/images/webp/bem-receptivo-fortaleza-1.webp', 
        svg: '/images/svg/bem-receptivo-fortaleza-1.svg',
        png: '/images/png/bem-receptivo-fortaleza-1.png',
      },
      alt: 'Praia do Futuro em Fortaleza, conhecida por suas barracas e águas cristalinas',
      buttonText: 'Ver Mais',
      onButtonClick: () => alert('Mais informações sobre Praia do Futuro'),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-yellow-300 via-yellow-400 to-orange-500 py-20 px-4">
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
            alt={destino.alt} // Agora passa o atributo alt corretamente
            className="w-[90%] sm:w-[80%] h-[400px] mx-auto shadow-lg shadow-black/20 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          />
        ))}
      </div>
    </div>
  );
};

export default DestinosCards;

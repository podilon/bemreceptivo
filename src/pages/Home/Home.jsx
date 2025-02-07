import 'react';
import Sobre from '../Sobre/Sobre';
import Servicos from '../Servicos/Servicos';
import Hero from "../../components/hero/hero.jsx";
import VideoGallery from '../../components/Videos/Youtube/Short/VideoGallery.jsx';
import Contato from '../../components/Contato/Contato.jsx';
import Depoimentos from '../../components/Videos/Youtube/Depoimentos/Depoimentos.jsx';





const Home = () => {
  return (
    <div>
      {/* Exibe a seção Sobre */}
      <Hero />

      {/* Exibe a seção de Serviços */}
      <Servicos />

      {/* Exibe a seção Sobre */}
      <Sobre />

      {/* Exibe a seção Videos */}
      <VideoGallery />

      {/* Exibe a seção Depoimentos */}
      <Depoimentos />

      {/* Exibe a seção Contato */}
      <Contato />



    </div>
  );
};

export default Home;

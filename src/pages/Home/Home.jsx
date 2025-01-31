import 'react';
import Sobre from '../Sobre/Sobre';
import Servicos from '../Servicos/Servicos';
import Hero from "../../components/hero/hero.jsx";





const Home = () => {
  return (
    <div>
      {/* Exibe a seção Sobre */}
      <Hero />

        {/* Exibe a seção de Serviços */}
        <Servicos />
      
      {/* Exibe a seção Sobre */}
      <Sobre />

    
    </div>
  );
};

export default Home;

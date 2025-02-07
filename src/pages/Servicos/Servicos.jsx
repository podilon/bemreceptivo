import React from 'react';
import { FaShuttleVan, FaMapMarkedAlt, FaUserFriends } from 'react-icons/fa';
import DestinosCards from '../../components/Destinos/DestinosCards';

const Servicos = () => {
  const services = [
    { 
      title: 'Transfers', 
      description: 'Realizamos transferências seguras e confortáveis entre o aeroporto e seu hotel.', 
      icon: <FaShuttleVan size={40} />,
      bgColor: 'bg-blue-500'
    },
    { 
      title: 'City Tours', 
      description: 'Conheça os principais pontos turísticos de Fortaleza e arredores com guias experientes.', 
      icon: <FaMapMarkedAlt size={40} />,
      bgColor: 'bg-green-500'
    },
    { 
      title: 'Passeios Personalizados', 
      description: 'Planejamos roteiros exclusivos para você e sua família.', 
      icon: <FaUserFriends size={40} />,
      bgColor: 'bg-orange-500'
    },
  ];

  return (
    <>
      <section id="servicos" className="py-14 px-6 md:px-12 lg:px-24 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-xl shadow-lg text-white flex flex-col items-center transform transition-all duration-300 hover:scale-105 ${service.bgColor}`}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-lg mt-2 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <DestinosCards />
      </section>
    </>
  );
};

export default Servicos;

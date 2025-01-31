import 'react';


const Servicos = () => {
  const services = [
    { title: 'Transfers', description: 'Realizamos transferências seguras e confortáveis entre o aeroporto e seu hotel.' },
    { title: 'City Tours', description: 'Conheça os principais pontos turísticos de Fortaleza e arredores com guias experientes.' },
    { title: 'Passeios Personalizados', description: 'Planejamos roteiros exclusivos para você e sua família.' },
    { title: 'Passeios Personalizados', description: 'Planejamos roteiros exclusivos para você e sua família.' },
  ];

  return (
    <>
    
      <section id="servicos" className="py-10 px-6 md:px-12 lg:px-24 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Nossos Serviços</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção com Cards adicionais, caso necessário */}
      <div className="py-10 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-amber-700 text-white p-6 rounded-lg shadow-lg">Card 1</div>
          <div className="bg-white p-6 rounded-lg shadow-lg">Card 2</div>
          <div className="bg-white p-6 rounded-lg shadow-lg">Card 3</div>
          <div className="bg-white p-6 rounded-lg shadow-lg">Card 4</div>
        </div>
      </div>
    </>
  );
};

export default Servicos;

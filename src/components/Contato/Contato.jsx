import { useState } from "react";
import { Mail } from "lucide-react";

const Contato = () => {
  const [emailVisible, setEmailVisible] = useState(false);

  // Construção do e-mail ofuscado
  const user = "reservas";
  const domain = "bemreceptivo.com.br";
  const email = `${user}@${domain}`;

  const handleShowEmail = (e) => {
    e.preventDefault();
    setEmailVisible(true);
  };

  return (
    <div id="contato" className="bg-gradient-to-b from-blue-500 to-blue-300 py-16 px-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white mb-6">Entre em Contato</h2>
      <p className="text-lg text-white mb-4">Clique no botão abaixo para ver o e-mail:</p>

      {!emailVisible ? (
        <button
          onClick={handleShowEmail}
          className="flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          <Mail className="w-5 h-5" />
          Mostrar E-mail
        </button>
      ) : (
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          <Mail className="w-5 h-5" />
          {email}
        </a>
      )}
    </div>
  );
};

export default Contato;

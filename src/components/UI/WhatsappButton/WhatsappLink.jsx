import { FaWhatsapp } from 'react-icons/fa'; // Ícone do WhatsApp

const WhatsappLink = ({ phone, containerClassName }) => {
    // Verifica se a prop containerClassName foi passada. Se sim, renderiza dentro de uma div com a classe fornecida.
    if (containerClassName) {
        return (
            <div className={containerClassName}>
                <a 
                    href={`https://wa.me/${phone}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all duration-300 w-16 h-16 hover:shadow-xl hover:scale-110"
                    aria-label="Abrir WhatsApp"
                >
                    <FaWhatsapp size={40} className="hover:text-white transition-all duration-300" />
                </a>
            </div>
        );
    }

    // Caso contrário, renderiza o botão fixo no canto inferior direito da tela
    return (
        <a 
            href={`https://wa.me/${phone}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all duration-300 w-16 h-16 hover:shadow-xl hover:scale-110"
            aria-label="Abrir WhatsApp"
        >
            <FaWhatsapp size={40} className="hover:text-white transition-all duration-300" />
        </a>
    );
};

export default WhatsappLink;

import 'react';
import OptimizedImage from '../UI/Image/OptimizedImage';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa'; // Importando ícones do React Icons

const Footer = () => {
    const atualizaAno = new Date().getFullYear(); // Obtém o ano atual dinamicamente

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          

          {/* Seção 1 - Logo e Título */}
<div className="text-center flex items-center justify-center h-full">
  <div className="flex items-center gap-4 mb-4 justify-center">
    <a href="/" className="flex items-center justify-center">
      <OptimizedImage
        avifSrc="/images/avif/bem-receptivo-144x144.avif"
        svgSrc="/images/svg/bem-receptivo-144x144.svg"
        pngSrc="/images/png/bem-receptivo-144x144.png"
        alt="Logo Bem Receptivo"
        className="max-w-[40px] h-auto" // Ajuste no tamanho máximo
      />
    </a>
    <a href="/" className="block">
      <OptimizedImage
        avifSrc="/images/avif/title-bem-receptivo-menu.avif"
        svgSrc="/images/svg/title-bem-receptivo-menu.svg"
        pngSrc="/images/png/title-bem-receptivo-menu.png"
        alt="Título Bem Receptivo"
        className="max-w-[25vh] h-auto" // Ajuste no tamanho máximo
      />
    </a>
  </div>
</div>


          {/* Seção 2 - Sobre */}
          <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Sobre Nós</h3>
            <p className="text-gray-400">
              A Bem Receptivo oferece pacotes turísticos personalizados, proporcionando uma experiência inesquecível em Fortaleza e Jericoacoara.
            </p>
          </div>

          {/* Seção 3 - Links Úteis */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-yellow-400 transition duration-300">Início</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-yellow-400 transition duration-300">Serviços</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-yellow-400 transition duration-300">Sobre</a></li>
              <li><a href="/contato" className="text-gray-400 hover:text-yellow-400 transition duration-300">Contato</a></li>
            </ul>
          </div>

          {/* Seção 4 - Redes Sociais */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Siga-nos</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://facebook.com/bemreceptivo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition duration-300">
                <FaFacebookF size={24} />
              </a>
              <a href="https://instagram.com/bemreceptivo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://x.com/bemreceptivo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.youtube.com/c/bemreceptivo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition duration-300">
                <FaYoutube size={24} />
              </a>
              
              <a href="https://wa.me/558541416666" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition duration-300">
              <FaWhatsapp size={24} />
              </a>

            </div>
          </div>
        </div>

        {/* Rodapé Final */}
        <div className="text-center mt-12">
          <p className="text-gray-400">
            &copy; {atualizaAno} Bem Receptivo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

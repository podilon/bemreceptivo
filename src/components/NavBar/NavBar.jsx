import { useState } from 'react';
import { FaHome, FaInfoCircle, FaConciergeBell, FaPhoneAlt } from 'react-icons/fa'; // Importando ícones do react-icons
import OptimizedImage from '../UI/Image/OptimizedImage';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-[#41658b] to-[#11adc5] shadow-lg p-4 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo e Título */}
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center">
            <OptimizedImage
              avifSrc="/images/avif/bem-receptivo-144x144.avif"
              svgSrc="/images/svg/bem-receptivo-144x144.svg"
              pngSrc="/images/png/bem-receptivo-144x144.png"
              alt="Logo Bem Receptivo"
              className="max-w-16 h-auto"
            />
          </a>
          <a href="/" className="block">
            <OptimizedImage
              avifSrc="/images/avif/title-bem-receptivo-menu.avif"
              svgSrc="/images/svg/title-bem-receptivo-menu.svg"
              pngSrc="/images/png/title-bem-receptivo-menu.png"
              alt="Título Bem Receptivo"
              className="max-w-[35vh] h-auto"
            />
          </a>
        </div>

        {/* Links da Navbar - Visíveis em telas grandes */}
        <div className="hidden lg:flex items-center space-x-6">
          <a className="text-white font-medium text-lg hover:text-yellow-400 transition duration-300 flex items-center">
            <FaHome className="mr-2" /> Início
          </a>
          <a className="text-white font-medium text-lg hover:text-yellow-400 transition duration-300 flex items-center">
            <FaInfoCircle className="mr-2" /> Sobre
          </a>
          <a className="text-white font-medium text-lg hover:text-yellow-400 transition duration-300 flex items-center">
            <FaConciergeBell className="mr-2" /> Serviços
          </a>
          <a className="text-white font-medium text-lg hover:text-yellow-400 transition duration-300 flex items-center">
            <FaPhoneAlt className="mr-2" /> Contato
          </a>
        </div>

        {/* Botão de menu para dispositivos móveis */}
        <button 
          className="lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-white" 
          id="menu-toggle" 
          onClick={toggleMenu}
          aria-expanded={menuOpen ? 'true' : 'false'}
          aria-controls="mobile-menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Barra lateral - visível apenas no modo responsivo */}
      <div 
        id="mobile-menu"
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-[#41658b] to-[#11adc5] z-40 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}
      >
        {/* Logo e Título na barra lateral */}
        <div className="flex items-center gap-4 p-4">
          <a href="/" className="flex items-center">
            <OptimizedImage
              avifSrc="/images/avif/bem-receptivo-144x144.avif"
              svgSrc="/images/svg/bem-receptivo-144x144.svg"
              pngSrc="/images/png/bem-receptivo-144x144.png"
              alt="Logo Bem Receptivo"
              className="max-w-16 h-auto"
            />
          </a>
          <a href="/" className="block">
            <OptimizedImage
              avifSrc="/images/avif/title-bem-receptivo-menu.avif"
              svgSrc="/images/svg/title-bem-receptivo-menu.svg"
              pngSrc="/images/png/title-bem-receptivo-menu.png"
              alt="Título Bem Receptivo"
              className="max-w-[35vh] h-auto"
            />
          </a>
        </div>

        {/* Links na barra lateral */}
        <div className="flex flex-col items-center space-y-6 mt-12">
          <a className="text-white font-medium text-lg hover:text-yellow-400 transition duration-300 flex items-center">
            <FaHome className="mr-2" /> Início
          </a>
          <a className="text-white font-medium text-lg hover:text-yellow-400 transition duration-300 flex items-center">
            <FaInfoCircle className="mr-2" /> Sobre
          </a>
          <a className="text-white font-medium text-lg hover:text-yellow-400 transition duration-300 flex items-center">
            <FaConciergeBell className="mr-2" /> Serviços
          </a>
          <a className="text-white font-medium text-lg hover:text-yellow-400 transition duration-300 flex items-center">
            <FaPhoneAlt className="mr-2" /> Contato
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;


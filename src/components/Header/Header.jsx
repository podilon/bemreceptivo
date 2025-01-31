import 'react';
import OptimizedImage from '../UI/Image/OptimizedImage';
const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Bem Receptivo</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
            <li><a href="#services" className="hover:text-yellow-300">Serviços</a></li>
            <li><a href="#contact" className="hover:text-yellow-300">Contato</a></li>
          </ul>
        </nav>
      </div>
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-[#41658b] to-[#11adc5] shadow-lg p-4 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo e Título */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <OptimizedImage
              avifSrc="/src/assets/images/avif/bem-receptivo-144x144.avif"
              svgSrc="/src/assets/images/svg/bem-receptivo-144x144.svg"
              pngSrc="/src/assets/images/png/bem-receptivo-144x144.png"
              alt="Logo da Bem Receptivo"
              className="max-w-2 h-auto"
            />
          </a>
          {/* Título */}
          <a href="/" className="hidden sm:block">
            <OptimizedImage
              avifSrc="/src/assets/images/avif/title-bem-receptivo-menu.avif"
              svgSrc="/src/assets/images/svg/title-bem-receptivo-menu.svg"
              pngSrc="/src/assets/images/png/title-bem-receptivo-menu.png"
              alt="Título Bem Receptivo"
              className="max-w-[35vh] h-auto"
            />
          </a>
        </div>

        {/* Links da Navbar */}
        <div className="hidden lg:flex items-center space-x-6">
          <a className="text-white font-medium text-lg hover:text-yellow-400 transition duration-300" href="#home">Início</a>
          <a className="text-white font-medium text-lg hover:text-yellow-400 transition duration-300" href="#sobre">Sobre</a>
          <a className="text-white font-medium text-lg hover:text-yellow-400 transition duration-300" href="#servicos">Serviços</a>
          <a className="text-white font-medium text-lg hover:text-yellow-400 transition duration-300" href="#contato">Contato</a>
        </div>

        {/* Botão de menu para dispositivos móveis */}
        <button className="lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-white" id="menu-toggle">
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>
    </nav>
    </header>
  );
};

export default Header;

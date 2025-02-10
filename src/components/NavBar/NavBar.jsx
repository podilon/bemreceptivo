import { useState } from 'react';
import { FaHome, FaInfoCircle, FaUmbrellaBeach, FaPhoneAlt, FaQuoteLeft } from 'react-icons/fa';
import OptimizedImage from '../UI/Image/OptimizedImage';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-[#41658b] to-[#11adc5] shadow-lg p-4 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center">
            <OptimizedImage
              avifSrc="/images/avif/bem-receptivo-144x144.avif"
              webpSrc="/images/webp/bem-receptivo-144x144.webp"
              svgSrc="/images/svg/bem-receptivo-144x144.svg"
              pngSrc="/images/png/bem-receptivo-144x144.png"
              alt="Logo Bem Receptivo"
              className="max-w-16 h-auto"
            />
          </a>
          <a href="#" className="block">
            <OptimizedImage
              avifSrc="/images/avif/title-bem-receptivo-menu.avif"
              webpSrc="/images/webp/title-bem-receptivo-menu.webp"
              svgSrc="/images/svg/title-bem-receptivo-menu.svg"
              pngSrc="/images/png/title-bem-receptivo-menu.png"
              alt="Título Bem Receptivo"
              className="max-w-[35vh] h-auto"
            />
          </a>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          {[
            { href: "#", label: "Início", icon: <FaHome /> },
            { href: "#sobre", label: "Sobre", icon: <FaInfoCircle /> },
            { href: "#servicos", label: "Serviços", icon: <FaUmbrellaBeach /> },
            { href: "#depoimentos", label: "Depoimentos", icon: <FaQuoteLeft /> },
            { href: "#contato", label: "Contato", icon: <FaPhoneAlt /> },
          ].map(({ href, label, icon }) => (
            <a key={href} href={href} className="text-white font-medium text-lg hover:text-yellow-400 transition duration-300 flex items-center scroll-mt-50">
              <span className="mr-2">{icon}</span> {label}
            </a>
          ))}
        </div>

        <button
          className="lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
          onClick={toggleMenu}
          aria-expanded={menuOpen ? 'true' : 'false'}
          aria-controls="mobile-menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-gradient-to-b from-[#41658b] to-[#11adc5] z-40 transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex items-center gap-4 p-4">
          <a href="#" className="flex items-center">
            <OptimizedImage
              avifSrc="/images/avif/bem-receptivo-144x144.avif"
              webpSrc="/images/webp/bem-receptivo-144x144.webp"
              svgSrc="/images/svg/bem-receptivo-144x144.svg"
              pngSrc="/images/png/bem-receptivo-144x144.png"
              alt="Logo Bem Receptivo"
              className="max-w-16 h-auto"
            />
          </a>
          <a href="#" className="block">
            <OptimizedImage
              avifSrc="/images/avif/title-bem-receptivo-menu.avif"
              webpSrc="/images/webp/title-bem-receptivo-menu.webp"
              svgSrc="/images/svg/title-bem-receptivo-menu.svg"
              pngSrc="/images/png/title-bem-receptivo-menu.png"
              alt="Título Bem Receptivo"
              className="max-w-[35vh] h-auto"
            />
          </a>
        </div>

        <div className="flex flex-col items-center space-y-6 mt-12">
          {[
            { href: "#", label: "Início", icon: <FaHome /> },
            { href: "#sobre", label: "Sobre", icon: <FaInfoCircle /> },
            { href: "#servicos", label: "Serviços", icon: <FaUmbrellaBeach /> },
            { href: "#depoimentos", label: "Depoimentos", icon: <FaQuoteLeft /> },
            { href: "#contato", label: "Contato", icon: <FaPhoneAlt /> },
          ].map(({ href, label, icon }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-white font-medium text-lg hover:text-yellow-400 transition duration-300 flex items-center scroll-mt-50"
            >
              <span className="mr-2">{icon}</span> {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

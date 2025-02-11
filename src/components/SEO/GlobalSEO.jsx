import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const GlobalSeo = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag("js", new Date());
    gtag("config", "G-WWTBRWZLJE");

    // Lazy Load para vídeos do YouTube
    const iframes = document.querySelectorAll("iframe[data-lazy]");
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const iframe = entry.target;
          iframe.src = iframe.dataset.src;
          iframe.removeAttribute("data-lazy");
          obs.unobserve(iframe);
        }
      });
    });
    iframes.forEach(iframe => observer.observe(iframe));
  }, []);

  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Bem Receptivo - Passeios e Transfers no Ceará." />
      <meta name="keywords" content="fortaleza, viagens, pacotes viagens fortaleza, jericoacoara, turismo no Ceará" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Bem Receptivo" />

      {/* Open Graph */}
      <meta property="og:image" content="https://bemreceptivo.com.br/images/bem-receptivo-fortaleza-ceara.jpg" />
      <meta property="og:url" content="https://bemreceptivo.com.br/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Bem Receptivo - Fortaleza" />
      <meta property="og:description" content="Bem Receptivo - Passeios e Transfers no Ceará." />
      <meta property="og:site_name" content="Bem Receptivo" />
      <meta property="og:instagram" content="https://www.instagram.com/bemreceptivo" />
      <meta property="og:facebook" content="https://facebook.com/bemreceptivo" />
      <meta property="og:video" content="http://www.youtube.com/@BemReceptivo" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Bem Receptivo - Fortaleza" />
      <meta name="twitter:description" content="Bem Receptivo: Serviços de transfer aeroporto e passeios no litoral do Ceará" />
      <meta name="twitter:image" content="https://bemreceptivo.com.br/images/bem-receptivo-fortaleza-ceara.jpg" />
      <meta name="twitter:site" content="@bemreceptivo" />

      {/* Canonical e Favicon */}
      <link rel="canonical" href="https://bemreceptivo.com.br/" />
      <link rel="icon" href="/images/favicon.ico" />

      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-WWTBRWZLJE"></script>
      <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-WWTBRWZLJE');
      `}</script>

      {/* Microsoft Clarity */}
      <script defer src="https://www.clarity.ms/tag/0.7.66/clarity.js"></script>
    </Helmet>
  );
};

export default GlobalSeo;

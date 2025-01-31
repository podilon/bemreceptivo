import { useEffect } from "react";
import MobileDetect from "mobile-detect";

const MobileRedirect = () => {
  useEffect(() => {
    console.log("Verificando dispositivo...");

    // Criando uma instância do MobileDetect
    const md = new MobileDetect(window.navigator.userAgent);
    const urlMobile = "https://m.bemreceptivo.com.br/";

    // Verificando se é um dispositivo móvel
    if (md.mobile()) {
      console.log("Dispositivo móvel detectado. Redirecionando...");
      setTimeout(() => {
        window.location.href = urlMobile;
      }, 1000); // Atraso de 1 segundo antes do redirecionamento
    } else {
      console.log("Dispositivo não é móvel, mantendo versão desktop.");
    }
  }, []);

  return null; // O componente não precisa renderizar nada
};

export default MobileRedirect;

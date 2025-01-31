// src/context/WhatsappContext.jsx
import { createContext, useContext } from 'react';

// Criando o contexto
const WhatsappContext = createContext();

// Provedor do contexto
export const WhatsappProvider = ({ children }) => {
  const whatsappUrl = 'https://wa.me/558541416666'; // URL fixa do WhatsApp

  return (
    <WhatsappContext.Provider value={whatsappUrl}>
      {children}
    </WhatsappContext.Provider>
  );
};

// Hook para usar o contexto
export const useWhatsapp = () => {
  return useContext(WhatsappContext);
};

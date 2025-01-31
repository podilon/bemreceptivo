// src/components/SEO.jsx
import 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title ? `${title} - Bem Receptivo` : 'Bem Receptivo - Turismo em Fortaleza'}</title>
      <meta name="description" content={description || "Bem Receptivo oferece serviços de receptivo turístico em Fortaleza, Ceará, com passeios, transfer e muito mais para os turistas."} />
      <meta name="keywords" content={keywords || "turismo, Fortaleza, passeios, transfer, receptivo"} />
      <meta name="author" content="Bem Receptivo" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default SEO;

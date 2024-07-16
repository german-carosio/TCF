// AboutUs.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Margin from '../components/Margin/Margin';

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>Nosotros - Todo con frijol</title>
        <meta name="description" content="Beneficios de frijoles." />
        <meta name="keywords" content="Beneficios de frijoles, Beneficios de porotos" />
      </Helmet>

      <Margin>
        <h1>Nosotros</h1>
        <p>Contenido de la página Nosotros</p>
      </Margin>
    </div>
  );
};

export default AboutUs;



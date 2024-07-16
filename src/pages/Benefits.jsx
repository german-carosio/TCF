// AboutUs.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Margin from '../components/Margin/Margin';

const Benefits = () => {
  return (
    <div>
      <Helmet>
        <title>Beneficios - Todo con frijol</title>
        <meta name="description" content="Beneficios de frijoles." />
        <meta name="keywords" content="Beneficios de frijoles, Beneficios de porotos" />
      </Helmet>

      <Margin>
        <h1>Benefits</h1>
        <p>Contenido de la página Benefits</p>
      </Margin>
    </div>
  );
};

export default Benefits;



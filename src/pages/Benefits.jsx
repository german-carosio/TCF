// pages/Benefits.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Margin from '../components/Margin/Margin';
import BeneficiosList from '../components/BeneficiosList/BeneficiosList';

const Benefits = () => {
  return (
    <div>
      <Helmet>
        <title>Beneficios - Todo con frijol</title>
        <meta name="description" content="Beneficios de frijoles." />
        <meta name="keywords" content="Beneficios de frijoles, Beneficios de porotos" />
      </Helmet>

      <Margin>
        <BeneficiosList />
      </Margin>
    </div>
  );
};

export default Benefits;





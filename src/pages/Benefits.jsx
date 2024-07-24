// pages/Benefits.jsx
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Margin from '../components/Margin/Margin';
import BeneficiosList from '../components/BeneficiosList/BeneficiosList';
import Title from '../components/Title/Title';

const Benefits = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Desplazarse al inicio de la página al montar el componente
  }, []);

  return (
    <>
      <Helmet>
        <title>Beneficios - Todo con frijol</title>
        <meta name="description" content="Beneficios de frijoles." />
        <meta name="keywords" content="Beneficios de frijoles, Beneficios de porotos" />
      </Helmet>

      <Margin>
        <Title txt={'Aprende los beneficios del consumo de frijoles'} />
        <BeneficiosList />
      </Margin>
    </>
  );
};

export default Benefits;





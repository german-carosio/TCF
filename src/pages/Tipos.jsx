// AboutUs.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Margin from '../components/Margin/Margin';

const Tipos = () => {
  return (
    <div>
      <Helmet>
        <title>Tipos - Todo con frijol</title>
        <meta name="description" content="Tipos de frijoles." />
        <meta name="keywords" content="tipos de frijoles, varaintes de frijoles, tipo de porotos" />
      </Helmet>

      <Margin>
        <h1>Conoce la variedad de frijoles y sus nutrientes</h1>
        <p>Contenido de la página Tipos</p>
      </Margin>
    </div>
  );
};

export default Tipos;



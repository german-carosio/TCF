// AboutUs.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Tipos = () => {
  return (
    <div>
      <Helmet>
        <title>Tipos - Todo con frijol</title>
        <meta name="description" content="Tipos de frijoles." />
        <meta name="keywords" content="tipos de frijoles, varaintes de frijoles, tipo de porotos" />
      </Helmet>
      <div className='portada'>
        <h1>Tipos</h1>
        <p>Contenido de la página Tipos</p>
      </div>
    </div>
  );
};

export default Tipos;



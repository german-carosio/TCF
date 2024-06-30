// Service3.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Service3 = () => {
  return (
    <div>
      <Helmet>
        <title>Service 3 - Mi Sitio Web</title>
        <meta name="description" content="Detalles del Servicio 3." />
        <meta name="keywords" content="service 3, sitio web, react" />
      </Helmet>
      <div className='portada'>
        <h1>Service 3</h1>
        <p>Contenido de la página Service3</p>
      </div>
    </div>
  );
};

export default Service3;


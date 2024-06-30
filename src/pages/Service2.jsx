// Service2.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Service2 = () => {
  return (
    <div>
      <Helmet>
        <title>Service 2 - Mi Sitio Web</title>
        <meta name="description" content="Detalles del Servicio 2." />
        <meta name="keywords" content="service 2, sitio web, react" />
      </Helmet>
      <div className='portada'>
        <h1>Service 2</h1>
        <p>Contenido de la página Service2</p>
      </div>
    </div>
  );
};

export default Service2;


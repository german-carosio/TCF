// Service1.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Service1 = () => {
  return (
    <div>
      <Helmet>
        <title>Service 1 - Mi Sitio Web</title>
        <meta name="description" content="Detalles del Servicio 1." />
        <meta name="keywords" content="service 1, sitio web, react" />
      </Helmet>
      <div className='portada'>
        <h1>Service 1</h1>
        <p>Contenido de la página Service1</p>
      </div>
    </div>
  );
};

export default Service1;



// PageNotFound.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageNotFound = () => {
  return (
    <div>
      <Helmet>
        <title>404 - Página no encontrada</title>
        <meta name="description" content="Esta página no existe." />
      </Helmet>
      <div className='portada'>
        <h1>404 - Página no encontrada</h1>
        <p>Lo sentimos, la página que estás buscando no se ha encontrado.</p>
      </div>
    </div>
  );
};

export default PageNotFound;


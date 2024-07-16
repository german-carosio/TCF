// PageNotFound.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Margin from '../components/Margin/Margin';

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Página no encontrada</title>
        <meta name="description" content="Esta página no existe." />
      </Helmet>
      <Margin>
        <h1>404 - Página no encontrada</h1>
        <p>Lo sentimos, la página que estás buscando no se ha encontrado.</p>
      </Margin>
    </>
  );
};

export default PageNotFound;


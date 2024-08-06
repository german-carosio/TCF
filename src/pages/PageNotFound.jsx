// PageNotFound.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Margin from '../components/Margin/Margin';
import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Página no encontrada</title>
        <meta name="description" content="Esta página no existe." />
      </Helmet>
      <Margin>
        <div className={styles.pageNotFound}>
          <div>
            <h1 className={styles.title}>404 - Página no encontrada</h1>
            <p className={styles.message}>Lo sentimos, la página que estás buscando no se ha encontrado.</p>
          </div>
        </div>
      </Margin>
    </>
  );
};

export default PageNotFound;


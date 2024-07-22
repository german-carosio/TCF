// AboutUs.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Margin from '../components/Margin/Margin';
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>Nosotros - Todo con frijol</title>
        <meta name="description" content="Acerca de nosotros, Todo con frijol" />
        <meta name="keywords" content="Todo con frijol, nosotros, about us" />
      </Helmet>

      <Margin>
        <div className={styles.container}>
          <img src="/img/web/nosotros.png" alt="" />
          <div className={styles.txt}>
            <h1 className={styles.title}>Familia Todo con frijol</h1>
            <p>El US Dry Bean Council (USDBC, por sus siglas en inglés) es una organización privada que representa agricultores, distribuidores y compañías que producen, manejan, exportan y procesan frijoles cultivados en los Estados Unidos. 
            El Consejo le da una voz a la industria, difundiendo información a profesionales de la salud, distribuidores y medios sobre el sabor, el valor nutricional y la versatilidad de los frijoles. Asimismo, colabora con organizaciones de salud pública, entidades de investigación, universidades y la cadena completa de distribución: agricultores, procesadores, mayoristas, distribuidores y transportistas. </p>
          </div>
        </div>
      </Margin>
    </>
  );
};

export default AboutUs;



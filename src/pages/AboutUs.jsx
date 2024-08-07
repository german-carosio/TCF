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
        <meta name="author" content="Todo con frijol" />
        <html lang="es" />
      </Helmet>


      <Margin>
      
        <section className={styles.container}>

          <div className={styles.images}>
            <div className={styles.img1}></div>
            <div className={styles.img2}></div>
            <div className={styles.img3}></div>
            <div className={styles.icon}>
              <img src="/img/web/isologo1.png" alt="isologo Todo con frijol" />
            </div>
          </div>

          <div className={styles.txt}>

            <div className={styles.cabeceraTxt}>
              <h1 className={styles.title}>Somos una familia</h1>
              <img src="/img/web/Logo2.svg" alt="Logo Todo con frijol" />
            </div>

            <p>El US Dry Bean Council (USDBC, por sus siglas en inglés) es una organización privada que representa agricultores, distribuidores y compañías que producen, manejan, exportan y procesan frijoles cultivados en los Estados Unidos.
            </p>

            <p>El Consejo le da una voz a la industria, difundiendo información a profesionales de la salud, distribuidores y medios sobre el sabor, el valor nutricional y la versatilidad de los frijoles. Asimismo, colabora con organizaciones de salud pública, entidades de investigación, universidades y la cadena completa de distribución: agricultores, procesadores, mayoristas, distribuidores y transportistas. </p>
         
          </div>
          <div className={styles.icon2}>
              <img src="/img/web/isologo2.png" alt="isologo Todo con frijol" />
            </div>
        </section>
      </Margin>
    </>
  );
};

export default AboutUs;



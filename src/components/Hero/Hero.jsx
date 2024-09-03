import React from 'react';
import styles from './Hero.module.css';
import Boton from '../Boton/Boton';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.lado1}>
        <div>
          <h1 className={styles.frase}>¡Empieza a <br />comer frijoles!</h1>
          <div className={styles.boton}>
            <Boton title="Ver recetas" url="/recipes" />
          </div>
        </div>
      </div>

      <div className={styles.lado2}>
        {/* Añade loading="lazy" a la imagen */}
        <img
          src="/img/web/frijol-hero.png"
          alt="imagen frijoles hero"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;

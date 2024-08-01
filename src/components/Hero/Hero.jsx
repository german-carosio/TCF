import React from 'react'
import styles from './Hero.module.css'
import Boton from '../Boton/Boton'

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
        <img src="/img/web/imgHero.svg" alt="imagen frijoles hero" />
      </div>

    </section>
  )
}

export default Hero
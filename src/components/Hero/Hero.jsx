import React from 'react'
import styles from './Hero.module.css'
import Boton from '../Boton/Boton'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.lados}>
        <h1 className={styles.frase}>Conoce múltiples maneras de incorporar frijoles a tus comidas</h1>
        <div className={styles.boton}>
          <Boton/>
        </div>
        
        </div>

        <div className={styles.lados}>
            
        </div>
        
    </section>
  )
}

export default Hero
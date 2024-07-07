import React from 'react'
import styles from './Section2Home.module.css'
import Boton2 from '../Boton2/Boton2'

const Section2Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.img}>
        <img src="./img/web/empieza.png" alt="" />
      </div>

      <div className={styles.grid}>
        <div className={styles.caja}></div>
        <div className={styles.caja}></div>
        <div className={styles.caja}></div>
        <div className={styles.caja}></div>
      </div>

      <div className={styles.tipos}>
        <div className={styles.caja1}>
          <h2>¿Sabes cuántos tipos de frijoles hay?</h2>
          <Boton2/>
        </div>

        <div className={styles.caja2}>
          <p>Los frijoles son increíbles granos que las personas cultivamos y consumimos hce más de 11mil años. Pertenecen a varios géneros de la familia de las leguminosas, un grupo increíblemente variado, cosmopolita y con algunas propiedades únicas.</p>
        </div>
      </div>

      <div className={styles.grid2}>
        <div className={styles.caja}></div>
        <div className={styles.caja}></div>
        <div className={styles.caja}></div>
        <div className={styles.caja}></div>
      </div>
      
    </section>
  )
}

export default Section2Home
import React from 'react'
import styles from './BeneficiosHome.module.css';
import Boton from '../Boton/Boton';

const BeneficiosHome = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container2}>
      <div>
        <h2 className={styles.title}>SÚPERALIMENTO: <br /> BENEFICIOS DE LOS <br /> FRIJOLES</h2>
        <Boton title={'Ver beneficios'} url={'/benefits'} />
      </div>
      <div> 
        <p>Los beneficios de los frijoles son tantos que son considerados un superalimento. Aquí podrás descubrir todos los beneficios de los frijoles para tu salud.</p>
      </div>
      </div>
    </section>
  )
}

export default BeneficiosHome

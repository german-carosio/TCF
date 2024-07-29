import React from 'react';
import styles from './TiposHome.module.css';
import Boton2 from '../Boton2/Boton2';

const TiposHome = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container2}>
        <div>
          <h2 className={styles.title}>¿SABES CUÁNTOS TIPOS <br /> DE FRIJOLES HAY?</h2>
          <Boton2 title={'Ver tipos de frijoles'} url={'/tipos'} textColor="#fff"
            borderColor="#fff" />
        </div>
        <div>
          <p>Los frijoles son increíbles granos que las personas cultivamos y consumimos hace más de 11 mil años. Pertenecen a varios géneros de la familia de las leguminosas, un grupo increíblemente variado, cosmopolita y con algunas propiedades únicas.</p>
        </div>
      </div>
    </section>
  );
}

export default TiposHome;


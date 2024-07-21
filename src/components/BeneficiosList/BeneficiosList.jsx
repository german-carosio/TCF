// components/BeneficiosList.jsx
import React from 'react';
import BeneficiosData from '../../data/BeneficiosData';
import styles from './BeneficiosList.module.css';
import Boton from '../Boton/Boton';

const BeneficiosList = () => {
  return (
    <>
    <h2 className={styles.title}>Aprende los beneficios del consumo de frijoles</h2>
    <div className={styles.cardsContainer}>
      {BeneficiosData.map((beneficio) => (
        <div key={beneficio.id} className={styles.card}>
          <h2 className={styles.name}>{beneficio.name}</h2>
          <ul>
            {beneficio.beneficios.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
          <Boton title={'Ver más'} url={`/benefits/detail/${beneficio.id}`} />
        </div>
      ))}
    </div>
    </>
  );
};

export default BeneficiosList;




  
// components/BeneficiosList.jsx
import React from 'react';
import BeneficiosData from '../../data/BeneficiosData';
import styles from './BeneficiosList.module.css';
import Boton from '../Boton/Boton';

const BeneficiosList = () => {
  return (
    <>
      <h1 className={styles.title}>Aprende los beneficios del consumo de frijoles</h1>
      <div className={styles.cardsContainer}>
        {BeneficiosData.map((beneficio) => (
          <div key={beneficio.id} className={styles.card}>
            <img className={styles.img} src={beneficio.img} alt={beneficio.name} />
            <h2 className={styles.name}>{beneficio.name}</h2>
            <ul className={styles.list}>
              {beneficio.beneficios.map((item, index) => (
                <li key={index} className={styles.listItem}>{item.title}</li>
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






  
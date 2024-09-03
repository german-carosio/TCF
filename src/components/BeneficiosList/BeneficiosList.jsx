// components/BeneficiosList.jsx
import React from 'react';
import beneficiosData from '../../data/BeneficiosData';
import styles from './BeneficiosList.module.css';
import Boton from '../Boton/Boton';

const BeneficiosList = () => {
  return (
    <>
        <div className={styles.cardsContainer}>
        {beneficiosData.map((beneficio) => (
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






  
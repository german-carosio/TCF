// Tipos.jsx
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Margin from '../components/Margin/Margin';
import List from '../components/List/List';
import { getTiposDeFrijoles } from '../data/typesOfBeansData';
import styles from './Tipos.module.css'

const Tipos = () => {
  const [tiposDeFrijoles, setTiposDeFrijoles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTiposDeFrijoles();
        setTiposDeFrijoles(data);
      } catch (error) {
        console.error('Error al obtener tipos de frijoles:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Tipos - Todo con frijol</title>
        <meta name="description" content="Tipos de frijoles." />
        <meta name="keywords" content="tipos de frijoles, varaintes de frijoles, tipo de porotos" />
      </Helmet>

      <Margin>
        <h1 className={styles.title}>Aprende los beneficios del consumo de frijoles</h1>
        <List data={tiposDeFrijoles}  url={'/tipos/detail/'} />
        
      </Margin>
    </div>
  );
};

export default Tipos;




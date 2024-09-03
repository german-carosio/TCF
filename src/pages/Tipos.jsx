// Tipos.jsx
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Margin from '../components/Margin/Margin';
import ListType from '../components/ListType/ListType';
import { getTiposDeFrijoles } from '../data/typesOfBeansData';
import Title from '../components/Title/Title';


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
        <meta name="description" content="Descubre los diferentes tipos de frijoles y sus beneficios." />
        <meta name="keywords" content="tipos de frijoles, variantes de frijoles, tipo de porotos, beneficios de los frijoles" />
        <meta name="author" content="Todo con frijol" />
        <html lang="es" />
      </Helmet>


      <Margin>
        <Title txt={'Conoce la variedad de frijoles y sus nutrientes'} />
        <ListType data={tiposDeFrijoles} url={'/tipos/detail/'} />

      </Margin>
    </div>
  );
};

export default Tipos;




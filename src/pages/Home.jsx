// Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async'; // Importa Helmet desde react-helmet-async
import Hero from '../components/Hero/Hero';
import { Link } from 'react-router-dom';
import { useNavContext } from '../context/NavContext'; // Importa el contexto

const Home = () => {

  const { handleNavLinkClick } = useNavContext(); // Utiliza el contexto

  return (
    <>

      <Helmet>
        <title>Inicio - Todo con frijol</title>
        <meta name="description" content="Bienvenido a Todo con frijol." />
        <meta name="keywords" content="inicio, sitio web, react" />
      </Helmet>

      <Hero/>
      
    </>
    
  );
};

export default Home;






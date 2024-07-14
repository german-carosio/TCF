// Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async'; // Importa Helmet desde react-helmet-async
import Hero from '../components/Hero/Hero';
import RecipesHome from '../components/RecipesHome/RecipesHome';

const Home = () => {

  return (
    <>

      <Helmet>
        <title>Inicio - Todo con frijol</title>
        <meta name="description" content="Bienvenido a Todo con frijol." />
        <meta name="keywords" content="inicio, sitio web, react" />
      </Helmet>

      <Hero/>
      <RecipesHome />
    </>
    
  );
};

export default Home;






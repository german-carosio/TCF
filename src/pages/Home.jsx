// Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async'; // Importa Helmet desde react-helmet-async
import Hero from '../components/Hero/Hero';
import Section from '../components/Section/Section';
import Section2Home from '../components/Section2Home/Section2Home';

const Home = () => {
  return (
    <div>

      <Helmet>
        <title>Inicio - Todo con frijol</title>
        <meta name="description" content="Bienvenido a Todo con frijol." />
        <meta name="keywords" content="inicio, sitio web, react" />
      </Helmet>

      <Hero/>
      <Section2Home/>
      <Section/>
    </div>
    
  );
};

export default Home;






// AboutUs.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>About Us - Todo con frijol</title>
        <meta name="description" content="Conócenos más." />
        <meta name="keywords" content="about us, sitio web, react" />
      </Helmet>
      <div className='portada'>
        <h1>About</h1>
        <p>Contenido de la página AboutUs</p>
      </div>
    </div>
  );
};

export default AboutUs;



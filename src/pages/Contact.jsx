// Contact.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact - Todo con frijol</title>
        <meta name="description" content="Ponte en contacto con nosotros." />
        <meta name="keywords" content="contact, sitio web, react" />
      </Helmet>
      <div className='portada'>
        <h1>Contact</h1>
        <p>Contenido de la página Contact</p>
      </div>
    </div>
  );
};

export default Contact;


// Contact.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Margin from '../components/Margin/Margin';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact - Todo con frijol</title>
        <meta name="description" content="Ponte en contacto con nosotros." />
        <meta name="keywords" content="contact, sitio web, react" />
      </Helmet>
      <Margin>
        <h1>Contact</h1>
        <p>Contenido de la página Contact</p>
        </Margin>
    </div>
  );
};

export default Contact;


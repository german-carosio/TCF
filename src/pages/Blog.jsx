// AboutUs.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Margin from '../components/Margin/Margin';

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Blog - Todo con frijol</title>
        <meta name="description" content="Beneficios de frijoles." />
        <meta name="keywords" content="Beneficios de frijoles, Beneficios de porotos" />
      </Helmet>

      <Margin>
        <p>En construcción</p>
      </Margin>
    </div>
  );
};

export default Blog;



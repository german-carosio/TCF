// src/pages/Blog.jsx
import { Helmet } from 'react-helmet-async';
import Margin from '../components/Margin/Margin';
import BlogList from '../components/BlogList/BlogList';
import { useEffect } from 'react';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog - Todo con frijol</title>
        <meta name="description" content="Blog, Sigue las noticias de Todo con frijol" />
        <meta name="keywords" content="blog, blog Todo con frijol, noticias Todo con frijol" />
        <meta name="author" content="Todo con frijol" />
        <html lang="es" />
      </Helmet>


      <Margin>
        <BlogList />
      </Margin>
    </>
  );
};

export default Blog;





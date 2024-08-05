// src/components/BlogList/BlogList.jsx
import React from 'react';
import blogRoutes from '../../data/blogRoutes';
import styles from './BlogList.module.css';
import Boton from "../Boton/Boton";

const BlogList = () => {
  return (
    <div>
      <div className={styles.cabecera}>
        <h1>Blog | Sigue las noticias de Todo con frijol</h1>
      </div>
      <div className={styles.cardContainer}>
        {blogRoutes.length === 0 ? (
          <p className={styles.sinEntradas}>No hay entradas nuevas.</p>
        ) : (
          blogRoutes.map((route, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.txt}>
                <p className={styles.cardDate}>{route.date}</p>
                <h2 className={styles.title}>{route.title}</h2>
              </div>
              <div className={styles.cardImage}>
                <img src={route.image} alt={route.title} />
              </div>
              <div className={styles.cardContent}>
                <p>{route.summary}</p>
              </div>
              <Boton title={'ver más'} url={route.path} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogList;





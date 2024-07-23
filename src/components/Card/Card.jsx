import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import styles from './Card.module.css';

// Función para formatear el título
const formatTitle = (title) => {
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};

// Componente para mostrar una tarjeta de receta
const Card = ({ data, detailUrl }) => {
    return (
        <div className={styles.recipeCard}>
            <Link to={`${detailUrl}${data.id}`} className={styles.link}>
                <LazyLoad height={200} offset={800}>
                    <img src={data.img} alt={data.title} className={styles.recipeImage} />
                </LazyLoad>
                <div className={styles.capa}></div>
                <h3 className={styles.title}>{formatTitle(data.title)}</h3>
            </Link>
        </div>
    );
};

export default Card;




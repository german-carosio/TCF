import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RecipeCard.module.css';

// Componente para mostrar una tarjeta de receta
const RecipeCard = ({ data }) => {
    return (
        <div className={styles.recipeCard}>
            <Link to={`/recipes/detail/${data.id}`} className={styles.link}>
                <img src={data.image} alt={data.title} className={styles.recipeImage} />
                <div className={styles.capa}></div>
                <h3 className={styles.title}>{data.title}</h3>
            </Link>
        </div>
    );
};

export default RecipeCard;


import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RecipeCard.module.css';

// Componente para mostrar una tarjeta de receta
const RecipeCard = ({ recipe }) => {
    return (
        <div className={styles.recipeCard}>
            <Link to={`/recipes/${recipe.id}`} className={styles.link}>
                <img src={recipe.image} alt={recipe.title} className={styles.recipeImage} />
                <div className={styles.capa}></div>
                <h3 className={styles.title}>{recipe.title}</h3>
            </Link>
        </div>
    );
};

export default RecipeCard;


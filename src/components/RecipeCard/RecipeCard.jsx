import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RecipeCard.module.css';

// Componente para mostrar una tarjeta de receta
const RecipeCard = ({ recipe }) => {
    return (
        <div className={styles.recipeCard}>
            {/* Mostrar la imagen de la receta */}
            <img src={recipe.image} alt={recipe.title} className={styles.recipeImage} />
            {/* Mostrar la información de la receta */}
            <div className={styles.recipeInfo}>
                {/* Mostrar el título de la receta */}
                <h2 className={styles.recipeTitle}>{recipe.title}</h2>
                {/* Enlace para ver los detalles de la receta */}
                <Link to={`/recipes/${recipe.id}`} className={styles.recipeButton}>Ver Receta</Link>
            </div>
        </div>
    );
};

export default RecipeCard;


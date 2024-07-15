import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RecipeCardHero.module.css';

// Componente para mostrar una tarjeta de receta
const RecipeCardHero = ({ recipe }) => {
    return (
        <div className={styles.recipeCard}>
            <Link to={`/recipes/${recipe.id}`} className={styles.link}>
                <img src={recipe.image} alt={recipe.title} className={styles.recipeImage} />
                <div className={styles.txt}>
                    <p className={styles.categorie}>#Categoría</p>
                    <h3 className={styles.title}>{recipe.title}</h3>
                </div>

            </Link>
        </div>
    );
};

export default RecipeCardHero;


import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RecipeCardHero.module.css';

const RecipeCardHero = ({ recipe }) => {
    // Función para formatear el título
    const formatTitle = (title) => {
        return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    };

    return (
        <div className={styles.recipeCard}>
            <Link to={`/recipes/detail/${recipe.id}`} className={styles.link}>
                {/* Implementación de lazy loading en la imagen */}
                <img
                    src={recipe.img}
                    alt={recipe.title}
                    className={styles.recipeImage}
                    loading="lazy"
                />
                <div className={styles.txt}>
                    <div className={styles.categories}>
                        {recipe.category.length > 0 && (
                            <p className={styles.categorie}>
                                #{recipe.category[0]}
                            </p>
                        )}
                    </div>
                    <h3 className={styles.title}>{formatTitle(recipe.title)}</h3>
                    <div className={styles.types}>
                        {recipe.type.map((beanType, index) => (
                            <p key={index} className={styles.type}>
                                {beanType}
                            </p>
                        ))}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default RecipeCardHero;






import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RecipeCardHero.module.css';
import { useRecipesContext } from '../../context/RecipesContext';

const RecipeCardHero = ({ recipe }) => {
    // Función para formatear el título
    const formatTitle = (title) => {
        return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    };

    const { categories } = useRecipesContext();

    const getCategoryUrl = (categoryName) => {
        const category = categories.find(cat => cat.name === categoryName);
        return category ? category.url : '';
    };

    return (
        <div className={styles.recipeCard}>
            <Link to={`/recipes/detail/${recipe.id}`} className={styles.link}>
                <img src={recipe.img} alt={recipe.title} className={styles.recipeImage} />
                <div className={styles.txt}>
                    <div className={styles.categories}>
                        {recipe.category.map((cat, index) => (
                            <p key={index} className={styles.categorie}>
                                #{cat}
                            </p>
                        ))}
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





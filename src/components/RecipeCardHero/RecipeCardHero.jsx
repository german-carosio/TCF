import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RecipeCardHero.module.css';
import { useRecipesContext } from '../../context/RecipesContext';

const RecipeCardHero = ({ recipe }) => {
    const { categories } = useRecipesContext();

    const getCategoryUrl = (categoryName) => {
        const category = categories.find(cat => cat.name === categoryName);
        return category ? category.url : '';
    };

    return (
        <div className={styles.recipeCard}>
            <Link to={`/recipes/${recipe.id}`} className={styles.link}>
                <img src={recipe.image} alt={recipe.title} className={styles.recipeImage} />
                <div className={styles.txt}>
                    <div className={styles.categories}>
                        {recipe.category.map((cat, index) => (
                            <p key={index} className={styles.categorie}>
                                <Link to={`/recipes/category/${getCategoryUrl(cat)}`} className={styles.categoryLink}>
                                    #{cat}
                                </Link>
                            </p>
                        ))}
                    </div>
                    <h3 className={styles.title}>{recipe.title}</h3>
                </div>
            </Link>
        </div>
    );
};

export default RecipeCardHero;



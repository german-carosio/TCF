// src/components/RecipesHome/RecipesHome.jsx
import React from 'react';
import { useRecipesContext } from '../../context/RecipesContext';
import RecipeCardHero from '../RecipeCardHero/RecipeCardHero';
import styles from './RecipesHome.module.css';

const RecipesHome = () => {
    const { recipes } = useRecipesContext();
    const latestRecipes = recipes.slice(-4).reverse(); // Obtener las últimas 4 recetas

    return (
        <div className={styles.recipesHome}>
            <div className={styles.recipesGrid}>
                {latestRecipes.map(recipe => (
                    <RecipeCardHero key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default RecipesHome;

import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import styles from './RecipeList.module.css';

const RecipeList = ({ data }) => {
    return (
        <div className={styles.recipeList}>
            <div className={styles.recipesGrid}>
                {data.map(item => (
                    <RecipeCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default RecipeList;














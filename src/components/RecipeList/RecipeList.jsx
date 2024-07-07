import React, { useEffect, useState } from 'react';
import { getRecipes } from '../../data/recipesData';
import { getCategories } from '../../data/categoriesData';
import RecipeCard from '../RecipeCard/RecipeCard';
import styles from './RecipeList.module.css';

// Componente que muestra una lista de recetas
const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchRecipesAndCategories = async () => {
            try {
                const recipeData = await getRecipes();
                const categoryData = await getCategories();
                setRecipes(recipeData);
                setFilteredRecipes(recipeData);
                setCategories(categoryData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchRecipesAndCategories();
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        if (category === '') {
            setFilteredRecipes(recipes);
        } else {
            setFilteredRecipes(recipes.filter(recipe => recipe.category.includes(category)));
        }
    };

    return (
        <div className={styles.recipeList}>
            <h1 className={styles.title}>Incorpora los frijoles de maneras originales y deliciosas</h1>

            <div className={styles.filter}>
                <button
                    className={`${styles.categoryButton} ${selectedCategory === '' ? styles.active : ''}`}
                    onClick={() => handleCategoryChange('')}
                >
                    Todas
                </button>
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
                        onClick={() => handleCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className={styles.search}>
                <input type="text" placeholder="Buscar recetas por nombre, tipo de frijol o momento del día" />
                <button>🔍</button>
            </div>

            <div className={styles.recipesGrid}>
                {filteredRecipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default RecipeList;







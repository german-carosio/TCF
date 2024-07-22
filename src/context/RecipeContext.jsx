// RecipeContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getRecipes, getRecipeById } from '../data/recipesData';
import { getCategories } from '../data/categoriesData';

const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchRecipesAndCategories = async () => {
            try {
                const recipeData = await getRecipes();
                const categoryData = await getCategories();
                setRecipes(recipeData);
                setCategories(categoryData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchRecipesAndCategories();
    }, []);

    return (
        <RecipeContext.Provider value={{ recipes, categories, getRecipeById }}>
            {children}
        </RecipeContext.Provider>
    );
};

export { RecipeContext, RecipeProvider };


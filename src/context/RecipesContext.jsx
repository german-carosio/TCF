import React, { createContext, useContext, useEffect, useState } from 'react';
import { getRecipes } from '../data/recipesData';
import { getCategories } from '../data/categoriesData';

const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const recipesData = await getRecipes();
            const categoriesData = await getCategories();
            setRecipes(recipesData);
            setCategories(categoriesData);
        };
        fetchData();
    }, []);

    const getRecipeById = (id) => {
        return recipes.find(recipe => recipe.id === id);
    };

    return (
        <RecipesContext.Provider value={{ recipes, categories, getRecipeById }}>
            {children}
        </RecipesContext.Provider>
    );
};

export const useRecipesContext = () => {
    return useContext(RecipesContext);
};



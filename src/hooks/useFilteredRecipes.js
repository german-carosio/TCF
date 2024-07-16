import { useState, useEffect } from 'react';
import { useRecipesContext } from '../context/RecipesContext'; // Importa el contexto de recetas

const normalizeText = (text) => {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
};

const useFilteredRecipes = (searchTerm, selectedCategory) => {
    const { recipes, categories } = useRecipesContext(); // Obtiene recetas y categorías del contexto
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    useEffect(() => {
        const filterRecipes = () => {
            const normalizedSearchTerm = normalizeText(searchTerm);
            let filtered = recipes;

            if (selectedCategory !== '') {
                filtered = filtered.filter(recipe =>
                    recipe.category.some(cat => normalizeText(cat) === normalizeText(categories.find(category => category.name === selectedCategory)?.displayName))
                );
            }

            if (searchTerm !== '') {
                filtered = filtered.filter(recipe =>
                    normalizeText(recipe.title).includes(normalizedSearchTerm) ||
                    normalizeText(recipe.description).includes(normalizedSearchTerm) ||
                    recipe.ingredients.some(ingredient => normalizeText(ingredient).includes(normalizedSearchTerm)) ||
                    recipe.category.some(cat => normalizeText(cat).includes(normalizedSearchTerm))
                );
            }

            setFilteredRecipes(filtered);
        };

        filterRecipes();
    }, [searchTerm, selectedCategory, recipes, categories]);

    return filteredRecipes;
};

export default useFilteredRecipes;

import { useState, useEffect } from 'react';
import { useRecipesContext } from '../context/RecipesContext'; // Importa el contexto de recetas

// Función para normalizar texto
const normalizeText = (text) => {
    // Verifica si el texto es una cadena
    if (typeof text !== 'string') {
        return ''; // Retorna una cadena vacía si no es una cadena
    }
    // Normaliza el texto a minúsculas y elimina acentos
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
};

// Custom hook para filtrar recetas
const useFilteredRecipes = (searchTerm, selectedCategory) => {
    // Obtiene recetas y categorías del contexto
    const { recipes = [], categories = [] } = useRecipesContext();
    // Estado para almacenar las recetas filtradas
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    useEffect(() => {
        // Función para filtrar las recetas basadas en el término de búsqueda y categoría seleccionada
        const filterRecipes = () => {
            // Normaliza el término de búsqueda
            const normalizedSearchTerm = normalizeText(searchTerm);

            // Filtra recetas por categoría si se selecciona una categoría
            let filtered = selectedCategory ? recipes.filter(recipe => {
                const normalizedCategory = normalizeText(
                    categories.find(category => category.name === selectedCategory)?.displayName || ''
                );
                return recipe.category.some(cat => normalizeText(cat) === normalizedCategory);
            }) : recipes;

            // Filtra recetas por término de búsqueda si se proporciona
            if (searchTerm) {
                filtered = filtered.filter(recipe =>
                    normalizeText(recipe.title || '').includes(normalizedSearchTerm) ||
                    normalizeText(recipe.description || '').includes(normalizedSearchTerm) ||
                    (recipe.ingredients || []).some(ingredient => normalizeText(ingredient || '').includes(normalizedSearchTerm)) ||
                    (recipe.category || []).some(cat => normalizeText(cat || '').includes(normalizedSearchTerm))
                );
            }

            // Actualiza el estado con las recetas filtradas
            setFilteredRecipes(filtered);
        };

        // Ejecuta la función de filtrado cuando cambian las dependencias
        filterRecipes();
    }, [searchTerm, selectedCategory, recipes, categories]);

    // Retorna las recetas filtradas
    return filteredRecipes;
};

export default useFilteredRecipes;



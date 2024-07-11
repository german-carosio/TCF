import React, { useEffect, useState } from 'react';
import { useRecipesContext } from '../../context/RecipesContext';
import RecipeCard from '../RecipeCard/RecipeCard';
import FilterContainer from '../FilterContainer/FilterContainer';
import SearchBar from '../SearchBar/SearchBar';
import { useLocation } from 'react-router-dom';
import styles from './RecipeList.module.css';

const RecipeList = ({ selectedCategory = '' }) => {
    const { recipes, categories } = useRecipesContext();
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(selectedCategory);
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const search = params.get('search') || '';
        filterRecipes(search, currentCategory);
    }, [location.search, recipes, currentCategory]);

    const filterRecipes = (searchTerm, categoryName) => {
        let filtered = recipes;

        if (categoryName !== '') {
            filtered = filtered.filter(recipe =>
                recipe.category.some(cat => cat === categories.find(category => category.name === categoryName)?.displayName)
            );
        }

        if (searchTerm !== '') {
            filtered = filtered.filter(recipe =>
                recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        setFilteredRecipes(filtered);
    };

    const handleCategoryChange = (categoryName) => {
        setCurrentCategory(categoryName);
        const params = new URLSearchParams(location.search);
        const search = params.get('search') || '';
        filterRecipes(search, categoryName);
    };

    const handleSearch = (searchTerm) => {
        filterRecipes(searchTerm, currentCategory);
    };

    return (
        <div className={styles.recipeList}>
            <FilterContainer
                selectedCategory={currentCategory}
                setSelectedCategory={handleCategoryChange}
            />
            <SearchBar onSearch={handleSearch} />
            <div className={styles.recipesGrid}>
                {filteredRecipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default RecipeList;











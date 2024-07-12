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
    const [searchTerm, setSearchTerm] = useState('');
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const search = params.get('search') || '';
        setSearchTerm(search);
        filterRecipes(search, currentCategory);
    }, [location.search, recipes, currentCategory]);

    const normalizeText = (text) => {
        return text
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
    };

    const filterRecipes = (searchTerm, categoryName) => {
        const normalizedSearchTerm = normalizeText(searchTerm);
        let filtered = recipes;

        if (categoryName !== '') {
            filtered = filtered.filter(recipe =>
                recipe.category.some(cat => normalizeText(cat) === normalizeText(categories.find(category => category.name === categoryName)?.displayName))
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

    const handleCategoryChange = (categoryName) => {
        setCurrentCategory(categoryName);
        setSearchTerm('');
        filterRecipes('', categoryName);
    };

    const handleSearch = (searchTerm) => {
        setCurrentCategory('');
        setSearchTerm(searchTerm);
        filterRecipes(searchTerm, '');
    };

    return (
        <div className={styles.recipeList}>
            <FilterContainer
                selectedCategory={currentCategory}
                setSelectedCategory={handleCategoryChange}
                searchTerm={searchTerm}
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













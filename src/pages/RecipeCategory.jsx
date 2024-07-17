import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import List from '../components/List/List';
import { useRecipesContext } from '../context/RecipesContext';
import Margin from '../components/Margin/Margin';
import FilterContainer from '../components/FilterContainer/FilterContainer';
import SearchBar from '../components/SearchBar/SearchBar';
import { useState } from 'react';
import useFilteredRecipes from '../hooks/useFilteredRecipes';

const RecipeCategory = () => {
    const { categoryUrl } = useParams();
    const { categories } = useRecipesContext();
    const category = categories.find(c => c.url === categoryUrl);
    const [currentCategory, setCurrentCategory] = useState(category ? category.name : '');
    const [searchTerm, setSearchTerm] = useState('');
    const filteredRecipes = useFilteredRecipes(searchTerm, currentCategory);

    const handleCategoryChange = (categoryName) => {
        setCurrentCategory(categoryName);
        setSearchTerm('');
    };

    const handleSearch = (searchTerm) => {
        setCurrentCategory('');
        setSearchTerm(searchTerm);
    };

    return (
        <>
            <Helmet>
                <title>{category ? `${category.displayName} - Todo con frijol` : 'Categoría no encontrada'}</title>
                <meta name="description" content={`Recetas de ${category?.displayName}`} />
            </Helmet>

            <Margin>
                <FilterContainer
                    selectedCategory={currentCategory}
                    setSelectedCategory={handleCategoryChange}
                    searchTerm={searchTerm}
                />
                <SearchBar onSearch={handleSearch} />
                <List data={filteredRecipes} url={'/recipes/detail/'} />
            </Margin>
        </>
    );
};

export default RecipeCategory;





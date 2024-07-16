import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import RecipeList from '../components/RecipeList/RecipeList';
import Margin from '../components/Margin/Margin';
import FilterContainer from '../components/FilterContainer/FilterContainer';
import SearchBar from '../components/SearchBar/SearchBar';
import { useState } from 'react';
import useFilteredRecipes from '../hooks/useFilteredRecipes';
import { useLocation } from 'react-router-dom'; // Importa useLocation

const Recipes = () => {
    const [currentCategory, setCurrentCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const filteredRecipes = useFilteredRecipes(searchTerm, currentCategory);
    const location = useLocation(); // Obtiene la ubicación actual

    // Actualiza searchTerm cuando la ubicación cambia
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const search = params.get('search') || '';
        setSearchTerm(search);
    }, [location]);

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
                <title>Recetas - Todo con frijol</title>
                <meta name="description" content="Bienvenido a Todo con frijol" />
                <meta name="keywords" content="inicio, sitio web, react" />
            </Helmet>

            <Margin>
                <FilterContainer
                    selectedCategory={currentCategory}
                    setSelectedCategory={handleCategoryChange}
                    searchTerm={searchTerm}
                />
                <SearchBar onSearch={handleSearch} />
                <RecipeList data={filteredRecipes} />
            </Margin>
        </>
    );
};

export default Recipes;




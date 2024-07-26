import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import List from '../components/List/List';
import Margin from '../components/Margin/Margin';
import FilterContainer from '../components/FilterContainer/FilterContainer';
import SearchBar from '../components/SearchBar/SearchBar';
import useFilteredRecipes from '../hooks/useFilteredRecipes';
import { useLocation } from 'react-router-dom';
import Title from '../components/Title/Title';

const Recipes = () => {
    const [currentCategory, setCurrentCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const filteredRecipes = useFilteredRecipes(searchTerm, currentCategory);
    const location = useLocation();
    const filterRef = useRef(null);

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

    const noResultsMessage = (
        <div className="no-results-message">
            <p>No se encontraron resultados.</p>
        </div>
    );

    return (
        <>
            <Helmet>
                <title>Recetas - Todo con frijol</title>
                <meta name="description" content="Bienvenido a Todo con frijol" />
                <meta name="keywords" content="inicio, sitio web, react" />
            </Helmet>

            <Margin>
                <Title txt={'Incorpora los frijoles de maneras originales y deliciosas'} />
                <FilterContainer
                    selectedCategory={currentCategory}
                    setSelectedCategory={handleCategoryChange}
                    searchTerm={searchTerm}
                />
                <SearchBar onSearch={handleSearch} filterRef={filterRef} />
                {filteredRecipes.length > 0 ? (
                    <List data={filteredRecipes} url={'/recipes/detail/'} />
                ) : (
                    noResultsMessage
                )}
            </Margin>
        </>
    );
};

export default Recipes;









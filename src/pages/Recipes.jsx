import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import List from '../components/List/List';
import Margin from '../components/Margin/Margin';
import FilterContainer from '../components/FilterContainer/FilterContainer';
import SearchBar from '../components/SearchBar/SearchBar';
import useFilteredRecipes from '../hooks/useFilteredRecipes'; // Importa el hook
import { useLocation } from 'react-router-dom';

const Recipes = () => {
    const [currentCategory, setCurrentCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const filteredRecipes = useFilteredRecipes(searchTerm, currentCategory);
    const location = useLocation(); // Obtiene la ubicación actual
    const filterRef = useRef(null); // Referencia al contenedor de filtros
    const [isFixed, setIsFixed] = useState(false);

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

    useEffect(() => {
        const handleScroll = () => {
            const filterTop = filterRef.current?.offsetTop || 0;
            if (window.scrollY > filterTop) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Mensaje cuando no hay recetas que coincidan
    const noResultsMessage = (
        <div className="no-results-message">
            <p>No se encontraron recetas que coincidan con tu búsqueda.</p>
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
                <FilterContainer
                    selectedCategory={currentCategory}
                    setSelectedCategory={handleCategoryChange}
                    searchTerm={searchTerm}
                />
                <div
                    className={`Search-filter ${isFixed ? 'fixed' : ''}`}
                    ref={filterRef}
                >
                    <SearchBar onSearch={handleSearch} />
                </div>
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








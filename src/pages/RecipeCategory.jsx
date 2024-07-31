import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import List from '../components/List/List';
import { useRecipesContext } from '../context/RecipesContext';
import Margin from '../components/Margin/Margin';
import FilterContainer from '../components/FilterContainer/FilterContainer';
import SearchBar from '../components/SearchBar/SearchBar';
import { useState, useRef } from 'react';
import useFilteredRecipes from '../hooks/useFilteredRecipes';
import Title from '../components/Title/Title';

const RecipeCategory = () => {
    const { categoryUrl } = useParams();
    const { categories } = useRecipesContext();
    const category = categories.find(c => c.url === categoryUrl);
    const [currentCategory, setCurrentCategory] = useState(category ? category.name : '');
    const [searchTerm, setSearchTerm] = useState('');
    const filteredRecipes = useFilteredRecipes(searchTerm, currentCategory);
    const filterRef = useRef(null); // Añade la referencia aquí


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
                <meta name="keywords" content={`recetas, ${category?.displayName?.toLowerCase()}, frijoles, alimentación saludable`} />
                <meta name="author" content="Todo con frijol" />
                <html lang="es" />
            </Helmet>


            <Margin>
                <Title txt={'Incorpora los frijoles de maneras originales y deliciosas'} />
                <FilterContainer
                    selectedCategory={currentCategory}
                    setSelectedCategory={handleCategoryChange}
                    searchTerm={searchTerm}
                />
                <SearchBar onSearch={handleSearch} filterRef={filterRef} />
                <List data={filteredRecipes} url={'/recipes/detail/'} />
            </Margin>
        </>
    );
};

export default RecipeCategory;





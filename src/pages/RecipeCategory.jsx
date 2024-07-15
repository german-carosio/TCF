import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import RecipeList from '../components/RecipeList/RecipeList';
import { useRecipesContext } from '../context/RecipesContext';
import Margin from '../components/Margin/Margin';

const RecipeCategory = () => {
    const { categoryUrl } = useParams();
    const { categories } = useRecipesContext();
    const category = categories.find(c => c.url === categoryUrl);

    return (
        <>
            <Helmet>
                <title>{category ? `${category.displayName} - Todo con frijol` : 'Categoría no encontrada'}</title>
                <meta name="description" content={`Recetas de ${category?.displayName}`} />
            </Helmet>

            <Margin>
                <RecipeList selectedCategory={category ? category.name : ''} />
            </Margin>
        </>
    );
};

export default RecipeCategory;



import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './DetailRecipe.module.css';
import { Helmet } from 'react-helmet-async';
import FilterContainer from '../FilterContainer/FilterContainer';
import { useRecipesContext } from '../../context/RecipesContext';
import SearchBar from '../SearchBar/SearchBar';
import Margin from '../Margin/Margin';

const DetailRecipe = () => {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);
    const navigate = useNavigate();
    const { /* categories, */ getRecipeById } = useRecipesContext();

    useEffect(() => {
        const fetchRecipe = () => {
            try {
                const data = getRecipeById(parseInt(recipeId));
                setRecipe(data);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };

        fetchRecipe();
    }, [recipeId, getRecipeById]);

    const handleSearch = (searchTerm) => {
        navigate(`/recipes?search=${searchTerm}`);
    };

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Helmet>
                <title>{recipe.title} - {recipe.description}</title>
                <meta name="description" content={recipe.description} />
            </Helmet>
            <Margin>
                <FilterContainer selectedCategory={''} setSelectedCategory={() => {}} isDetailPage={true} />
                <SearchBar onSearch={handleSearch} />
                <div className={styles.recipeDetail}>
                    <h2 className={styles.recipeTitle}>{recipe.title}</h2>
                    <div className={styles.content}>
                        <div className={styles.imageContainer}>
                            <img src={recipe.image} alt={recipe.title} className={styles.recipeImage} />
                        </div>
                        <div className={styles.infoContainer}>
                            <div className={styles.ingredients}>
                                <h4>Ingredientes:</h4>
                                <ul>
                                    {recipe.ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.steps}>
                                <h4>Pasos:</h4>
                                <ol>
                                    {recipe.steps.map((step, index) => (
                                        <li key={index}>{step}</li>
                                    ))}
                                </ol>
                            </div>
                            <button> Compartir</button>
                        </div>
                    </div>
                </div>
            </Margin>
        </>
    );
};

export default DetailRecipe;


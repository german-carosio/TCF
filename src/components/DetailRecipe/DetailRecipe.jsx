import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styles from './DetailRecipe.module.css';
import { Helmet } from 'react-helmet-async';
import FilterContainer from '../FilterContainer/FilterContainer';
import { useRecipesContext } from '../../context/RecipesContext';
import SearchBar from '../SearchBar/SearchBar';


const formatTitle = (title) => {
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};

const DetailRecipe = () => {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);
    const { getRecipeById } = useRecipesContext();
    const filterRef = useRef(null); // Añade la referencia aquí

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

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Helmet>
                <title>{formatTitle(recipe.title)} - {recipe.description}</title>
                <meta name="description" content={recipe.description} />
            </Helmet>
            
                <FilterContainer selectedCategory={''} setSelectedCategory={() => {}} isDetailPage={true} />
                <SearchBar onSearch={() => {}} filterRef={filterRef} /> {/* Pasa filterRef aquí */}
                <div className={styles.recipeDetail}>
                    <h2 className={styles.recipeTitle}>{formatTitle(recipe.title)}</h2>
                    <div className={styles.content}>
                        <div className={styles.imageContainer}>
                            <img src={recipe.img} alt={recipe.title} className={styles.recipeImage} />
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
                        </div>
                    </div>
                </div>
           
        </>
    );
};

export default DetailRecipe;








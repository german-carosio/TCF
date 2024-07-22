import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Hooks para obtener parámetros de la URL y navegar
import styles from './DetailRecipe.module.css'; // Importa los estilos CSS
import { Helmet } from 'react-helmet-async'; // Importa Helmet desde react-helmet-async
import FilterContainer from '../FilterContainer/FilterContainer'; // Importa el componente FilterContainer
import { useRecipesContext } from '../../context/RecipesContext'; // Hook para obtener el contexto de recetas
import SearchBar from '../SearchBar/SearchBar'; // Importa el componente SearchBar
import Margin from '../Margin/Margin'; // Importa el componente Margin

// Función para formatear el título
const formatTitle = (title) => {
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};

const DetailRecipe = () => {
    const { recipeId } = useParams(); // Obtiene el parámetro recipeId de la URL
    const [recipe, setRecipe] = useState(null); // Estado para la receta
    const navigate = useNavigate(); // Hook para navegar
    const { getRecipeById } = useRecipesContext(); // Obtiene la función getRecipeById desde el contexto

    useEffect(() => {
        const fetchRecipe = () => {
            try {
                const data = getRecipeById(parseInt(recipeId)); // Obtiene la receta por ID
                setRecipe(data); // Establece la receta en el estado
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };

        fetchRecipe();
    }, [recipeId, getRecipeById]);

    const handleSearch = (searchTerm) => {
        navigate(`/recipes?search=${searchTerm}`); // Navega a la página de recetas con el término de búsqueda
    };

    if (!recipe) {
        return <div>Loading...</div>; // Muestra un mensaje de carga si la receta no está disponible
    }

    return (
        <>
            <Helmet>
                <title>{formatTitle(recipe.title)} - {recipe.description}</title>
                <meta name="description" content={recipe.description} />
            </Helmet>
            <Margin>
                <FilterContainer selectedCategory={''} setSelectedCategory={() => {}} isDetailPage={true} /> {/* Renderiza FilterContainer */}
                <SearchBar onSearch={handleSearch} /> {/* Renderiza SearchBar */}
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
            </Margin>
        </>
    );
};

export default DetailRecipe;





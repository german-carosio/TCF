// Importaciones de React y otros módulos necesarios
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Importar "useParams" y "Link" de react-router-dom para manejar los parámetros de la URL y la navegación
import { getRecipeById } from '../data/recipesData'; // Importar la función para obtener la receta por su ID
import styles from './RecipeDetail.module.css'; // Importar los estilos CSS del módulo
import { Helmet } from 'react-helmet-async'; // Importa Helmet desde react-helmet-async

// Componente de detalle de la receta
const RecipeDetail = () => {
    const { recipeId } = useParams(); // Obtener el ID de la receta de los parámetros de la URL
    const [recipe, setRecipe] = useState(null); // Estado para almacenar la información de la receta

    // Efecto para obtener la receta cuando el componente se monta o el ID de la receta cambia
    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const data = await getRecipeById(parseInt(recipeId)); // Obtener la receta por su ID convertido a entero
                setRecipe(data); // Actualizar el estado con la información de la receta obtenida
            } catch (error) {
                console.error('Error fetching recipe:', error); // Manejar errores en la obtención de la receta
            }
        };

        fetchRecipe(); // Llamar a la función para obtener la receta
    }, [recipeId]); // El efecto se ejecuta cada vez que el ID de la receta cambia

    // Renderizar un mensaje de carga si la receta aún no se ha cargado
    if (!recipe) {
        return <div>Loading...</div>;
    }

    // Renderizar el componente de detalle de la receta con la información obtenida
    return (
        <>
            {/* Helmet para actualizar el título y la descripción meta */}
            <Helmet>
                <title>{recipe.title} - {recipe.description}</title>
                <meta name="description" content={recipe.description} />
            </Helmet>

            <div className={styles.recipeDetail}>
                <h2 className={styles.recipeTitle}>{recipe.title}</h2>
                {/* Contenedor para el contenido */}
                <div className={styles.content}>
                    {/* Contenedor para la imagen de la receta */}
                    <div className={styles.imageContainer}>
                        <img src={recipe.image} alt={recipe.title} className={styles.recipeImage} /> {/* Mostrar la imagen de la receta */}
                    </div>
                    {/* Contenedor para la información de la receta */}
                    <div className={styles.infoContainer}>
                        <p className={styles.description}>{recipe.description}</p> {/* Mostrar la descripción de la receta */}
                        {/* Contenedor para los ingredientes de la receta */}
                        <div className={styles.ingredients}>
                            <h4>Ingredientes:</h4>
                            <ul>
                                {/* Iterar sobre los ingredientes y mostrar cada uno */}
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                        {/* Contenedor para los pasos de la receta */}
                        <div className={styles.steps}>
                            <h4>Pasos:</h4>
                            <ol>
                                {/* Iterar sobre los pasos y mostrar cada uno */}
                                {recipe.steps.map((step, index) => (
                                    <li key={index}>{step}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
                {/* Enlace para ver todas las recetas */}
                <Link to="/recipes" className={styles.allRecipesButton}>Ver todas las recetas</Link>
            </div>
        </>

    );
};

export default RecipeDetail; // Exportar el componente de detalle de la receta





// RecipeList.jsx

import React, { useEffect, useState } from 'react'; // Importamos React, useEffect y useState
import { getRecipes } from '../../data/recipesData'; // Importamos la función para obtener recetas
import { getCategories } from '../../data/categoriesData'; // Importamos la función para obtener categorías
import RecipeCard from '../RecipeCard/RecipeCard'; // Importamos el componente RecipeCard
import styles from './RecipeList.module.css'; // Importamos los estilos CSS module

// Componente que muestra una lista de recetas
const RecipeList = () => {
    const [recipes, setRecipes] = useState([]); // Estado para almacenar las recetas obtenidas
    const [filteredRecipes, setFilteredRecipes] = useState([]); // Estado para almacenar las recetas filtradas
    const [categories, setCategories] = useState([]); // Estado para almacenar las categorías
    const [selectedCategory, setSelectedCategory] = useState(''); // Estado para almacenar la categoría seleccionada

    // Efecto para obtener las recetas y categorías cuando el componente se monta
    useEffect(() => {
        const fetchRecipesAndCategories = async () => {
            try {
                const recipeData = await getRecipes(); // Obtener las recetas desde el archivo de datos
                const categoryData = await getCategories(); // Obtener las categorías desde el archivo de datos
                setRecipes(recipeData); // Actualizar el estado con las recetas obtenidas
                setFilteredRecipes(recipeData); // Inicialmente, las recetas filtradas son todas las recetas
                setCategories(categoryData); // Establecer categorías únicas en el estado
            } catch (error) {
                console.error('Error fetching data:', error); // Manejar errores en la obtención de datos
            }
        };
        fetchRecipesAndCategories(); // Llamar a la función para obtener las recetas y categorías
    }, []); // La dependencia es un arreglo vacío, se ejecutará solo una vez al montar el componente

    // Función para manejar el cambio en el filtro de categoría
    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category); // Establecer la categoría seleccionada
        if (category === '') {
            setFilteredRecipes(recipes); // Si no se selecciona ninguna categoría, mostrar todas las recetas
        } else {
            setFilteredRecipes(recipes.filter(recipe => recipe.category.includes(category))); // Filtrar las recetas por la categoría seleccionada
        }
    };

    return (
        <div className={styles.recipeList}>
            {/* Título de la lista de recetas */}
            <h1 className={styles.title}>Recetas</h1>

            {/* Filtro de categorías */}
            <div className={styles.filter}>
                {/* <label htmlFor="category">Filtrar por categoría: </label> */}
                <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">Todas</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            {/* Mapear cada receta para renderizar un componente RecipeCard */}
            <div className={styles.recipesGrid}>
                {filteredRecipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default RecipeList;



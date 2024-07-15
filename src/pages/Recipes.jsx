//Recipes.jsx

import { Helmet } from 'react-helmet-async'; // Importa Helmet desde react-helmet-async
import RecipeList from '../components/RecipeList/RecipeList';
import Margin from '../components/Margin/Margin';

const Recipes = () => {
    return (
        <>
            <Helmet>
                <title>Recetas - Todo con frijol</title>
                <meta name="description" content="Bienvenido a Todo con frijol" />
                <meta name="keywords" content="inicio, sitio web, react" />
            </Helmet>

            <div>
                <Margin>
                <RecipeList />
                </Margin>
            </div>
        </>


    );
};

export default Recipes;

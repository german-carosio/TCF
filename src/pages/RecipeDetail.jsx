
import DetailRecipe from '../components/DetailRecipe/DetailRecipe'; // Importa el componente DetailRecipe
import Margin from '../components/Margin/Margin';
import Title from '../components/Title/Title';
import RecipesHome from '../components/RecipesHome/RecipesHome';

const RecipeDetail = () => {

    return (
        <>
            <Margin>
                <Title txt={'Incorpora los frijoles de maneras originales y deliciosas'} />
                <DetailRecipe /> {/* Renderiza el componente DetailRecipe */}
                <h2 className='title-DetailRecipe'>Prueba otras recetas</h2>
                <RecipesHome />
            </Margin>
        </>
    );
};

export default RecipeDetail;













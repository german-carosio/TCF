import DetailRecipe from '../components/DetailRecipe/DetailRecipe'; // Importa el componente DetailRecipe
import Margin from '../components/Margin/Margin';
import Title from '../components/Title/Title';

const RecipeDetail = () => {
    return (
        <>
            <Margin>
                <Title txt={'Incorpora los frijoles de maneras originales y deliciosas'} />
                <DetailRecipe /> {/* Renderiza el componente DetailRecipe */}
            </Margin>
        </>
    );
};

export default RecipeDetail;













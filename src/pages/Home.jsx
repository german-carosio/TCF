// Home.jsx
import { Helmet } from 'react-helmet-async'; // Importa Helmet desde react-helmet-async
import Hero from '../components/Hero/Hero';
import RecipesHome from '../components/RecipesHome/RecipesHome';
import TiposHome from '../components/TiposHome/TiposHome';
import Margin from '../components/Margin/Margin';
import BeneficiosHome from '../components/BeneficiosHome/BeneficiosHome';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Todo con frijol</title>
        <meta name="description" content="Bienvenido a Todo con frijol, tu fuente de información sobre todos los tipos de frijoles y sus beneficios." />
        <meta name="keywords" content="frijoles, recetas con frijoles, beneficios frijoles, tipos de frijoles, alimentación saludable" />
        <meta name="author" content="Todo con frijol" />
        <html lang="es" />
      </Helmet>

      <Margin>
        <Hero />
        <RecipesHome />
      </Margin>
      <TiposHome />
      <BeneficiosHome />
    </>
  );
};

export default Home;






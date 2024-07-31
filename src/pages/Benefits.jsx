import { Helmet } from 'react-helmet-async';
import Margin from '../components/Margin/Margin';
import BeneficiosList from '../components/BeneficiosList/BeneficiosList';
import Title from '../components/Title/Title';

const Benefits = () => {

  return (
    <>
      <Helmet>
        <title>Beneficios - Todo con frijol</title>
        <meta name="description" content="Beneficios de frijoles." />
        <meta name="keywords" content="Beneficios de frijoles, Beneficios de porotos" />
        <meta name="author" content="Todo con frijol" />
        <html lang="es" />
      </Helmet>

      <Margin>
        <Title txt={'Aprende los beneficios del consumo de frijoles'} />
        <BeneficiosList />
      </Margin>
    </>
  );
};

export default Benefits;





// pages/BenefitDetail.jsx
import React, { useEffect } from 'react';
import BeneficiosDetail from '../components/BeneficiosDetail/BeneficiosDetail';
import Title from '../components/Title/Title';
import Margin from '../components/Margin/Margin';

const BenefitDetail = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Desplazarse al inicio de la página al montar el componente
      }, []);


    return (
        <>
            <Margin>
                <Title txt={'Aprende los beneficios del consumo de frijoles'} />
                <BeneficiosDetail />
            </Margin>
        </>

    );
};

export default BenefitDetail;





// pages/BenefitDetail.jsx
import React from 'react';
import BeneficiosDetail from '../components/BeneficiosDetail/BeneficiosDetail';
import Title from '../components/Title/Title';
import Margin from '../components/Margin/Margin';

const BenefitDetail = () => {
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





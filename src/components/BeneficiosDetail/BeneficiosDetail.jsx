// components/BeneficiosDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BeneficiosData from '../../data/BeneficiosData';
import Margin from '../Margin/Margin';
import styles from './BeneficiosDetail.module.css';
import Boton2 from '../Boton2/Boton2';

const BeneficiosDetail = () => {
    const { benefitId } = useParams();
    const navigate = useNavigate();
    const benefit = BeneficiosData.find(b => b.id === parseInt(benefitId, 10));

    if (!benefit) {
        return <div>Beneficio no encontrado</div>;
    }

    return (
        <div>
            <Helmet>
                <title>{benefit.name} - Todo con frijol</title>
                <meta name="description" content={`Detalles de ${benefit.name}.`} />
            </Helmet>

            <Margin>
                <h1>{benefit.name}</h1>
                <div className={styles.grid}>
                    {benefit.beneficios.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <h2>{item.title}</h2>
                            <p>{item.content}</p>
                        </div>
                    ))}
                </div>
                <Boton2
                    title="Volver"
                    url="#"
                    onClick={() => navigate(-1)}
                    textColor="#4C772D"
                    borderColor="#4C772D"
                />
            </Margin>
        </div>
    );
};

export default BeneficiosDetail;

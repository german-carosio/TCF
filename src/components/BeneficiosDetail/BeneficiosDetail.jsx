import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import beneficiosData from '../../data/BeneficiosData';
import styles from './BeneficiosDetail.module.css';
import Boton2 from '../Boton2/Boton2';

const BeneficiosDetail = () => {
    const { benefitId } = useParams();
    const navigate = useNavigate();
    const benefit = beneficiosData.find(b => b.id === parseInt(benefitId, 10));

    if (!benefit) {
        return <div>Beneficio no encontrado</div>;
    }

    return (
        <>
            <Helmet>
                <title>{benefit.name} - Todo con frijol</title>
                <meta name="description" content={`Detalles de ${benefit.name}.`} />
                <meta name="keywords" content={`beneficios, ${benefit.name}, frijoles`} />
                <meta name="author" content="Todo con frijol" />
                <html lang="es" />
            </Helmet>



            <h2 className={styles.title}></h2>
            <div className={styles.container}>
                <h3>{benefit.name}</h3>
                <div className={styles.grid}>
                    {benefit.beneficios.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.btn}>
                    <Boton2
                        title="Volver"
                        url="#"
                        onClick={() => navigate(-1)}
                        textColor="#4C772D"
                        borderColor="#4C772D"
                        hoverColor="var(--verde)"
                    />
                </div>
            </div>

        </>
    );
};

export default BeneficiosDetail;

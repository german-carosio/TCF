// TiposDetail.jsx

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importa el hook useParams para obtener parámetros de la URL
import { Helmet } from 'react-helmet-async'; // Importa Helmet desde react-helmet-async
import Margin from '../components/Margin/Margin'; // Importa el componente Margin
import { getTiposById } from '../data/typesOfBeansData'; // Importa la función getTiposById
import Title from '../components/Title/Title';
import Boton2 from '../components/Boton2/Boton2';
import styles from "./TiposDetail.module.css";

const TiposDetail = () => {
    const { tiposId } = useParams(); // Obtiene el parámetro tiposId de la URL usando useParams
    const [tipoDeFrijol, setTipoDeFrijol] = useState(null); // Estado para el tipo de frijol
    const navigate = useNavigate(); // Hook para navegar

    useEffect(() => {
        const fetchTipoDeFrijol = async () => {
            try {
                const data = await getTiposById(parseInt(tiposId)); // Obtiene el tipo de frijol por ID
                setTipoDeFrijol(data); // Establece el tipo de frijol en el estado
            } catch (error) {
                console.error('Error fetching tipo de frijol:', error);
            }
        };

        fetchTipoDeFrijol();
    }, [tiposId]);

    if (!tipoDeFrijol) {
        return <div>Loading...</div>; // Muestra un mensaje de carga si el tipo de frijol no está disponible
    }

    return (
        <>
            <Helmet>
                <title>{tipoDeFrijol.title} - Todo con frijol</title>
                <meta name="description" content={tipoDeFrijol.description} />
                <meta name="keywords" content={`frijoles, ${tipoDeFrijol.title}, nutrientes frijoles`} />
                <meta name="author" content="Todo con frijol" />
                <html lang="es" />
            </Helmet>

            <Margin>
                <Title txt={'Conoce la variedad de frijoles y sus nutrientes'} />
                <section className={styles.container}>
                    <div className={styles.cabecera}>
                        <img className={styles.img} src={tipoDeFrijol.img} alt={tipoDeFrijol.title} />
                        <h2>{tipoDeFrijol.title}</h2>
                    </div>

                    <div className={styles.tableContainer}>
                        <table className={styles.nutritionTable}>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Result per 100gm</th>
                                    <th>Result per serving size 1/4 cup (49g)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Calorías</td>
                                    <td>{tipoDeFrijol.Calorias100}</td>
                                    <td>{tipoDeFrijol.Calorias49}</td>
                                </tr>
                                <tr>
                                    <td>Grasa Total</td>
                                    <td>{tipoDeFrijol.GrasaTotal100}</td>
                                    <td>{tipoDeFrijol.GrasaTotal49}</td>
                                </tr>
                                <tr>
                                    <td>Grasa Saturada</td>
                                    <td>{tipoDeFrijol.GrasaSaturada100}</td>
                                    <td>{tipoDeFrijol.GrasaSaturada49}</td>
                                </tr>
                                <tr>
                                    <td>Trans Fat</td>
                                    <td>{tipoDeFrijol.TransFat100}</td>
                                    <td>{tipoDeFrijol.TransFat49}</td>
                                </tr>
                                <tr>
                                    <td>Grasa Poliinsaturada</td>
                                    <td>{tipoDeFrijol.GrasaPoliinsaturada100}</td>
                                    <td>{tipoDeFrijol.GrasaPoliinsaturada49}</td>
                                </tr>
                                <tr>
                                    <td>Grasa Monoinsaturada</td>
                                    <td>{tipoDeFrijol.GrasaMonoinsaturada100}</td>
                                    <td>{tipoDeFrijol.GrasaMonoinsaturada49}</td>
                                </tr>
                                <tr>
                                    <td>Colesterol</td>
                                    <td>{tipoDeFrijol.Colesterol100}</td>
                                    <td>{tipoDeFrijol.Colesterol49}</td>
                                </tr>
                                <tr>
                                    <td>Sodio</td>
                                    <td>{tipoDeFrijol.Sodio100}</td>
                                    <td>{tipoDeFrijol.Sodio49}</td>
                                </tr>
                                <tr>
                                    <td>Total Carbohidratos</td>
                                    <td>{tipoDeFrijol.TotalCarbohidratos100}</td>
                                    <td>{tipoDeFrijol.TotalCarbohidratos49}</td>
                                </tr>
                                <tr>
                                    <td>Fibra</td>
                                    <td>{tipoDeFrijol.Fibra100}</td>
                                    <td>{tipoDeFrijol.Fibra49}</td>
                                </tr>
                                <tr>
                                    <td>Fibra Soluble</td>
                                    <td>{tipoDeFrijol.Fibrasoluble100}</td>
                                    <td>{tipoDeFrijol.Fibrasoluble49}</td>
                                </tr>
                                <tr>
                                    <td>Fibra Insoluble</td>
                                    <td>{tipoDeFrijol.FibraInsoluble100}</td>
                                    <td>{tipoDeFrijol.FibraInsoluble49}</td>
                                </tr>
                                <tr>
                                    <td>Azúcar</td>
                                    <td>{tipoDeFrijol.Azucar100}</td>
                                    <td>{tipoDeFrijol.Azucar49}</td>
                                </tr>
                                <tr>
                                    <td>Azúcar Agregada</td>
                                    <td>{tipoDeFrijol.AzucarAgregada100}</td>
                                    <td>{tipoDeFrijol.AzucarAgregada49}</td>
                                </tr>
                                <tr>
                                    <td>Proteína</td>
                                    <td>{tipoDeFrijol.Proteina100}</td>
                                    <td>{tipoDeFrijol.Proteina49}</td>
                                </tr>
                                <tr>
                                    <td>Vitamina D</td>
                                    <td>{tipoDeFrijol.VitaminaD100}</td>
                                    <td>{tipoDeFrijol.VitaminaD49}</td>
                                </tr>
                                <tr>
                                    <td>Calcio</td>
                                    <td>{tipoDeFrijol.Calcio100}</td>
                                    <td>{tipoDeFrijol.Calcio49}</td>
                                </tr>
                                <tr>
                                    <td>Hierro</td>
                                    <td>{tipoDeFrijol.Hierro100}</td>
                                    <td>{tipoDeFrijol.Hierro49}</td>
                                </tr>
                                <tr>
                                    <td>Potasio</td>
                                    <td>{tipoDeFrijol.Potasio100}</td>
                                    <td>{tipoDeFrijol.Potasio49}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <Boton2
                        title="Volver"
                        url="#"
                        onClick={() => navigate(-1)}
                        textColor="#4C772D"
                        borderColor="#4C772D"
                    />

                </section>

            </Margin>
        </>
    );
};

export default TiposDetail;





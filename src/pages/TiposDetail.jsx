// TiposDetail.jsx

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importa el hook useParams para obtener parámetros de la URL
import { Helmet } from 'react-helmet-async'; // Importa Helmet desde react-helmet-async
import Margin from '../components/Margin/Margin'; // Importa el componente Margin
import { getTiposById } from '../data/typesOfBeansData'; // Importa la función getTiposById
import Title from '../components/Title/Title';
import Boton2 from '../components/Boton2/Boton2';

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
            </Helmet>
            <Margin>
                <Title txt={'Conoce la variedad de frijoles y sus nutrientes'} />
                <h2>{tipoDeFrijol.title}</h2>
                <div>
                    <img src={tipoDeFrijol.img} alt={tipoDeFrijol.title} style={{ maxWidth: '100%' }} />
                    <p>{tipoDeFrijol.description}</p>
                    <h3>Nutrientes:</h3>
                    <ul>
                        <li>Calorías: {tipoDeFrijol.nutrientes.calorias} kcal</li>
                        <li>Proteína: {tipoDeFrijol.nutrientes.proteina} g</li>
                        <li>Grasa: {tipoDeFrijol.nutrientes.grasa} g</li>
                        <li>Carbohidratos: {tipoDeFrijol.nutrientes.carbohidratos} g</li>
                        <li>Fibra: {tipoDeFrijol.nutrientes.fibra} g</li>
                        <li>Hierro: {tipoDeFrijol.nutrientes.hierro} mg</li>
                        <li>Magnesio: {tipoDeFrijol.nutrientes.magnesio} mg</li>
                        <li>Fósforo: {tipoDeFrijol.nutrientes.fosforo} mg</li>
                        <li>Potasio: {tipoDeFrijol.nutrientes.potasio} mg</li>
                        <li>Zinc: {tipoDeFrijol.nutrientes.zinc} mg</li>
                    </ul>
                    <Boton2 
                        title="Volver"
                        url="#"
                        onClick={() => navigate(-1)}
                        textColor="#4C772D"
                        borderColor="#4C772D"
                    />
                </div>
            </Margin>
        </>
    );
};

export default TiposDetail;




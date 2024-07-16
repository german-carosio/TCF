export const tiposDeFrijoles = [
    {
        id: 1,
        nombre: 'Frijol Negro',
        img: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Black_Beans.jpg',
        nutrientes: {
            calorias: 341, // kcal
            proteina: 21.6, // g
            grasa: 1.42, // g
            carbohidratos: 62.4, // g
            fibra: 15.5, // g
            hierro: 5.02, // mg
            magnesio: 171, // mg
            fosforo: 352, // mg
            potasio: 1483, // mg
            zinc: 3.65, // mg
        }
    },
    {
        id: 2,
        nombre: 'Frijol Rojo',
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Kidney_Beans.jpg',
        nutrientes: {
            calorias: 337, // kcal
            proteina: 22.5, // g
            grasa: 1.06, // g
            carbohidratos: 61.3, // g
            fibra: 15.2, // g
            hierro: 8.2, // mg
            magnesio: 140, // mg
            fosforo: 406, // mg
            potasio: 1406, // mg
            zinc: 2.79, // mg
        }
    },
    {
        id: 3,
        nombre: 'Frijol Pinto',
        img: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Pinto_Beans.jpg',
        nutrientes: {
            calorias: 347, // kcal
            proteina: 21.4, // g
            grasa: 1.23, // g
            carbohidratos: 63.0, // g
            fibra: 15.5, // g
            hierro: 5.02, // mg
            magnesio: 176, // mg
            fosforo: 349, // mg
            potasio: 1393, // mg
            zinc: 2.52, // mg
        }
    },
    {
        id: 4,
        nombre: 'Garbanzos',
        img: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Chickpeas.jpg',
        nutrientes: {
            calorias: 378, // kcal
            proteina: 20.5, // g
            grasa: 6.04, // g
            carbohidratos: 62.0, // g
            fibra: 12.2, // g
            hierro: 4.31, // mg
            magnesio: 115, // mg
            fosforo: 366, // mg
            potasio: 875, // mg
            zinc: 3.43, // mg
        }
    },
    {
        id: 5,
        nombre: 'Frijol Blanco',
        img: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Navy_Beans.jpg',
        nutrientes: {
            calorias: 335, // kcal
            proteina: 22.3, // g
            grasa: 0.9, // g
            carbohidratos: 60.8, // g
            fibra: 15.3, // g
            hierro: 5.49, // mg
            magnesio: 175, // mg
            fosforo: 407, // mg
            potasio: 1548, // mg
            zinc: 3.65, // mg
        }
    },
    {
        id: 6,
        nombre: 'Frijol Lima',
        img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Lima_Beans.jpg',
        nutrientes: {
            calorias: 338, // kcal
            proteina: 21.5, // g
            grasa: 0.69, // g
            carbohidratos: 63.4, // g
            fibra: 19.0, // g
            hierro: 6.89, // mg
            magnesio: 224, // mg
            fosforo: 385, // mg
            potasio: 1724, // mg
            zinc: 2.83, // mg
        }
    },
    {
        id: 7,
        nombre: 'Frijol Cañón',
        img: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Great_Northern_Beans.jpg',
        nutrientes: {
            calorias: 339, // kcal
            proteina: 21.9, // g
            grasa: 1.14, // g
            carbohidratos: 62.4, // g
            fibra: 20.2, // g
            hierro: 4.36, // mg
            magnesio: 120, // mg
            fosforo: 367, // mg
            potasio: 1180, // mg
            zinc: 2.14, // mg
        }
    },
    {
        id: 8,
        nombre: 'Frijol Fava',
        img: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Fava_beans.jpg',
        nutrientes: {
            calorias: 341, // kcal
            proteina: 26.1, // g
            grasa: 1.53, // g
            carbohidratos: 58.3, // g
            fibra: 25.0, // g
            hierro: 6.7, // mg
            magnesio: 192, // mg
            fosforo: 421, // mg
            potasio: 1062, // mg
            zinc: 3.14, // mg
        }
    },
    {
        id: 9,
        nombre: 'Lenteja Roja',
        img: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Red_Lentils.jpg',
        nutrientes: {
            calorias: 352, // kcal
            proteina: 24.6, // g
            grasa: 1.06, // g
            carbohidratos: 63.4, // g
            fibra: 10.7, // g
            hierro: 7.54, // mg
            magnesio: 47, // mg
            fosforo: 281, // mg
            potasio: 677, // mg
            zinc: 2.76, // mg
        }
    },
    {
        id: 10,
        nombre: 'Frijol Adzuki',
        img: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Adzuki_Beans.jpg',
        nutrientes: {
            calorias: 329, // kcal
            proteina: 20.0, // g
            grasa: 0.53, // g
            carbohidratos: 62.9, // g
            fibra: 12.7, // g
            hierro: 4.98, // mg
            magnesio: 127, // mg
            fosforo: 386, // mg
            potasio: 1254, // mg
            zinc: 3.31, // mg
        }
    },
];

// Función para obtener todos los tipos de frijoles
export const getTiposDeFrijoles = async () => {
    try {
        // Simular una pequeña demora en la obtención de los datos (por ejemplo, una solicitud a una API)
        // await new Promise(resolve => setTimeout(resolve, 1000));
        return tiposDeFrijoles;
    } catch (error) {
        console.error('Error al obtener los tipos de frijoles:', error);
        return []; // En caso de error, retornamos un array vacío
    }
};

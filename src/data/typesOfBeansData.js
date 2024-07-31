export const tiposDeFrijoles = [
    {
        id: 1,
        title: 'Frijol Negro',
        img: '/img/tipos/0.jpg',
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
        title: 'Frijol Rojo',
        img: '/img/tipos/1.jpg',
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
        title: 'Frijol Pinto',
        img: '/img/tipos/2.jpg',
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
        title: 'Garbanzos',
        img: '/img/tipos/3.jpg',
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
        title: 'Frijol Blanco',
        img: '/img/tipos/4.jpg',
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
        title: 'Frijol Lima',
        img: '/img/tipos/0.jpg',
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
        title: 'Frijol Cañón',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s',
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
        title: 'Frijol Fava',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s',
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
        title: 'Lenteja Roja',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s',
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
    
];

export const getTiposDeFrijoles = async () => {
    // Simulación de función asíncrona para obtener los tipos de frijoles
    return tiposDeFrijoles;
};

export const getTiposById = async (id) => {
    // Simulación de función asíncrona para obtener un tipo de frijol por su ID
    const tipo = tiposDeFrijoles.find(tipo => tipo.id === id);
    if (!tipo) {
        throw new Error(`Tipo de frijol con ID ${id} no encontrado.`);
    }
    return tipo;
};

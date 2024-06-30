// categoriesData.js

// Array de categorías
export const categories = [
    'Plato principal',
    'Arroz',
    'Tacos',
    'Pasta',
    'Entrante',
    'Sushi',
    'Mariscos',
    'Carnes',
    'Vegetariano',
    'Sopa',
    'Postre',
    'Dulces',
    'Gratinados'
];


// Función para obtener todas las categorías
export const getCategories = async () => {
    try {
        // Simular una pequeña demora en la obtención de los datos (por ejemplo, una solicitud a una API)
        // await new Promise(resolve => setTimeout(resolve, 1000));
        return categories;
    } catch (error) {
        console.error('Error al obtener las categorías:', error);
        return []; // En caso de error, retornamos un array vacío
    }
};

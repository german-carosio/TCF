// categoriesData.js

// Array de categorías con id y url
export const categories = [
    { id: 1, name: 'desayunos', displayName: 'Desayunos', url: 'desayunos' },
    { id: 2, name: 'sopas y cremas', displayName: 'Sopas y cremas', url: 'sopas-y-cremas' },
    { id: 3, name: 'ensaladas', displayName: 'Ensaladas', url: 'ensaladas' },
    { id: 4, name: 'almuerzos y cenas', displayName: 'Almuerzos y cenas', url: 'almuerzos-y-cenas' },
    { id: 5, name: 'dips', displayName: 'Dips', url: 'dips' },
    { id: 6, name: 'snacks', displayName: 'Snacks', url: 'snacks' },
    { id: 7, name: 'postres', displayName: 'Postres', url: 'postres' },
    { id: 8, name: 'acompañamientos', displayName: 'Acompañamientos', url: 'acompañamientos' },
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



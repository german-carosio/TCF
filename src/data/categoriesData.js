// categoriesData.js

// Array de categorías con id y url
export const categories = [
    { id: 1, name: 'Desayunos', displayName: 'Desayunos', url: 'desayunos' },
    { id: 2, name: 'Sopas y guisos', displayName: 'Sopas y guisos', url: 'sopas-y-guisos' },
    { id: 3, name: 'Dips', displayName: 'Dips', url: 'dips' },
    { id: 4, name: 'Ensaladas', displayName: 'Ensaladas', url: 'ensaladas' },
    { id: 5, name: 'Almuerzos y cenas', displayName: 'Almuerzos y cenas', url: 'almuerzos-y-cenas' },
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



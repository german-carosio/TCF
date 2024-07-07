// recipesData.js

// Placeholder de imagen de 300x300
const placeholderImage = 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png';

// Array de recetas actualizado con categorías específicas
const recipes = [
    {
        id: 1,
        title: 'Papas, espinaca y frijoles',
        description: 'Un plato nutritivo de papas, espinacas, frijoles y coliflor.',
        ingredients: [
            '1 Ajo picado finamente',
            '2 Tazas de papas cocidas',
            '2 Tazas de espinacas',
            '2 Tazas de frijoles',
            '2 Tazas de coliflor',
            '2 Cucharadas de aceite de oliva',
            'Sal y pimienta al gusto'
        ],
        steps: [
            'En un sartén colocar aceite y saltear el ajo.',
            'Agregar las papas previamente cocinadas y partidas a la mitad, por 5min.',
            'Agregar la coliflor y los frijoles.',
            'Agregar las espinacas y cocinar por 3 minutos.',
            'Salpimentar al gusto y servir.'
        ],
        category: ['Almuerzos y cenas'],
        image: placeholderImage
    },
    {
        id: 2,
        title: 'Ensalada de Quinoa y Frijoles',
        description: 'Una ensalada colorida con quinoa, frijoles y tomate cherry.',
        ingredients: [
            '2 Tazas de quinoa',
            '1 Taza de tomate cherry',
            '4 Cucharadas de culantro finamente picado',
            '½ Cebolla morada',
            '2 Ajos',
            '3 Tazas de frijoles (3 variedades)',
            '1 Limón',
            '½ Taza de aceite de oliva',
            '2 Cucharadas de vinagre balsámico'
        ],
        steps: [
            'En un bowl colocar la quinoa, el tomate cherry, culantro, cebolla morada, ajo y frijoles.',
            'Agregar limón, aceite de oliva y vinagre balsámico y revolver.',
            'Salpimentar, revolver y servir.'
        ],
        category: ['Ensaladas', 'Almuerzos y cenas'],
        image: placeholderImage
    },
    {
        id: 3,
        title: 'Bowl de Salmón y Frijoles',
        description: 'Un bowl saludable con salmón, frijoles, lechuga y pepino.',
        ingredients: [
            '2 Tazas de lechuga',
            '1 Taza de frijoles',
            '½ Tomate',
            '½ Taza de hongos',
            '1 Filete de salmón',
            '5 Rodajas de pepino',
            'Aderezo favorito'
        ],
        steps: [
            'Colocar todos los ingredientes por separado en un bowl.',
            'Servir con el aderezo por aparte.'
        ],
        category: ['Ensaladas', 'Almuerzos y cenas'],
        image: placeholderImage
    },
    {
        id: 4,
        title: 'Plato de Vegetales',
        description: 'Una selección de vegetales y frijoles servidos por separado.',
        ingredients: [
            '1 Taza de coliflor salteada con salsa de soya',
            '1 Taza de camarones cocidos con limón, ajo y culantro',
            '1 Taza de frijoles',
            '1 Taza de brócoli',
            '1 Taza de hongos'
        ],
        steps: [
            'Colocar todos los ingredientes por separado en un plato y servir por separado.'
        ],
        category: ['Ensaladas', 'Almuerzos y cenas'],
        image: placeholderImage
    },
    {
        id: 5,
        title: 'Ensalada de Frijoles',
        description: 'Una ensalada de frijoles con cebolla morada, tomate y culantro.',
        ingredients: [
            '½ Cebolla morada',
            '1 Ajo',
            '2 Tomates',
            '2 Cucharadas de culantro picado',
            '1 Taza de kidney beans',
            '1 Taza de frijoles negros',
            '1 Taza de frijoles blancos',
            '½ chile dulce',
            '1 Limón',
            '2 Cucharadas de aceite de oliva',
            'Sal y pimienta'
        ],
        steps: [
            'En un bowl colocar el limón, el aceite de oliva y revolver hasta incorporar.',
            'Agregar la cebolla, el ajo, tomate, culantro y chile dulce y revolver.',
            'En un bowl aparte, agregar todos los frijoles y colocar encima la primera mezcla.',
            'Salpimentar y servir como acompañamiento.'
        ],
        category: ['Ensaladas', 'Almuerzos y cenas'],
        image: placeholderImage
    },
    {
        id: 6,
        title: 'Sopa Negra',
        description: 'Una sopa tradicional de frijoles con huevo duro y aguacate.',
        ingredients: [
            '3 Tazas de frijoles con el agua de cocción',
            '2 Huevos duros',
            '½ Aguacate',
            '½ Cebolla blanca',
            '1 Tomate',
            '2 Cucharadas de culantro',
            '½ Taza de queso fresco',
            '1 Ajo',
            'Sal y pimienta'
        ],
        steps: [
            'En un sartén sofreír el ajo, cebolla y el tomate.',
            'Agregar los frijoles con el agua, previamente cocinados.',
            'Hervir por 10min a fuego medio.',
            'Licuar todos los ingredientes y volver a hervir por 5min.',
            'Agregar los huevos duros.'
        ],
        category: ['Sopas y guisos', 'Almuerzos y cenas'],
        image: placeholderImage
    },
    {
        id: 7,
        title: 'Tomates Rellenos',
        description: 'Tomates rellenos de frijoles blancos, arroz y queso para derretir.',
        ingredients: [
            '2 Tomates',
            '1 Taza de frijoles blancos',
            '1 Taza de arroz',
            '½ Taza de queso para derretir',
            '1 Huevo',
            '2 Cucharadas de tomate',
            '2 Cucharadas de ajo picado',
            '1 Cucharada de culantro',
            'Sal y pimienta'
        ],
        steps: [
            'Quitar la parte de adentro de los tomates.',
            'En un bowl, agregar los frijoles, arroz, queso para derretir, huevo, dos cucharadas de tomate, ajo picado y culantro, revolver hasta incorporar todos los ingredientes.',
            'Salpimentar.',
            'Hornear por 15min a 380°F (190°C).'
        ],
        category: ['Desayunos', 'Almuerzos y cenas'],
        image: placeholderImage
    },
    {
        id: 8,
        title: 'Dip de Frijoles',
        description: 'Un dip cremoso de frijoles con salsa de tomate y queso derretido.',
        ingredients: [
            '1 Taza de frijoles molidos',
            '½ Taza de salsa de tomate natural',
            '1 Ajo',
            '½ Cebolla',
            '2 Cucharadas de crema',
            '2 Cucharadas de culantro',
            'Chips',
            'Queso para derretir'
        ],
        steps: [
            'En un sartén, colocar aceite y sofreír la cebolla y el ajo.',
            'Agregar los frijoles y revolver.',
            'Incorporar la crema y el culantro y revolver.',
            'Agregar la salsa de tomate y sofreír por 4min.',
            'Colocar en un plato para hornear, agregar el queso para derretir en la parte superior.',
            'Hornear por 5min a 350°F (175°C).',
            'Servir con chips.'
        ],
        category: ['Dips'],
        image: placeholderImage
    }
];



// Función para obtener todas las recetas
export const getRecipes = async () => {
    try {
        // Simular una pequeña demora en la obtención de los datos (por ejemplo, una solicitud a una API)
        // await new Promise(resolve => setTimeout(resolve, 1000));
        return recipes;
    } catch (error) {
        console.error('Error al obtener las recetas:', error);
        return []; // En caso de error, retornamos un array vacío
    }
};

// Función para obtener una receta por su ID
export const getRecipeById = async (id) => {
    try {
        // Buscar la receta por su ID en el array de recetas
        const recipe = recipes.find(recipe => recipe.id === id);
        // Simular una pequeña demora en la obtención de los datos (por ejemplo, una solicitud a una API)
        // await new Promise(resolve => setTimeout(resolve, 1000));
        return recipe;
    } catch (error) {
        console.error('Error al obtener la receta por ID:', error);
        return null; // En caso de error, retornamos null
    }
};



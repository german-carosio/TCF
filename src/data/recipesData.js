// recipesData.js

// Placeholder de imagen de 300x300
const placeholderImage = 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png';

// Array de recetas
const recipes = [
    {
        id: 1,
        title: 'Paella Valenciana',
        description: 'Una auténtica paella valenciana con pollo, conejo y judías verdes.',
        ingredients: ['1 pollo', '1 conejo', '500g de judías verdes', '1 pimiento rojo', '4 tomates', '400g de arroz', 'Aceite de oliva', 'Azafrán', 'Sal'],
        steps: ['Cortar el pollo y el conejo en trozos pequeños', 'Freír la carne en una paellera con aceite de oliva', 'Añadir las judías verdes y el pimiento rojo', 'Incorporar el tomate rallado y sofreír', 'Añadir el arroz y el azafrán', 'Verter agua y cocinar hasta que el arroz esté en su punto'],
        category: ['Plato principal', 'Arroz'],
        image: placeholderImage
    },
    {
        id: 2,
        title: 'Tacos al Pastor',
        description: 'Deliciosos tacos mexicanos de cerdo adobado con piña.',
        ingredients: ['500g de carne de cerdo', '100g de piña', 'Tortillas de maíz', '1 cebolla', '1 manojo de cilantro', 'Salsa de adobo', 'Sal'],
        steps: ['Marinar la carne de cerdo con la salsa de adobo', 'Asar la carne y la piña en una parrilla', 'Picar la cebolla y el cilantro', 'Servir la carne en las tortillas de maíz', 'Añadir la piña, cebolla y cilantro picados'],
        category: ['Plato principal', 'Tacos'],
        image: placeholderImage
    },
    {
        id: 3,
        title: 'Spaghetti Carbonara',
        description: 'Un clásico italiano con panceta, huevo y queso pecorino.',
        ingredients: ['400g de spaghetti', '200g de panceta', '2 huevos', '100g de queso pecorino', 'Sal', 'Pimienta negra'],
        steps: ['Cocer los spaghetti en agua con sal', 'Freír la panceta hasta que esté crujiente', 'Batir los huevos y mezclar con el queso pecorino rallado', 'Añadir los spaghetti escurridos a la sartén con la panceta', 'Incorporar la mezcla de huevo y queso y remover rápidamente'],
        category: ['Plato principal', 'Pasta'],
        image: placeholderImage
    },
    {
        id: 4,
        title: 'Sushi',
        description: 'Rollos de sushi hechos con arroz, algas nori y pescado fresco.',
        ingredients: ['300g de arroz para sushi', 'Algas nori', '200g de salmón', '200g de atún', '1 pepino', '1 aguacate', 'Salsa de soja', 'Wasabi', 'Jengibre encurtido'],
        steps: ['Cocer el arroz para sushi y dejar enfriar', 'Cortar el pescado y las verduras en tiras', 'Extender el arroz sobre las algas nori', 'Colocar el pescado y las verduras sobre el arroz', 'Enrollar con la ayuda de una esterilla de bambú', 'Cortar los rollos en porciones'],
        category: ['Entrante', 'Sushi'],
        image: placeholderImage
    },
    {
        id: 5,
        title: 'Ceviche Peruano',
        description: 'Ceviche de pescado fresco marinado en jugo de limón con cilantro y cebolla.',
        ingredients: ['500g de pescado blanco', '10 limones', '1 cebolla roja', '1 manojo de cilantro', 'Ají', 'Sal', 'Maíz tostado'],
        steps: ['Cortar el pescado en cubos pequeños', 'Exprimir los limones y verter el jugo sobre el pescado', 'Picar la cebolla y el cilantro', 'Añadir la cebolla, el cilantro y el ají al pescado', 'Dejar marinar en la nevera durante 15 minutos', 'Servir con maíz tostado'],
        category: ['Entrante', 'Mariscos'],
        image: placeholderImage
    },
    {
        id: 6,
        title: 'Hamburguesa Clásica',
        description: 'Jugosa hamburguesa de ternera con queso, lechuga y tomate.',
        ingredients: ['500g de carne de ternera picada', '4 panes de hamburguesa', '4 lonchas de queso cheddar', '1 tomate', '4 hojas de lechuga', 'Ketchup', 'Mostaza', 'Sal', 'Pimienta'],
        steps: ['Formar las hamburguesas con la carne picada y sazonar', 'Asar las hamburguesas en una parrilla', 'Tostar los panes de hamburguesa', 'Colocar la carne en el pan y añadir el queso', 'Agregar el tomate y la lechuga', 'Servir con ketchup y mostaza'],
        category: ['Plato principal', 'Carnes'],
        image: placeholderImage
    },
    {
        id: 7,
        title: 'Ratatouille',
        description: 'Un colorido plato francés de vegetales al horno.',
        ingredients: ['1 berenjena', '1 calabacín', '1 pimiento rojo', '1 pimiento amarillo', '4 tomates', '1 cebolla', 'Aceite de oliva', 'Sal', 'Pimienta'],
        steps: ['Cortar todos los vegetales en rodajas finas', 'Precalentar el horno a 180°C', 'Engrasar una bandeja para horno con aceite de oliva', 'Colocar las rodajas de vegetales en la bandeja, alternando colores', 'Salpimentar y rociar con aceite de oliva', 'Hornear durante 45 minutos'],
        category: ['Plato principal', 'Vegetariano'],
        image: placeholderImage
    },
    {
        id: 8,
        title: 'Gazpacho Andaluz',
        description: 'Una refrescante sopa fría de tomates y verduras.',
        ingredients: ['1 kg de tomates', '1 pimiento verde', '1 pepino', '1 cebolla', '2 dientes de ajo', '50 ml de aceite de oliva', '30 ml de vinagre', 'Sal'],
        steps: ['Lavar y trocear los tomates, el pimiento, el pepino y la cebolla', 'Pelar y picar los ajos', 'Colocar todos los ingredientes en una licuadora', 'Añadir el aceite de oliva, el vinagre y la sal', 'Triturar hasta obtener una textura suave', 'Refrigerar antes de servir'],
        category: ['Entrante', 'Sopa'],
        image: placeholderImage
    },
    {
        id: 9,
        title: 'Churros con Chocolate',
        description: 'Deliciosos churros fritos servidos con chocolate caliente.',
        ingredients: ['250g de harina', '250ml de agua', '1 cucharada de azúcar', '1 pizca de sal', 'Aceite para freír', 'Azúcar para espolvorear', '200g de chocolate negro', '200ml de leche'],
        steps: ['Hervir el agua con una pizca de sal y el azúcar', 'Añadir la harina y mezclar hasta obtener una masa', 'Colocar la masa en una manga pastelera con boquilla estrella', 'Freír los churros en aceite caliente hasta que estén dorados', 'Derretir el chocolate con la leche a fuego lento', 'Servir los churros espolvoreados con azúcar y acompañados de chocolate caliente'],
        category: ['Postre', 'Dulces'],
        image: placeholderImage
    },
    {
        id: 10,
        title: 'Moussaka Griega',
        description: 'Un clásico plato griego de berenjenas, carne picada y bechamel.',
        ingredients: ['2 berenjenas', '500g de carne de cordero picada', '1 cebolla', '2 dientes de ajo', '400g de tomates', '50g de queso rallado', 'Bechamel', 'Aceite de oliva', 'Sal', 'Pimienta'],
        steps: ['Cortar las berenjenas en rodajas y salarlas', 'Freír las berenjenas en aceite de oliva', 'Sofreír la cebolla y el ajo picados, añadir la carne y cocinar', 'Añadir los tomates picados y cocinar hasta reducir', 'Montar capas de berenjena y carne en una fuente de horno', 'Cubrir con bechamel y queso rallado', 'Hornear a 180°C durante 40 minutos'],
        category: ['Plato principal', 'Gratinados'],
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



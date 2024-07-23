// recipesData.js

// Placeholder de imagen de 300x300
const placeholderImage = 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png';

// Array de recetas actualizado con categorías específicas
const recipes = [
    {
        id: 1,
        title: 'FRIJOLES SALTEADOS CON HONGOS',
        description: '',
        ingredients: ['1 ajo picado finamente', '1/4 aceite de oliva', '1/2 taza de hongos', '1 taza de frijoles blancos', '1/4 taza de tomates picados finamente', '2 cucharadas de cebollino', '2 cucharadas de vino blanco', '2 cucharadas de mantequilla', '1 cucharada de queso parmesano'],
        steps: ['En un sartén saltear el ajo, agregar el cebollino, los hongos y frijoles, saltear por 3min', '- Agregar el tomate y cocinar.', '-Incorporar el vino', '- Agregar la mantequilla y cocinar por 5min más.', '- En un sartén colocar aceite de oliva y cocinar el pan 3 min por casa lado.'],
        category: ['acompañamientos'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_0277.jpg'
    },
    {
        id: 2,
        title: 'SOPA DE FRIJOLES BLANCOS',
        description: '',
        ingredients: ['2 Tazas de salsa de tomate natural ', '4 Tazas de caldo de vegetales', '1 Taza de frijoles blancos', '1 Pechuga de pollo ', '1 Cucharada de culantro', '1/4 Cebolla morada', '1 Cucharada de aceite', '1 Cucharadita de chile flakes', '1 Cucharada de ajo '],
        steps: ['Saltear en una olla, ajo picado finamente, agregar el caldo de vegetales, frijoles blancos y la salsa de tomate. ', 'Agregar la cucharada de culantro, la pechuga de pollo en cubitos y hervir por 20 min. ', 'Colocar el chile flake.', 'Servir con cebolla morada, pan tostado y chile flakes.'],
        category: ['sopas y cremas'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_4432.jpg'
    },
    {
        id: 3,
        title: 'PAPAS, ESPINACA Y FRIJOLES',
        description: '',
        ingredients: ['1 Ajo picado finamente', '2 Tazas de papas cocidas', '2 Tazas de espinacas', '2 Tazas de frijoles', '2 Tazas de coliflor', '2 Cucharadas de aceite de oliva', 'Sal y pimienta al gusto'],
        steps: ['En un sartén colocar aceite y saltear el ajo. ', 'Agregar las papas previamente cocinadas y partidas a la mitad, por 5min. ', 'Agregar la coliflor y los frijoles. ', 'Agregar las espinacas y cocinar por 3 minutos ', 'Salpimentar al gusto y servir.'],
        category: ['acompañamientos'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_4252.jpg'
    },
    {
        id: 4,
        title: 'ENSALADA DE FRIJOLES Y QUINOA',
        description: '',
        ingredients: ['2 Tazas de quinoa', '1 Taza de tomate cherry', '4 Cucharadas de culantro finamente picado ', '½ Cebolla morada', '2 Ajos', '3 Tazas de frijoles (utilizar 3 variedades de frijoles para darle color a la ensalada y sabores únicos)', '1 Limón', '½ Taza de aceite de oliva ', '2 Cucharadas de vinagre balsámico'],
        steps: ['En Un bowl colocar la quinoa, el tomate cherry, culantro cebolla morada, ajo y frijoles. ', 'Agregar limón, aceite de oliva y vinagre balsámico y revolver. ', 'Salpimentar, revolver y servir.'],
        category: ['ensaladas'],
        type: 'Frijoles blancos, Frijoles negros',
        img: '/img/recipes/IMG_4270.jpg'
    },
    {
        id: 5,
        title: 'BOWL DE SALMÓN Y FRIJOLES',
        description: '',
        ingredients: ['2 Tazas de lechuga ', '1 Taza de frijoles ', '½ Tomate', '½ Taza de hongos.', '1 Filete de salmón', '5 Rodajas de pepino ', 'Servir con aderezo favorito'],
        steps: ['Colocar todos los ingredientes por separado en un bowl', 'Servir con el aderezo por aparte.'],
        category: ['almuerzos y cenas', 'ensaladas'],
        type: '',
        img: '/img/recipes/IMG_4287.jpg'
    },
    {
        id: 6,
        title: 'PLATO DE VEGETALES',
        description: '',
        ingredients: ['1 Taza de coliflor salteada con salsa de soya', '1 Taza de camarones cocidos con limón, ajo y culantro.', '1 Taza de frijoles ', '1 Taza de brócoli ', '1 Taza de hongos'],
        steps: ['Colocar todos los ingredientes por separado en un plato y servir por separado '],
        category: ['almuerzos y cenas', 'ensaladas'],
        type: '',
        img: '/img/recipes/IMG_4304.jpg'
    },
    {
        id: 7,
        title: 'ENSALADA DE FRIJOL TRICOLOR',
        description: '',
        ingredients: ['½ Cebolla morada ', '1 ajo', '2 Tomate', '2 Cucharadas de culantro picado ', '1 Taza de kidney beans', '1 Taza de frijoles negros', '1 Taza de frijoles blancos ', '½ chile dulce ', '1 Limón', '2 Cucharadas de aceite de oliva ', 'Sal y pimienta'],
        steps: ['En un bowl colocar el limón, el aceite de oliva y revolver hasta tener ambos ingredientes incorporados ', 'Agregar la cebolla, el ajo, tomate, culantro y chile dulce y revolver ', 'En un bowl aparte agregar todos los frijoles y colocar encima la primera mezcla. ', 'Salpimentar y Servir como acompañamiento'],
        category: ['ensaladas'],
        type: 'Frijoles blancos, Frijoles negros, Frijoles rojos',
        img: '/img/recipes/IMG_1544.jpg'
    },
    {
        id: 8,
        title: 'SOPA NEGRA',
        description: '',
        ingredients: ['3 Tazas de frijoles con el agua de cocción', '2 Huevos duros', '½ Aguacate', '½ Cebolla blanca', '1 Tomate', '2 Cucharadas de culantro ', '½ Taza de queso fresco ', '1 Ajo ', 'Sal y pimienta'],
        steps: ['En un sartén sofreír el ajo, cebolla y el tomate. ', 'Agregar los frijoles con el agua, previamente cocinados. ', 'Hervir por 10min a fuego medio ', 'Licuar todos los ingredientes y volver a hervir por 5min', 'Agregar los huevos duros. '],
        category: ['sopas y cremas', 'almuerzos y cenas'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_6359.jpg'
    },
    {
        id: 9,
        title: 'TOMATES RELLENOS',
        description: '',
        ingredients: ['2 Tomates ', '1 Taza de frijoles blancos', '1 Taza de arroz', '½ de queso para derretir', '1 huevo', '2 cucharadas de tomate', '2 cucharadas de ajo picado ', '1 cucharada de culantro', 'sal y pimienta '],
        steps: ['Quitar la parte de adentro de los tomates. ', 'En un bowl agregar los frijoles, el arroz, queso para derretir, huevo, dos cucharadas de tomate, dos cucharadas de ajo picado y cilantro, revolver hasta incorporar todos los ingredientes. ', 'Salpimentar', 'Hornear por 15min a 380'],
        category: ['acompañamientos'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_1584.jpg'
    },
    {
        id: 10,
        title: 'DIP DE FRIJOLES',
        description: '',
        ingredients: ['1 Taza de frijoles molidos', '½ Taza de salsa de tomate natural', '1 ajo', '½ cebolla ', '2 cucharadas de crema', '2 cucharadas de culantro', 'Chips', 'Queso para derretir'],
        steps: ['En un sartén colocar el aceite y sofreír la cebolla y ajo. ', 'Agregar los frijoles y revolver. ', 'Incorporar la crema y el cilantro y revolver. ', 'Agregue la salsa de tomate y sofreír por 4min. ', 'Colocar en un plato para hornear, agregar el queso para derretir en la parte superior. ', 'Hornear por 5min a 350', 'Servir con chips'],
        category: ['dips'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_1579.jpg'
    },
    {
        id: 11,
        title: 'DIP DE FRIJOLES NEGROS Y JALAPEÑOS',
        description: '',
        ingredients: ['2 Tazas de frijoles molidos', '1 Taza de queso para derretir', '1/2 Aguacate', '2 Tomates picados en cuadritos', '1/2 Cebolla blanca picada finamente', '2 Cucharadas de culantro', '1 Limón', '1 Jalapeño', 'Nachos'],
        steps: ['Colocar en un bowl los frijoles molidos', 'Agregar una capa de queso para derretir.', 'Hornear por 10min a 250.', 'En un bowl colocar el tomate, cebolla, culantro, agregar el jugo de limón, revolver y salpimentar al gusto.', 'Sacar los frijoles del horno y colocar el pico de gallo encima, aguacate y jalapeño.', 'Colocar los nachos alrededor'],
        category: ['dips'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_0302.jpg'
    },
    {
        id: 12,
        title: 'ENSALADA DE FRIJOLES Y QUINOA',
        description: '',
        ingredients: ['2 Cebollas moradas cortadas en juliana', '1 Taza de elotitos amarillos', '1 Taza de pinto beans', '2 Limones el jugo', '1 Cucharada de vinagre de manzana', 'Sal y pimienta', '', 'Para servir', '4 Tomates cherry', '1 Taza de arugula'],
        steps: ['Colocar en un bowl la cebolla, agregar el limón, vinagre y revolver. ', 'Agregar los frijoles previamente cocidos y los elotitos y revolver. ', 'Servir con arugula y tomates cherry partidos a la mitad', 'Salpimentar al gusto'],
        category: ['ensaladas', 'acompañamientos'],
        type: ' Frijoles pinto',
        img: '/img/recipes/IMG_1822.jpg'
    },
    {
        id: 13,
        title: 'FRIJOLES CON ZUCCHINI SALTEADOS',
        description: '',
        ingredients: ['1 taza de zucchini partido en cubitos', '1 taza de kidney beans', '2 Cucharadas de salsa de tomate', '1 ajo picado finamente', '2 cucharadas de cebollín', '1 cucharada de mantequilla', 'Sal y pimienta'],
        steps: ['En un sartén saltear la cebolla con el aceite y agregar los zucchinis', 'Agregar los frijoles previamente cocinados y cocinar por 3minutos. ', 'Agregar la salsa de tomate, mantequilla y revolver. ', 'Cocinar por 5 min y servir como acompañamiento. ', 'Servir con cebollin'],
        category: ['acompañamientos'],
        type: '  Frijoles Kidney',
        img: '/img/recipes/IMG_0315.jpg'
    },
    {
        id: 14,
        title: 'TOSTADA DE FRIJOLES BLANCOS',
        description: '',
        ingredients: ['1 Taza de frijoles blancos\xa0', '1 Tomate\xa0', '1 Ajo finamente picado\xa0', '1 Limón\xa0', '2 Cucharadas de aceite de oliva', 'Sal y pimienta', '1 rodaja de pan'],
        steps: ['Poner a asar los tomates y ¼ de la cebolla.', 'Licuar el tomate y la cebolla, en una olla poner a sofreír el ajo y agregar la mezcla, añadir el caldo de vegetales, cocinar por 10min.', 'Agregar los frijoles blancos ya cocinados y hervir por 5min.', 'Servir la sopa con cebolla morada, arroz blanco, aguacate, queso y limón.'],
        category: ['desayunos'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_6992.jpg'
    },
    {
        id: 15,
        title: 'SOPA DE TOMATE Y FRIJOLES BLANCOS',
        description: '',
        ingredients: ['4 Tomates', '1 Taza de frijol blanco cocinados', '4 Tazas de caldo de vegetales', '1 Chile seco', '1 Ajo', '½ Cebolla morada', 'Sal y pimienta', '4 Cucharadas de aceite de oliva', '2 Tazas de arroz cocinado', '½ Aguacate', '1 Limón', '½ Taza de queso para derretir'],
        steps: ['Poner a asar los tomates y ¼ de la cebolla.', 'Licuar el tomate y la cebolla, en una olla poner a sofreír el ajo y agregar la mezcla, añadir el caldo de vegetales, cocinar por 10min.', 'Agregar los frijoles blancos ya cocinados y hervir por 5min.', 'Servir la sopa con cebolla morada, arroz blanco, aguacate, queso y limón.'],
        category: ['sopas y cremas'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_5216.jpg'
    },
    {
        id: 16,
        title: 'ENSALADA FRIA DE FRIJOLES BLANCOS',
        description: '',
        ingredients: ['2 Tazas de frijoles blancos', '2 Cucharadas de cebollín picado finamente', '2 Cucharadas de culantro picado finamente', '1/2 Taza de zuchinni en cubitos, salteado', '1/4 Taza de limón', '1/4 Taza de aceite de oliva'],
        steps: ['En un bowl colocar los frijoles, incorporar el cebollino, el culantro, el zuchinni y revolver.', 'Agregar el limón y aceite de oliva', 'Salpimentar y agregar el queso parmesano', 'Servir como ensalada o acompañar con chips para servirlo como dip.'],
        category: ['ensaladas', 'acompañamientos'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_8950.jpg'
    },
    {
        id: 17,
        title: 'BOWL DE FRIJOLES Y VEGETALES HORNEADOS',
        description: '',
        ingredients: ['1 Taza de kidney beans', '1 Taza de frijoles blancos', '2 Cucharadas de tomillo', '3 Tomates partidos en 4', '1 Cebolla partida en cuatro', '2 Dientes de ajo', '1/4 Aceite de oliva', '2 Limones', 'Sal y pimienta '],
        steps: ['En un bowl colocar los tomates y las cebollas, agregar el aceite de oliva, colocarlos en un recipiente apto para hornear y hornear por 20min a 350 grados. ', 'En un bowl aparte colocar 2 cucharadas de aceite de oliva, el jugo de los dos limones, ajo picado y tomillo, revolver y agregar los frijoles. ', 'Colocar en un recipiente para servir los tomates y las cebollas horneadas, agregar el aderezo preparado anteriormente y dejar reposar por 20mins antes de servir, ', 'Servir con chips o focaccia. ', '¡Disfrutar!'],
        category: ['almuerzos y cenas'],
        type: '',
        img: '/img/recipes/IMG_4965.jpg'
    },
    {
        id: 18,
        title: 'GALLO PINTO',
        description: '',
        ingredients: ['1 Taza de frijoles negros', '1 Taza de arroz con su agua', '1 Cucharada de cebolla', '1 Cucharada de ajo', '1 Cucharada de culantro', '2 Cucharadas de salsa inglesa', 'Sal al gusto'],
        steps: ['En un sarten saltear el ajo, chile dulce y la cebolla.', '- Agregar el arroz y saltear por 5min.', '- Agregar los frijoles y revolver constamente por 10min.', '- Finalizar agregando la salsa inglesa y el culantro.'],
        category: ['desayunos'],
        type: '',
        img: '/img/recipes/IMG_4242.jpg'
    },
    {
        id: 19,
        title: 'BALEADAS HONDUREÑAS',
        description: '',
        ingredients: ['2 Tazas de harina', '1/2 Taza de agua', '2 Cucharadas de aceite', '1 Cucharada de polvo de hornear', '1 Cucharadita de sal ', '1 Taza de frijoles molidos', '1/2 Aguacate', 'Queso', '1/4 cebolla morada'],
        steps: ['En un bowl colocar la harina, el aceite, la sal y el agua. Revolver hasta obtener una mezcla homogénea y dejar reposar por 10min.', 'Hacer las tortillas con la mano y cocinar en un sartén, 3min aproximado de cada lado.', 'En un sartén calentar los frijoles y sofreír con cebolla.', 'Poner la tortilla de harina, agregar frijoles, aguacate, queso y cebolla.'],
        category: ['desayunos'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_4927.jpg'
    },
    {
        id: 20,
        title: 'FRIJOLES COLADOS GUATEMALTECOS',
        description: '',
        ingredients: ['4 Tazas de frijoles', '1 Cebolla', '1/2 Taza de culantro', '1 ajo', '1 Chile dulce', '4 Cucharadas de aceite'],
        steps: [' En un sarten saltear la cebolla, chile dulce y el ajo, hervir los frijoles ya cocinados con el sofrito por 15min, agregar el culantro y dejar hervir por otros 10min.', 'Licuar los frijoles y colarlos.', 'Hervir por 10min.'],
        category: ['desayunos'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_4526.jpg'
    },
    {
        id: 21,
        title: 'PASTA CON SALSA DE FRIJOLES BLANCOS, HONGOS Y CARNE',
        description: '',
        ingredients: ['2 Tazas de pasta a su elección cocinada', '1 Ajo picado finamente ', '1 Taza de salsa de tomate natural ', '1 Cucharada de albahaca ', '1/2 Taza de hongos ', '1 Taza de carne molida ', '1 Cuchara de mantequilla', '1 Taza de frijoles de su elección. '],
        steps: ['En un sartén saltear los hongos con el ajo y cocinar la carne,. ', '', 'Agregar a la preparación la salsa de tomate, la mantequilla, los frijoles y la albahaca. ', '', 'Servir con la pasta y agregar queso parmesano'],
        category: ['almuerzos y cenas'],
        type: '',
        img: '/img/recipes/IMG_3632.jpg'
    },
    {
        id: 22,
        title: 'DIP CREMOSO CON FRIJOLES BLANCOS',
        description: '',
        ingredients: ['1/3 Taza de crema', '1 Cucharada de queso crema', '1 Taza de frijoles', '½ Taza de espinaca', '2 Cucharadas de culantro picado', '2 Cucharadas de cebolla finamente picada', '1 Ajo picado', '½ Taza de queso para derretir', '2 Cucharadas de aceite', 'Chips', 'Sal y pimienta'],
        steps: ['Sofreír en una olla la cebolla y el ajo picado con el aceite.', 'Agregar el queso crema y la crema pura.', 'Agregar los frijoles (recomendamos blancos).', 'Agregar el queso para derretir y cocinar hasta que todo quede homogéneo.', 'Agregar el culantro y cocinar por 5min.', 'Sal pimentar al gusto', 'Servir con chips.'],
        category: ['dips'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_2258.jpg'
    },
    {
        id: 23,
        title: 'TOSTADAS DE DESAYUNO CON FRIJOLES',
        description: '',
        ingredients: ['2 Rodajas de pan', '2 Huevos', '2 Tomates picados finamente', '¼ de cebolla picada finamente', '2 Cucharadas de aceite de oliva', '2 Cucharadas de culantro', '1 Ajo picado finamente', '¼ de Taza de frijoles molidos', 'Sal y pimienta'],
        steps: ['En un sartén saltear con el aceite de oliva, la cebolla y el ajo.', 'Agregar el tomate y cocinar por 3min, agregar el culantro y cocinar por 5min, salpimentar', 'la salsa, bajar el fuego a la estufa y agregar los huevos, cocinar por 4min.', 'Tostar el pan, esparcir el frijol molido en la tostada.', 'Agregar el huevo con salsa.'],
        category: ['desayunos'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_1674.jpg'
    },
    {
        id: 24,
        title: 'NACHOS DE DESAYUNO CON FRIJOLES',
        description: '',
        ingredients: ['2 Tazas de nachis', '1 Taza de frijoles enteros', '½ Taza de queso para derretir', '1 Taza de salsa de tomate natural', '2 Cucharadas de crema/natilla', '2 Huevos revueltos (pueden ser en duros o estrellados/fritos)'],
        steps: ['Colocar en un plato para servir los nachos, agregar los frijoles, huevos, queso y servir por', 'último la salsa.', 'Se puede servir con picante.', 'A disfrutar.'],
        category: ['desayunos'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_1743.jpg'
    },
    {
        id: 25,
        title: 'SNACK DE MINI TOSTADAS CON FRIJOLES',
        description: '',
        ingredients: ['4 mini. Tortillas de maíz', '½ Taza de frijoles blancos', '2 Cucharadas de culantro', '1 Limón', '1 Tomate picado en cuadritos', '4 Cucharadas de carne (a elección)', '4 Cucharadas de queso rallado', 'Salsa picante al gusto', '1 Taza de aceite para freír las tortillas'],
        steps: ['En un sartén calentar el aceite y freír por cada lado las tortillas.', 'En un bowl colocar el frijol, culantro, tomate y el limón, salpimentar al gusto.', 'Cocinar la carne molida en un sartén y reservar.', 'Colocar en un plato para servir las tostadas, agregar la mezcla de frijol y terminar con la', 'carne y el queso rallado.', 'Servir con salsa picante si se desea.'],
        category: ['snacks'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_1040.jpg'
    },
    {
        id: 26,
        title: 'SNACK DE BURRITTOS CON FRIJOLES',
        description: '',
        ingredients: ['4 Tortillas de harina', '1 Taza de frijoles molido', '½ cebolla morada', '4 rodajas de queso', '8 rodajas de tomate', '4 rodajas de jamón', 'Sal y pimienta', 'Lechuga'],
        steps: ['Colocar las tortillas de harina en una superficie, agregar frijoles molidos, queso.', 'Partir la lechuga finamente, el tomate en rodajas y colocarlo, agregar cebolla morada y', 'salpimentar.', 'Enrollar y partir a la mitad.', 'Se pueden comer fríos o calientes.'],
        category: ['snacks'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_0937.jpg'
    },
    {
        id: 27,
        title: 'MINI AREPAS CON FRIJOLES',
        description: '',
        ingredients: ['4 Mini arepas', '2 tomates picados finamente', '1 Cucharada de culantro', '½ Cebolla morada picada finamente', '1 Limón', '½ Taza de queso mozarella', '1 Taza de frijoles molidos', '1 Taza de pollo desmenuzado', 'Sal y pimienta al gusto'],
        steps: ['En un bowl colocar el tomate picado, culantro y cebolla.', 'Agregar el limón y revolver', 'Sal pimentar y refrigerar', 'Calentar los frijoles', 'Desmenuzar el pollo y sofreír', '- Servir las arepas armadas o servir como la foto.'],
        category: ['snacks'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_0657.jpg'
    },
    {
        id: 28,
        title: 'GALLETAS DE CHISPAS DE CHOCOLATE CON CHISPAS DE CHOCOLATE',
        description: '',
        ingredients: ['½ Taza de harina de almendra', '1 Huevo', '4 Datiles', '½ Taza frijoles negros cocidos sin agua', '2 Çucharadas de miel', '2 Cucharas de cocoa', '¼ de chispas de chocolate', '½ Cucharadita de polvo de hornear'],
        steps: ['Colocar los frijoles en un procesador junto con el huevo, los dátiles y la harina de', 'almendras, procesar hasta obtener una consistencia homogénea.', 'Agregar la miel y la cocoa, revolver.', 'Agregar las chipas de chocolate y dejar la mezclar enfriar en el refrigerador 15min', 'Hacer bolitas y hornear por 15min a 350', '', '¡Disfrutar!'],
        category: ['postres', 'snacks'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_9773.jpg'
    },
    {
        id: 29,
        title: 'BLONDIES DE FRIJOLES BLANCOS',
        description: '',
        ingredients: ['1 Taza de frijoles blancos', '½ Taza de azúcar morena', '1 Taza de harina (puede sustituirse por almendra o avena)', '1 Huevo', '2 Cucharadas de miel', '¼ de Chispas de chocolate', '½ Taza de aceite de coco'],
        steps: ['Colocar los frijoles blancos cocidos en un procesador.', 'En un bowl colocar todos los ingredientes y revolver.', 'Agregar en un recipiente para hornear', 'Hornear a 320F por 20min', 'Sacar del horno y cortar cuando estén tibios.', '', '¡Disfrutar!'],
        category: ['postres', 'snacks'],
        type: '',
        img: '/img/recipes/IMG_0772.jpg'
    },
    {
        id: 30,
        title: 'HELADO DE CHOCOLATE CON FRIJOLES NEGROS',
        description: '',
        ingredients: ['1 Banano congelado', '½ Taza de frijoles cocinados sin agua', '2 Cucharadas de cocoa', '½ Taza de leche de coco.', '1 Cucharada de miel.', 'Chispas de chocolate.'],
        steps: ['En un procesador colocar todos los ingredientes, combinar hasta obtener una mezcla', 'homogénea, colocar en un recipiente para congelar y servir cuando se obtenga la', 'consistencia deseada.', 'La preparación se puede hacer en la licuadora, batir de primero los frijoles con la leche y', 'luego agregar los demás ingredientes.'],
        category: ['postres', 'snacks'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_0715.jpg'
    },
    {
        id: 31,
        title: 'BROWNIES CON FRIJOLES NEGROS',
        description: '',
        ingredients: ['2 T de frijoles negros cocidos sin agua', '¼ T de mantequilla de maní', '1 Huevo', '¼ T de harina de avena', '1 Cucharadita de polvo de hornear', '¼ T de cocoa', '½ T Chispas de chocolate', '1 Cucharadita de Sal', '1 Cucharadita de esencia de vainilla', '1/3 T de azúcar morena', '2 Cucharaditas de aceite de coco'],
        steps: ['En un procesador volver los frijoles en consistencia de pure y colocar en un bowl.', 'Batir todos los ingredientes juntos hasta obtener una consistencia unificada y dejar', 'reposar por 10min antes de hornear.', 'Colocar la mezcla en un recipiente para hornear y hornear por 18min a 350'],
        category: ['postres', 'snacks'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_0249.jpg'
    },
    {
        id: 32,
        title: 'ENSALADA VERDE CON FRIJOLES Y GARBANZOS',
        description: '',
        ingredients: ['1 Lechuga Romana', '1 Taza de frijoles negros (Cocinados)', '1 Taza de garbanzos (Cocinados)', '1 Taza de tomates cherry cortados a la mitad', '1 Pechuga de pollo asada', '4 Cucharadas de aceite de oliva', '½ Taza de hongos en rodajas', '2 Cucharadas de culantro', '4 Tortillas de maíz', '4 cucharadas de balsámico', '1 Cucharadita de miel', 'Sal y pimienta al gusto', '2 Cucharadas de vinagre de manzana'],
        steps: ['En un bowl colocar los frijoles, garbanzos, tomate cherry, culantro y hongos, revolver y', 'agregar el culantro, agregar el vinagre balsámico y salpimentar, dejar reposar hasta que se', 'utilice.', 'Lavar bien la lechuga y cortar con la mano las hojas en pedazos pequeños.', 'Cortar las tortillas en tiras pequeñas y llevar al horno por 10min a 350 o hasta que estén', 'tostadas.', 'Partir la pechuga de pollo en pedazos pequeños', 'La ensalada se puede servir como la foto o colocar en recipientes aparte para que cada', 'persona pueda armar el bowl', 'Aderezo', 'En un bowl colocar el vinagre balsámico y la miel, agregar la sal e ir incorporando el aceite', 'hasta emulsionar, este aderezo puede ser utilizado en otras ensaladas.', '¡Disfrutar!'],
        category: ['ensaladas'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_0011.jpg'
    },
    {
        id: 33,
        title: 'ANTIPASTO DE FRIJOLES Y LEGUMBRES',
        description: '',
        ingredients: ['1 Zucchinni en rodajas', '1 Berenjena en rodajas', '1 Chile dulce en tiras', '½ Cebolla morada', '1 Taza de frijoles blancos', '½ Taza de garbanzos', '½ Taza de lentejas', '½ Taza de arvejas', '4 Cucharadas de vinagre balsámico', 'El jugo de 1 limón', '½ Taza de queso parmesano', '½ Taza de aceite de oliva', 'Sal y pimienta'],
        steps: ['En un sartén saltear los vegetales con aceite de oliva (Berenjena, Zucchinni y chile ducle)', 'en rodajas y colocar en un plato para servir hasta que se enfríen.', 'En un bowl colocar la cebolla morada con los frijoles y legumbres, agregar el vinagre', 'balsámico, limón y aceite de oliva, revolver y salpimentar.', 'Colocar los vegetales en un plato para servir y agregar encima la combinación de frijoles y', 'legumbres.', 'Servir con el queso parmesano.'],
        category: ['snacks'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_9141.jpg'
    },
    {
        id: 34,
        title: 'CEVICHE DE LEGUMBRES',
        description: '',
        ingredients: ['1 Taza de lentejas cocinadas', '1 Taza de frijoles cocinados', '1 Taza de garbanzos', '1 Taza de arvejas', '1 Cebolla morada picada en julianas', '2 Tomates picados finamente', '1 Ajo picado finamente', '½ Taza de culantro picado', '2 Jugo de limón', '2 Cucharas de aceite de oliva', 'Sal y pimienta'],
        steps: ['Colocar en un bowl la cebolla, el tomate, ajo, culantro, jugo de limón, aceite de oliva,', 'revolver y salpimentar.', 'Agregar las lentejas, frijoles, garbanzos y arvejas.', 'Dejar reposar por 15min antes de servir.', 'Servir con chips y disfrutar.'],
        category: ['snacks', 'almuerzos y cenas'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_9053.jpg'
    },
    {
        id: 35,
        title: 'SOPA DE FRIJOLES Y LEGUMBRES',
        description: '',
        ingredients: ['1 Taza de lentejas cocinadas', '1 Taza de frijoles cocinados', '1 Taza de garbanzos', '1 Taza de arvejas', '¼ de cebolla picada', '½ Taza de salsa de tomate natural', '1 Cucharada de flakes de chile', '6 Tazas de caldo de vegetales', '1 Pechuga de pollo desmenuzada', 'Sal y pimienta'],
        steps: ['Sofreir en un sarten la cebolla y el ajo, agregar la pasta de tomate, las legumbres y los', 'frijoles, cocinar por 5 min.', 'Agregar el caldo de vegetales y dejar hervir por 10min', 'Cocinar la pasta por aparte y escurrir el agua', 'Incorporar al caldo la pasta y servir.', 'Agregar los chile flakes para darle el picante si se desea.', 'Salpimentar al gusto'],
        category: ['sopas', 'legumbres', 'almuerzos', 'cenas'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_9203.jpg'
    },
    {
        id: 36,
        title: 'ENSALADA DE FRIJOLES CON KALE Y ESPINACA',
        description: '',
        ingredients: ['1 Taza de frijoles pinto', '½ Taza de frijoles blancos', '½ Taza d lentejas', '2 Tazas de espinacas', '2 Tazas de kale', '1 Ajo picado finamente', '2 Cucharadas de vinagre balsámico', '2 Cucharadas de queso parmesano', '4 Cucharadas de aceite de oliva'],
        steps: ['Colocar en un sarten el aceite de oliva con el ajo, saltear la espinaca y kale por 3min.', 'Agregar los frijoles y saltear por 3min.', 'Servir en un bowl, agregar el vinagre balsámico, el aceite de oliva y el queso', 'parmesano y revolver.', 'Servir y disfrutar.'],
        category: ['ensaladas', 'acompañamientos'],
        type: 'Frijoles blancos, Frijoles pinto',
        img: '/img/recipes/IMG_9060.jpg'
    },
    {
        id: 37,
        title: 'ENSALADA DE FRIJOLES CON TOMATES CHERRY Y QUINOA',
        description: '',
        ingredients: ['2 Tazas de tomates cherry', '2 Tazas de frijol pinto (o de su elección)', '1 Tazas de quinoa', '½ cebolla morada', '2 Cucharadas de culantro', '¼ Taza de vinagre de manzana', '3 Cucharadas de aceite de oliva', '1 Ajo picado finamente', 'Chile flakes (Si se desea picante)', 'Sal y pimienta al gusto'],
        steps: ['Para la vinagreta, colocar en un bowl colocar el vinagre y aceite de oliva, agregar la cebolla, el', 'ajo y revolver.', 'Agregar en otro bowl la quinoa, el frijol, los tomates, el culantro y revolver, agregar a esta', 'combinación la vinagreta y salpimentar.', 'Servir con los chile flakes para darle un sabor picante', '¡A Disfrutar!'],
        category: ['ensaladas'],
        type: ' Frijoles pinto',
        img: '/img/recipes/IMG_8984.jpg'
    },
    {
        id: 38,
        title: 'ENSALADA VERDE CON FRIJOLES Y ATUN',
        description: '',
        ingredients: ['1 Lechuga cortada finamente en tiras', '2 Tazas de frijoles negros', '1 Lata de Atún', '2 Cucharadas de mayonesa', '1 Cucharada de mostaza', '2 Cucharada de salsa de tomate natural', '½ Cebolla morada picada finamente', '1 Tomate picado finamente', '2 Cucharadas de culantro picado finamente', '1 Cucharada de aceite de oliva', '1 Limón', '2 Cucharadas de vinagre de manzana.', 'Chips si se desea'],
        steps: ['En un bowl colocar el atún sin agua, agregar la mayonesa, mostaza, salsa de tomate, limón,', 'vinagre de manzana y revolver.', 'Agregar los frijoles negros, el tomate picado, cebolla, culantro y revolver.', 'Agregar el aceite de oliva y salpimentar.', 'Servir con la lechuga y chips'],
        category: ['ensaladas', 'almuerzos y cenas'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_8896.jpg'
    },
    {
        id: 39,
        title: 'ENSALADA DE QUINOA, VEGETALES, FRIJOLES Y HUEVO ',
        description: '',
        ingredients: ['2 Tazas de quinoa cocida', '2 Tazas de frijoles', '½ Taza de zucchinni en cuadritos', '1 Taza de brócoli cocidos', '4 Tortillas', '½ Cebolla picada en julianas', '2 Cucharadas de aceite de oliva', '1 Limón', '2 Ajos', '2 Huevos', '2 Tortillas de maíz'],
        steps: ['En un sartén saltear el ajo y agregar los zucchinis y el brócoli, saltearlos por 3minutos, retirar y', 'enfriar.', 'En un bowl colocar la quinoa, el frijol, la cebolla, el zucchini y frijol, revolver y agregar el limón,', 'el aceite y salpimentar.', 'Partir las tortillas en tiritas y hornear.', 'Servir la ensalada con los huevos duros y las tortillas horneadas'],
        category: ['almuerzos y snacks'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_8856.jpg'
    },
    {
        id: 40,
        title: 'WRAP DE FRIJOLES',
        description: '',
        ingredients: ['1 Tortilla de harina grande', '1 Tortilla de harina pequeña', '1 Tostada', '½ Taza de queso mozzarella', '¼ de pechuga de pollo desmenuzada', '¼ Taza de tomate picado', '¼ Taza de cebolla picada', '1 Limón', '3 Cucharadas de culantro picado finamente', '¼ Taza de arroz cocinado', '¼ Taza de frijoles cocinado', '2 Cucharadas de aceite', '2 Cucharadas de crema agria'],
        steps: ['En un sartén sofreír una cucharada de cebolla, agregar el arroz y el frijol, cocinar por 3 min.', 'Colocar en un bowl tomate, cebolla, culantro y jugo de limón, salpimentar al gusto', 'Colocar la tortilla de harina grande en una superficie plana.', 'Agregar el arroz con frijoles en el medio de la tortilla, colocar el pollo, pico de gallo y crema', 'agria.', 'Colocar la tostada encima y agregar queso.', 'Cerrar con la tortilla de harina pequeña.', 'Calentar en un sartén a fuego bajo, 3 min cada lado.'],
        category: ['snacks'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_8610.jpg'
    },
    {
        id: 41,
        title: 'BOWL DE TORTILLA CON FRIJOLES',
        description: '',
        ingredients: ['4 tortillas de harina', '1/2 taza de queso', '2 tazas de lechuga cortada finamente en tiras', '4 tazas de arroz', '2 tazas de frijoles negros', '1 ajo picado finamente', '1 taza de tomate picado', '1/4 de taza de cebolla picada', '1/2 taza de culantro', 'Pollo desmenuzado', 'Aderezo', '1 taza de aceite', '1 taza de culantro', '1 huevo', '1 cucharada de mostaza', '1 cucharada de miel', '2 cucharadas de vinagre', 'Sal y pimienta'],
        steps: ['Colocar las tortillas en un bowl de metal y hornear por 5min a 350 para crear un bowl de', 'tortilla.', 'Saltear en un sartén ajo y agregar el arroz cocido y frijoles, cocinar por 6min.', 'En un bowl tomate, culantro, cebolla y limón, salpimentar. (Puede sustituirse por salsa)', 'En el Bowl de tortilla colocar, lechuga, frijol y arroz, agregar pollo si se desea.', 'Servir con la combinación de tomate, agregar queso y aderezo', 'PREPARACIÓN ADEREZO', 'En una batidora colocar, culantro, huego, mostaza, miel y vinagre, licuar hasta obtener una', 'mezcla homogénea.', 'Incorporar poco a poco el aceite hasta obtener una consistencia cremosa.'],
        category: ['desayunos'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_8264.jpg'
    },
    {
        id: 42,
        title: 'BOWL DE DESAYUNO',
        description: '',
        ingredients: ['Frijoles en salsa', '2 Tazas de frijoles negros', '2 Tomates', '½ Cebolla', '1 Ajo', '2 Cucharadas de culantro', '½ Chile dulce', 'Sal y pimienta', '2 Cucharadas de aceite', '', 'Acompañamientos', '4 Tortillas de maíz delgadas', '4 Huevos', '½ tomate picado finamente', '1 Taza de lechuga', '2 Cucharadas de crema'],
        steps: ['Saltear el ajo en un sartén, agregar el tomate picado, cebolla, chile dulce y 1 taza de agua,', 'dejar hervir por 5min y licuar.', 'Colocar en una olla y agregar los frijoles, salpimentar.', 'Preparar los huevos al gusto', 'Tostar las tortillas en triángulos y tostar en el horno.', 'Servir en un plato hondo los frijoles negros, huevo, alrededor colocar los ingredientes al', 'gusto.'],
        category: ['desayunos'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_8207.jpg'
    },
    {
        id: 43,
        title: 'TOSTADADAS DE ATUN CON FRIJOLES',
        description: '',
        ingredients: ['½ Taza de elotes amarillos', '1 Taza de frijoles negros', '1 Taza de tomate cherry', '1 Lata de atún', '2 Cucharadas de culantro picado finamente', '½ Cebolla morada', '2 Cucharadas de vinagre de manzana', '2 Cucharadas de mayonesa', '1 Cucharada de mostaza', '1 Cucharada de aceite de oliva', '1 Limón', '1 Ajo picado finamente', '4 Rodajas de pan', '1 Taza de queso para derretir'],
        steps: ['Colocar en un bowl los elotitos amarillos, agregar frijol, tomate y atún.', 'Agregar la cebolla morada, culantro, vinagre de manzana y revolver hasta obtener todos', 'los ingredientes combinados.', 'Agregar mayonesa, mostaza, aceite de oliva, limón, ajo picado y salpimentar.', 'Colocar el pan en un recipiente para hornear y agregar el queso a su elección encima,', 'hornear a 350F por 5min.', 'Servir la ensalada encima de las tostadas.', '*La ensalada puede servirse como acompañamiento.'],
        category: ['almuerzos y cenas', 'snacks'],
        type: '',
        img: '/img/recipes/IMG_8073.jpg'
    },
    {
        id: 44,
        title: 'ARROZ ASIATICO CON FRIJOLES Y VEGETALES',
        description: '',
        ingredients: ['2 Tz de frijoles cocinado', '4 Tz de arroz cocinado', '4 Hongos en rodajas', '2 Tazas de brócoli cocinado', '1 Tz de bok choy picado en tiras', '2 Cucharadas de culantro', '1 Tz de zucchinis en cubitos', '2 Cucharadas de ajo picado finamente', '2 Cucharadas de aceite de ajonjolí', '3 Cucharadas de ajonjolí', '2 Cucharadas de salsa de soya', '2 Cucharadas de cebolla picada finamente'],
        steps: ['Colocar en un sarten el aceite normal y sofreír el ajo y la cebolla.', 'Agregar el zucchini, los hongos, brócoli y el bok choy, saltear por 5 min', 'Agregar los frijoles y el arroz, saltear por 5min y agregar el aceite de ajonjolí.', 'Incorporar la salsa de soya y el culantro.', 'Salpimentar y disfrutar.'],
        category: ['almuerzos y cenas'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_7471.jpg'
    },
    {
        id: 45,
        title: 'SOPA DE FRIJOLES Y VEGETALES',
        description: '',
        ingredients: ['2 Tomates enteros', '1 Ajo', '4 Tazas de caldo de vegetales', '1 Cucharada de culantro picado finamente', '1 Bok Choy en tiras', '1 Zanahoria en rodas', '4 Papas pequeñas y peladas', '4 Hongos', '2 Tazas de frijoles kidney cocidos (puede sustituirse por otros)', '4 Tortillas', '2 Tazas de Arroz'],
        steps: ['Licuar el tomate con la cebolla y el caldo de vegetales.', 'Poner a hervir el caldo licuado con el tomate y la cebolla, agregar la zanahoria, el culantro,', 'las papás y hervir por 15min.', 'Agregar los kidney beans, el bok choy y los hongos, hervir por 5min más.', 'Servir con tortillas tostadas y arroz'],
        category: ['sopas y cremas'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_7434.jpg'
    },
    {
        id: 46,
        title: 'ENSALADA DE PASTA, ATÚN Y FRIJOLES NEGROS',
        description: '',
        ingredients: ['4 Tazas de pasta cocinada', '1 Taza de frijoles', '1 Taza de atún', '2 Tazas de lechuga', '½ cebolla morada', '1 Tomate', '2 Cucharadas de culantro', '2 Cucharadas de apio picado finamente', '2 cucharadas de aceite de oliva', '½ taza de mayonesa'],
        steps: ['Colocar en un bowl la mayonesa, cebolla morada, culantro, aceite de oliva, ajo picado,', 'tomate picado finamente y revolver.', 'Colocar en otro bowl la pasta, el frijol, atun y lechuga, aregar el aderezo preparado', 'anteriormente y revolver.', 'Sal pimentar al gusto'],
        category: ['ensaladas', 'almuerzos y cenas'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_7337.jpg'
    },
    {
        id: 47,
        title: 'SOPA DE TACOS CON FRIJOLES ',
        description: '',
        ingredients: ['1 Taza de carne molida', '1 Taza de frijoles', '1 Taza de salsa de tomate natural', '2 Tazas de caldo de carne', '1 Taza de arroz cocido', '1 Ajo picado finamente', '2 Cucharadas de aceite de oliva', '5 tortillas', '', 'Para Servir', '2 Cucharadas de cebolla morada', '½ Aguacate', '½ Taza de tomate picado en cuadritos', '2 Cucharadas de culantro', '½ Taza de queso mozzarella en rodajas'],
        steps: ['Colocar en un sarten el aceite y sofreír con el ajo y la cebolla blanca, agregar la carne', 'molida y cocinar por 5min, agregar los frijoles, la taza de salsa de tomate natural, el caldo', 'de carne y hervir por 10min.', 'Partir las tortillas en tiritas y hornear hasta tostar (opcional se puede hacer fritas)', 'Colocar en un recipiente hondo el arroz y la sopa, servir con cebolla morada, aguacate,', 'tomate picado, culantro y queso mozzarella.', '¡Disfrutar!'],
        category: ['sopas y cremas', 'almuerzos y cenas'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_7222.jpg'
    },
    {
        id: 48,
        title: 'ENSALADA CON PEPINO Y FRIJOLES BLANCOS',
        description: '',
        ingredients: ['1 Taza de pepino', '½ Taza de frijoles blancos cocidos', '¼ de cebolla morada cortada finamente', '2 cucharadas de limón', '1 Cucharada de vinagre', '2 Cucharadas de aceite de oliva', '1 Cucharada de flakes de chile', 'Sal y pimienta'],
        steps: ['Colocar en un bowl el pepino en rodajas, la cebolla y los frijoles blancos.', 'En un bowl aparte unificar el limón, vinagre, aceite de oliva y los flakes', 'de chile, revolver por 2min.', 'Agregar el aderezo al pepino y frijoles, revolver y salpimentar.', 'Dejar reposar por 1hora antes de servir.'],
        category: ['ensaladas', 'acompañamientos'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_7037.jpg'
    },
    {
        id: 49,
        title: 'ENSALADA FRIA DE PASTA Y FRIJOLES NEGROS',
        description: '',
        ingredients: ['1 Taza de frijoles negros cocidos', '1 Taza de frijoles rojos cocidos', '1 Taza de frijoles blancos cocidos', '2 Tazas de pasta coditos cocidos (se puede utilizar otro tipo de', 'pasta)', '3 tomates asados hechos pure', '¼ de cebolla picada finamente', '¼ de culantro picado finamente', '3 ajos picados finamente', '2 Cucharadas de jugo de limón', '1 Cucharada de aceite de oliva', '2 Cucharadas de vinagre', 'Sal y pimienta al gusto'],
        steps: ['Colocar en un bowl el tomate hecho pure, la cebolla picada,', 'culantro, ajo, limón y revolver.', 'Agregar a la mezcla el aceite de oliva, vinagre y dejar los', 'ingredientes reposar por 10min.', 'Agregar los frijoles y la pasta revolver.', 'Refrigerar por 20min y servir.'],
        category: ['ensaladas', 'almuerzos y cenas'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_6832.jpg'
    },
    {
        id: 50,
        title: 'ENSALADA DE FRIJOLES Y CAMOTE',
        description: '',
        ingredients: ['1 Taza de camote en cuadritos', '2 Tazas de frijoles tipo kidney (puede ser cualquier otro tipo)', '2 Cucharadas de salsa de tomate natural', '2 ajos picados finamente', '¼ de cebolla morada', '2 Cucharadas de limón', '1 Taza de garbanzos', '1 Taza de espinacas', 'Sal y pimienta al gusto', '2 Cucharadas de culantro picado finamente'],
        steps: ['En un bandeja colocar el camote, condimentar con ajo picado finamente, sal y pimienta. Hornear a 350F por 15min, dejar enfriar', 'antes de utilizar.', 'Colocar en un bowl los frijoles y garbanzos, agregar el tomate y jugo de limón, revolver y dejar reposar por 20min.', 'Agregar a la mezcla de frijoles y garbanzos la cebolla, espinaca, culantro, agrega el camote al final.', 'Salpimentar al gusto'],
        category: ['ensaladas', 'acompañamientos'],
        type: '',
        img: '/img/recipes/IMG_6776.jpg'
    },
    {
        id: 51,
        title: 'ENSALADA DE FRIJOLES BLANCOS Y ELOTES',
        description: '',
        ingredients: ['1 Taza de tomate picado finamente', '2 Tazas de frijol blanco', '2 Cucharadas de puerro picado en rodajas', '¼ Taza de cebolla morada picada finamente', '2 elotes blancos o amarillos (de su preferencia) cocidos', '2 Cucharadas de culantro', '2 Cucharadas de vinagre de manzana', '4 Cucharadas de aceite de oliva', '2 Ajos picados finamente ', 'Sal y pimienta al gusto'],
        steps: ['En un sartén colocar el aceite y saltear asar los elotes, hasta obtener un color dorados. Dejar enfriar', 'En un bowl colocar tomate, frijol, puerro, cebolla morada, culantro y revolver. ', 'Agregar el aceite de oliva, ajo picado, vinagre y salpimentar al gusto. ', 'Desgranar el elote y colocarlo encima de la ensalada antes de servir. '],
        category: ['ensaladas'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_6744.jpg'
    },
    {
        id: 52,
        title: 'CARACOLES RELLENOS CON FRIJOLES Y POLLO',
        description: '',
        ingredients: ['Caracoles', '8 caracoles de pasta grandes cocidos', '1 Taza de pechuga de pollo de menuzada cocida ', '2 cucharadas de hongos partidos en rodajas', '1 Cucharada de cebolla morada', '½ taza de espinacas partidas en tiras', '1 Ajo picado finamente', '2 Taza de salsa roja', 'Queso parmesano', '2 Cucharadas de aceite', '2 cucharadas de mantequilla', '', '--', '', 'Ensalada y aderezo', '4 Cucharadas de vinagre balsámico', '1 Cucharada de miel ', '1 Cucharada de aceite de oliva', 'Sal y pimienta', '1 Tomate partido en rodajas', 'Lechuga'],
        steps: ['En un sartén colocar el aceite y saltear el ajo y cebolla, agregar la espinaca, los hongos, el pollo y cocinar por 5 min, agregar la mantequilla, agregar los frijoles.', 'Colocar una cama de salsa de tomate en un recipiente para hornear.', 'Rellenar cada caracol con el relleno de pollo y frijoles. Colocar los caracoles rellenos en el recipiente, esparcir queso parmesano en todos los caracoles. ', 'Hornear por 15 min a 250 F', 'Reposar por 2 min antes de servir', 'Preparación ensalada: Cortar los ingredientes y colocar en un bowl ', 'Para el aderezo colocar el vinagre balsámico, revolver con la miel y agregar el aceite de oliva.'],
        category: ['almuerzos y cenas'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_5918.jpg'
    },
    {
        id: '53',
        title: 'TOSTADA DE DESAYUNO CON FRIJOLES',
        description: '',
        ingredients: ['4 Rodajas de pan', '¼ Taza de queso mozzarella', '4 huevos', '5 hojas de arúgula (puede cambiarse por cualquier tipo de lechuga)', '8 rodajas de tomate ', '1 Taza de frijoles negros molidos', '2 cucharadas de aceite de oliva ', 'Sal y pimienta'],
        steps: ['Colocar en un sartén el aceite y las rodajas de pan para dorarlas 2minutos de cada lado, sacar del sartén. ', 'Colocar en un sartén el aceite de oliva, los huevos revueltos previamente y el queso mozzarella en una temperatura media revolver hasta que estén cocidos. ', 'Esparcir el frijol molido en las tostadas, colocar la lechuga, tomates y los huevos. ', 'Salpimentar antes de servir. ', 'Disfrutar.'],
        category: ['desayunos'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_5902.jpg'
    },
    {
        id: 54,
        title: 'ENSALADA DE FRIJOLES BLANCOS CON REPOLLO Y COLIFLOR',
        description: '',
        ingredients: ['1 Taza de frijoles blancos cocidos', '1 Taza de coliflor cortada y cocida', '1 Taza de repollo ', '½ cebolla morada picada en julianas', '2 Cucharadas de jugo de limón', '2 Cucharadas de culantro picado finamente', '¼ Taza de zanahoria rallada', '½ Taza de vinagre de manzana', '1 Ajo picado finamente', '1 Jalapeño en rodajas (Omitir si no se desea picante)', 'Sal y pimienta', '3 cucharadas de aceite de oliva'],
        steps: ['Colocar en un bowl el vinagre de manzana, el juego de limón, cebolla morada y   el aceite de oliva, revolver hasta unificar.', 'Agregar los frijoles blancos, la coliflor, repollo, el culantro, la zanahoria, ajo y el jalapeño, revolver con los demás ingredientes. ', 'Salpimentar y dejar reposar 4 horas antes de servir'],
        category: ['ensaladas'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_5388.jpg'
    },
    {
        id: 55,
        title: 'COLIFLOR ASADA Y FRIJOLES NEGROS',
        description: '',
        ingredients: ['1 Coliflor partida en rodajas.', '4 Cucharadas de aceite de oliva', '½ Cebolla morada', '2 Ajo picados finamente', '1 Cucharada de culantro', '1 Cucharada de Perejil', '2 cucharadas de cebollín picado finamente', 'El jugo de 1 limón', '5 Tomates cherr', '1 Taza de frijoles ', 'Sal y pimienta al gusto '],
        steps: ['Colocar en un bowl el aceite de oliva, el ajo picado finamente, perejil, culantro, el jugo de un limón y revolver; dejar reposar por 5min antes de utilizar', 'En un recipiente para hornear la coliflor y marinar con el aderezo preparado anteriormente.', 'Hornear la coliflor por 15min a 350 F', 'Colocar en un recipiente para servir y agregar encima la cebolla picada finamente, el cebollín y el frijol. ', 'Agregar unas gotas de limón encima. '],
        category: ['acompañamientos'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_5232.jpg'
    },
    {
        id: 56,
        title: 'CEVICHE DE FRIJOLES',
        description: '',
        ingredients: ['1 Taza de frijoles negros cocidos', '1 Taza de frijoles blancos cocidos', '1 Taza de tomate picado finamente', '1 Cebolla morada partida en rodajas finamente', '¼ Taza de culantro', '1 Taza de palmito picado finamente', 'El jugo de dos limones', '2 Cucharadas vinagre ', '2 Ajos picados finamente', '1 Cucharada de aceite de oliva', '3 Cucharadas de cebollín picado finamente'],
        steps: ['Colocar en un bowl el jugo de limón, vinagre, cebollín, cebolla, aceite de oliva, ajos, salpimentar y revolver para unificar.', 'Agregar al bowl del aderezo los demás ingredientes, dejar reposar por 15min antes de servir.', 'Servir con chips.'],
        category: ['acompañamientos', 'snacks'],
        type: '',
        img: '/img/recipes/IMG_5224.jpg'
    },
    {
        id: 57,
        title: 'PAPAS CON FRIJOLES NEGROS',
        description: '',
        ingredients: ['4 Papas partidas en tiras', '1 Taza de frijoles negros', '5 rodajas de jalapeño', '½ Taza de queso mozzarella', '10 Tomates cherry partidos a la mitad ', '1 Limón partido', '4 Cucharadas de crema agria', '2 Cucharadas de culantro', '2 Cucharadas de paprika', '1 Cucharada de ajo picado '],
        steps: ['Colocar en un bowl las papas partidas y condimentar con paprika, ajo, sal y pimienta revolver.', 'Colocar en la freidora de aire por 20min a 200F (revolver cada 10min) Se pueden hacer fritas o al horno 20min a 350 F', 'Sacar las papas y servirlas en un recipiente hondo, servir encima una capa de frijoles, queso mozzarella, tomates cherry partidos a la mitad, cilantro, crema agria y servir con limón alrededor. ', 'Disfrutar '],
        category: ['snacks'],
        type: '',
        img: '/img/recipes/IMG_5217.jpg'
    },
    {
        id: 58,
        title: 'SOPA DE FRIJOLES Y LENTEJAS',
        description: '',
        ingredients: ['2 tazas de frijoles blancos cocidos', '½ cebolla morada picada en gajos', '2 Tazas de lentejas rojas cocidas', '6 Tazas de caldo de vegetales', '2 Tazas de arroz', '3 cucharadas de culantro', '1 Ajo picado finamente', 'Sal y pimienta al gusto'],
        steps: ['Saltear el ajo con aceite de oliva en una olla y agregar el caldo de vegetales. ', ' Agregar los frijoles y las lentejas cocidas al caldo, calentar por 8min.', 'Agregar el culantro y hervir por 5minutos más', 'Salpimentar.', 'Servir con los demás acompañamientos.', 'Disfrutar'],
        category: ['sopas'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_5069.jpg'
    },
    {
        id: 59,
        title: 'MINI ZUCHINNIS RELLENOS CON FRIJOLES NEGROS',
        description: '',
        ingredients: ['4 Zucchinis cortados a la mitad', '1 Taza de frijoles negros', '½ Taza de queso mozzarella', '1 Taza de salsa de tomate ', 'Sal y pimienta', '2 Cucharadas de aceite de oliva', '1 Taza de carne molida', '1 Cucharadita de comino'],
        steps: ['½ Taza de queso mozzarella', '1 Taza de salsa de tomate ', 'Sal y pimienta', '2 Cucharadas de aceite de oliva', '1 Taza de carne molida', '1 Cucharadita de comino'],
        category: ['acompañamientos'],
        type: '',
        img: '/img/recipes/IMG_5062.jpg'
    },
    {
        id: 60,
        title: 'ROLLITOS DE REPOLLO RELLENOS DE FRIJOLES',
        description: '',
        ingredients: ['6 hojas de repollo', '2 Tazas de carne molida', '1 Cucharada de ajo picado', '¼ Taza de cebolla picada finamente', 'Comino', 'Sal de ajo', '2 Tazas de salsa de tomate', '1 Taza de frijoles negros', '1 Taza de queso mozzarella', 'Aceite de oliva'],
        steps: ['Colocar en un bowl agua hirviendo y remojar las hojas de repollo durante 8min o hasta que estén suaves para enrollar. ', 'Colocar en un sarten el aceite de oliva, la cebolla y el ajo, agregar la carne molida y cocinar por 10min hasta que esté bien cocida, salpimentar.', 'Agregar a la mezcla de carne los frijoles negros y dejar cocinar por 3min. ', 'Colocar en una tabla de madera una hoja de repollo y colocar en el medio la mezcla de carne, enrollar y colocar en un recipiente para hornear. ', 'Agregar salsa de tomate sobre los rollos y colocar queso para derretir. ', 'Hornear por 10min. '],
        category: ['almuerzos y cenas'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_5079.jpg'
    },
    {
        id: 61,
        title: 'TOSTADA DE FRIJOLES Y PESTO',
        description: '',
        ingredients: ['2 Rodajas de pan', 'Queso mozzarella fresco (Cualquier tipo de queso funciona)', '1/2 Taza de frijoles blancos', '1/2 Taza de albahaca', ' 8 Tomates mozzarella', ' 1/2 Taza de aceite de oliva', ' 2 Cucharadas de queso parmesano', ' 2 Ajos enteros'],
        steps: ['Colocar en la licuadora los frijoles blancos, la albahaca, aceite de oliva, queso parmesano, ajos y salpimentar, licuar por 3 min o hasta que se obtenga una pasta homogénea.', 'Esparcir sobre el pan una cucharada del pesto y colocar tomates con el queso. ', ' A disfrutar.'],
        category: ['snacks', 'acompañamientos'],
        type: '',
        img: '/img/recipes/IMG_5036.jpg'
    },
    {
        id: 62,
        title: 'CHILES RELLENOS CON FRIJOLES',
        description: '',
        ingredients: ['2 Chiles morron cortados a la mitad', '1/2 Taza de frijoles blancos', '1/2 Taza de salsa roja', '1 Taza de carne molida', '1/2 Taza de queso mozzarella', '1/2 cebolla picada finamente', '1/4 de espinaca picada', 'Sal y pimienta'],
        steps: ['Lavar el chile morron y quitar las semillas. ', 'Saltear en un sartén la cebolla, agregar espinaca y cocinar con la carne molida por 5 min o hasta que esté cocinada la carne. ', 'Agregar los frijoles blancos y la salsa roja, dejar cocinar por 3 min más. ', 'Colocar la mezcla dentro de los chiles, agregar queso y salpimentar', 'Hornear a 300 F por 10 min'],
        category: ['acompañamientos'],
        type: '',
        img: '/img/recipes/IMG_4313.jpg'
    },
    {
        id: 63,
        title: 'SOPA DE POLLO CON FRIJOLES BLANCOS',
        description: '',
        ingredients: ['6 Tazas de caldo de pollo', '1 Taza de zanahorias cortadas en cubitos', '2 Tazas de arroz', '1/2 Taza de maíz dulce', '1 Taza de pechuga de pollo desmenuzada (opcional)', '2 Cucharadas de culantro picado finamente ', '4 Tortillas partidas en tiras y tostadas', '2 Limones', '1 Aguacate', 'Sal y pimienta', '1 Ajo picado finamente', '2 Cucharadas de aceite de oliva', '2 Cucharadas de cebolla'],
        steps: ['Colocar en una olla el aceite de oliva, frijol y cebolla, sofreír por 4min.', 'Agregar el caldo de pollo y dejar calentar por 5min', 'Agregar el pollo de menuzado, zanahoria, frijol blanco, maíz dulce, arroz y dejar hervir por 10min', 'Salpimentar', 'Servir con el culantro, las tortillas tostadas y aguacate'],
        category: ['sopas y cremas'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_0011.jpg'
    },
    {
        id: 64,
        title: 'CHILE RELLENO CON FRIJOLES Y POLLO',
        description: '',
        ingredients: ['3 Chiles dulce / Chile pimiento', '1 Taza de queso para derretir', '1 Taza de pechuga de pollo cocida', '1/2 Taza de elotitos ', '2 Cucharadas de culantro', '1 Ajo picado finamente', '2 Tazas de salsa verde', 'Sal y pimienta al gusto'],
        steps: ['Hornear a 350 por 15min los chiles enteros, sacar dejar enfriar y retirar la piel y las semillas del interior. ', ' Colocar en un bowl el queso, las pechugas de pollo desmenuzadas, los elotitos, el culantro y el ajo, revolver y salpimentar.', ' Colocar los chiles pelados en un recipiente para hornear y rellenar de la mezcla anterior. ', ' Colocar la salsa verde encima y Hornear por 8 min a  300F.', ' Dejar reposar por 3min antes de servir'],
        category: ['acompañamientos'],
        type: '',
        img: '/img/recipes/IMG_002.jpg'
    },
    {
        id: 65,
        title: 'TACOS DE FRIJOLES VEGETARIANOS',
        description: '',
        ingredients: ['3 Tortillas', '1 Taza frijoles negros', '1 Ajo picado', 'Salsa verde', '4 hojas de lechuga picadas finamente', 'Rodajas de zanahoria', '1 Limón', '1/2 Tz de repollo morado ', '2 Cucharadas de queso', '2 Cucharadas de cebollin', '1 Jalapeño', 'Sal y pimienta '],
        steps: ['Colocar en un sartén el aceite con ajo picado y agregar los frijoles, calentar por 5min', 'Calentar las tortillas. ', 'Colocar las tortillas en un plato para montar los tacos, agregar la lechuga, colocar los frijoles. ', 'Poner en un bowl el repollo morado, agregar las rodajas de zanahoria, cebollin, limón y revolver, agregar a cada taco. ', 'Servir con queso, salsa verde y jalapeño.'],
        category: ['almuerzos y cenas'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_003.jpg'
    },
    {
        id: 66,
        title: 'TOSTADAS DE FRIJOLES Y VEGETALES',
        description: '',
        ingredients: ['4 Tostadas', '1/2 Taza de frijoles negros molidos', '1 Taza de zuchinni en tiras', '4 Hongos rodajas', '1 Taza de zanahoria', '1/2 Taza de repollo morado ', '4 Cucharadas de culantro', '3 Cucharadas de aceite de oliva', '2 limones', '2 cucharadas de ajonjolí', '1 Ajo Picado finamente', '1 Chile dulce / Chile pimiento en tiras', 'Sal y pimienta '],
        steps: ['Colocar en un sartén a temperatura media el aceite de oliva, agregar el aceite y sofreír el ajo con chile dulce/ Chile pimiento. ', 'Agregar el zucchini, los hongos, la zanahoria y sofreír por 8min hasta que los vegetales estén dorados. ', 'Agregar el ajonjolí, el culantro y salpimentar. ', 'Colocar los frijoles molidos sobre las tostadas, colocar los vegetales y decorar con el repollo morado. ', 'Servir con rodajas de limón.'],
        category: ['almuerzos y cenas'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_004.jpg'
    },
    {
        id: 67,
        title: 'CREMA DE BROCOLI Y FRIJOLES',
        description: '',
        ingredients: ['2 Tazas de brócoli cocido', '2 Tazas de caldo de vegetal', '1 Taza de frijoles blancos cocidos', '2 Ajos finamente picados', '1/2 Cebolla blanca picada finamente', '2 Rodajas de Pan', '4 Cucharadas de aceite de oliva', 'Queso cheddar'],
        steps: ['Sofreír el ajo y la cebolla con el aceite de oliva por 3min', '', 'Agregar los frijoles blancos, el brócoli y el caldo de vegetales, dejar hervir por 10min', 'Licuar hasta obtener una textura homogénea', 'Hervir por 5 minutos y sal pimentar', 'Servir con pan tostado, queso cheddar rallado, frijoles blancos enteros ¡DISFRUTAR!', '', 'El frijol blanco aporta nutrientes y le da una textura cremosa.'],
        category: ['sopas y cremas'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_3266.jpg'
    },
    {
        id: 68,
        title: 'TORTITAS DE FRIJOLE Y ZUCHINNI',
        description: '',
        ingredients: ['1/4 de harina de arroz (puede ser normal)', '1/2 taza de frijoles negros sin agua', '1 1/2 de zucchini (quitarles la humedad con una toalla de cocina)', '2 cucharadas de culantro picado', '1 cucharada de puerro picado', '1/4 queso mozzarella', '1 huevo', '1 ajo picado finamente', 'Sal y pimienta'],
        steps: ['Colocar en un bowl el zucchini rallado (quitar el agua con una servilleta o toalla de cocina) incorporar, huevo, harina, culantro y puerro.', 'Revolver hasta crear una consistencia homogénea. ', 'Agregar el ajo, queso mozzarella y salpimentar al gusto. ', 'Dejar en la refrigeradora por 15 min antes de Utilizar. ', 'Colocar en un sartén un poco de aceite, para evitar que la mezcla se pegue al sartén, dejarlo calentar por 3 min. ', 'Ayudarse con una taza medidora para agarrar la mezcla y colocarla en el sartén. ', 'Dejar cocinar por 6 min de cada lado. ', 'Opcional: Se puede cocinar en freidora de aire', 'Alcanza para 5 tortitas. ', 'Acompañamiento', 'Frijol negro'],
        category: ['snacks', 'acompañamientos'],
        type: '',
        img: '/img/recipes/IMG_006.jpg'
    },
    {
        id: 69,
        title: 'ENSALADA DE FRIJOLES BLANCOS CON PICANTE',
        description: '',
        ingredients: ['4 Tazas de frijoles blancos cocidos', '2 Cucharadas de flakes de chile seco', '3 ajos', '1 Taza de vinagre de manzana', '1/4 de aceite de oliva', '2 cucharadas de limón', 'Sal y pimienta al gusto', '1 Rábano en rodajas '],
        steps: ['Colocar en un bowl el vinagre de manzana, el aceite de oliva y jugo de limón', '', 'Agregar los flakes de chile seco, el ajo, los rábanos y limón, revolver y dejar reposar por 20min. ', '', 'Agregar los frijoles blancos, revolver y salpimentar. ', '', 'Servir con chips.'],
        category: ['ensaladas', 'snacks'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_3167.jpg'
    },
    {
        id: 70,
        title: 'PIZZA DE FRIJOLES MOLIDOS',
        description: '',
        ingredients: ['1 Flat bread o Masa para pizza', '4 tomates cherry', '2 Tazas de salsa natural de tomate', '1 Taza de frijoles molidos negro', '1/4 De Cebolla Morada', '8 Rodajas de zuchinni'],
        steps: ['Colocar el Flat Bread en un molde para hornear', 'Agregar el frijol y hacer una capa delgada, encima colocar salsa de tomate, queso mozzarella y agregar los ingredientes adicionales. ', 'Hornear por 8 min a 350 grados.'],
        category: ['almuerzos y cenas'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_3033.jpg'
    },
    {
        id: 71,
        title: 'CREMA DE TOMATE',
        description: '',
        ingredients: ['4 tomates', '1 cebolla ', '2 dientes de ajo', '1 taza de frijoles blancos ', '2 tazas de agua (puede ser sustituido por caldo de pollo)', '3 hojas de albahaca', '1 Rodaja de pan (si se desea)', '1 Rodaja de queso (si se desea)', '2 Cucharadas de mantequilla '],
        steps: ['Poner a hervir los tomates, la cebolla, los dientes de ajo y las hojas de albahaca con dos tazas de agua por 15min. ', 'Después de 15min colocar los ingredientes cocinados en la licuadora. ', 'Poner a hervir y salpimentar. ', 'Licuar los frijoles blancos con 1 taza de agua de frijoles. ', 'Agregar los frijoles blancos a la sopa de tomate para espesar y darle nutrientes y sabor. ', 'Agregar la mantequilla y dejar hervir por 5min más.', 'Salpimentar y servir si se desea con Pan y queso'],
        category: ['sopas'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_2668.jpg'
    },
    {
        id: 72,
        title: 'PASTA CON SALSA Y FRIJOLES BLANCOS',
        description: '',
        ingredients: ['Pasta a su elección', '2 tomates', '2 hojas de albahaca', '2 ajo', '3 cucharadas de culantro ', '6 tomates cherry', '1 taza de frijoles blancos', 'Sal y pimienta', 'Aceite de oliva'],
        steps: ['Poner a Cocinar la pasta.', 'En un sartén poner a dorar los tomates, partidos en cuatro, con el ajo. Colocarles 1/2 taza de agua, salpimentar y dejar cocinar por 5min', 'Poner los tomates a licuar y reservar la salsa.', 'En un sartén colocar ajo picado con aceite, saltear los tomates, agregar los frijoles, cocinar por 4 minutos y colocar el culantro. ', 'Poner la pasta en un plato para servir, agregar la salsa de tomate y servir con los tomate cherry salteados y frijoles blancos. ', 'Puede colocar queso parmesano al gusto.'],
        category: ['almuerzos y cenas'],
        type: '',
        img: '/img/recipes/IMG_2422.jpg'
    },
    {
        id: 73,
        title: 'ENSALADA DE PALMITO Y FRIJOLES',
        description: '',
        ingredients: ['1 Taza de frijoles blancos', '1 Taza de palmito en tiritas delgadas', '1/2 Taza de garbanzos', '1/4 de taza de culantro picado finamente', '3 limones', '1 ajo', '1/2 Cebolla morada', 'Sal y pimienta al gusto'],
        steps: ['Colocar en un bowl el culantro picado, agregar limón y revolver con el aceite de oliva hasta crear el aderezo. ', 'Colocar en un bowl el palmito, la cebolla morada, los frijoles y garbanzos.', 'Revolver todos los ingredientes y agregar el aderezo ', 'Dejar reposar por 20 minutos antes de servir.'],
        category: ['almuerzos y cenas', 'acompañamientos'],
        type: '',
        img: '/img/recipes/IMG_2152.jpg'
    },
    {
        id: 74,
        title: 'ENSALADA DE PAPA CON FRIJOLES',
        description: '',
        ingredients: ['2 Papas grandes partidas en cubos y cocidas', '2 cucharadas de culantro', '1/2 taza de kidney beans (pueden ser cualquier tipo de frijoles)', '1 Ajo', '2 Cucharadas de aceite de oliva', '1/4 de cebolla morada picada finamente', '2 cucharadas de maíz', 'dulce desgranado', '1 Huevo duro picado finamente', '2 cucharadas de mayonesa', '3 Pan Bagget', 'Sal y pimienta'],
        steps: ['Colocar la papa cocida en un bowl y agregar frijol, kidney beans, maíz dulce, aceite de oliva y ajo revolver y dejar reposar por 5 min.', 'Agregar Culantro, cebolla morada y huevo picado hasta que todos los ingredientes estén completamente mezclados.', 'Sal pimentar. ', 'Servir con Pan o galletas.'],
        category: ['almuerzos y cenas', 'acompañamientos'],
        type: '',
        img: '/img/recipes/IMG_1950.jpg'
    },
    {
        id: 75,
        title: 'SOPA TROPICAL DE FRIJOLES BLANCOS',
        description: '',
        ingredients: ['2 Tazas de frijoles blancos cocidos', '2 tazas de caldo de vegetales', '1 ajo picado finamente', '2 cucharadas de culantro', '4 tomates cherry', '4 cucharadas de elote dulce', '1/4 de cebolla morada picada finamente en julianas', 'Chips de tortillas (de su preferencia)', 'Queso para servir opcional'],
        steps: ['Saltear el ajo.', 'Agregar los frijoles licuados y sofreir por 3 minutos, agregar el caldo de vegetales para crear una mejor consistencia. ', 'Agregar culantro finamente picado (reservar un poco para decorar)', 'Colocar 3 cucharadas de elotes picados. ', 'Hervir por 10minutos', 'Sal pimentar. ', 'Servir y decorar con tomate cherry partidos,  cebolla morada, culantro y chips.'],
        category: ['almuerzos y cenas', 'sopas y cremas'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_0279.jpg'
    },
    {
        id: 76,
        title: 'CUPCAKES DE DESAYUNO ',
        description: '',
        ingredients: ['4 huevos ', '1 Cucharadas de cebolla ', '2 Cucharadas de espinaca ', '1 Ajo picado ', '1 Tazas de frijoles negros ', '¼ de queso rallado para derretir '],
        steps: ['Colocar todos los ingredientes en un bowl . ', 'Revolver ', 'Colocar aceite en un recipiente para cupcakes ', 'Agregar la mezcla ', 'Hornear a 200 por 10min '],
        category: ['desayunos', 'snacks'],
        type: '  Frijoles Kidney',
        img: '/img/recipes/IMG_4151.jpg'
    },
    {
        id: 77,
        title: 'POLLO EN SALADA Y FRIJOLES BLANCOS',
        description: '',
        ingredients: ['1 taza de tomates cocidos sin cáscara', '2 cucharadas de aceite', '2 cucharadas de cebolla', '1 ajo picado finamente', '2 hongos en rodajas', '1/2 taza de crema / natillas', '1 Taza de frijoles blancos', '1 cucharada de albahaca'],
        steps: ['En un sarten colocar la cebolla y el ajo y salpimentar. ', 'Agregar el tomate y revolver, dejar cocinar por 3min. ', 'Agregr los hongos y la crema, revolver y dejar cocinar por 3min. ', 'Agregar los frijoles cocinados y el pollo, cocinar por 5min.', 'Agregar la albahaca y servir. '],
        category: ['almuerzos y cenas'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_0287.jpg'
    },
    {
        id: 78,
        title: 'ENSALADA DE PINTO BEANS, CEBOLLA Y ELOTES',
        description: '',
        ingredients: ['', '2 Cebollas moradas cortadas en juliana', '1 Taza de elotitos amarillos', '1 Taza de pinto beans', '2 Limones el jugo', '1 Cucharada de vinagre de manzana', 'Sal y pimienta', '', 'Para servir', '4 Tomates cherry', '1 Taza de arugula', '', '', ''],
        steps: ['Colocar en un bowl la cebolla, agregar el limón, vinagre y revolver.', 'Agregar los frijoles previamente cocidos y los elotitos y revolver.', 'Servir con arugula y tomates cherry partidos a la mitad', 'Salpimentar al gusto'],
        category: ['ensaladas', 'acompañamientos'],
        type: ' Pinto beans',
        img: '/img/recipes/IMG_1825.jpg'
    },
    {
        id: 79,
        title: 'TOSTADA DE FRIJOLES BLANCOS',
        description: '',
        ingredients: ['1 Rodaja de Pan', '1 Taza de frijoles blancos ', '1 Cucharada de chile pimiento', '2 Cucharadas de cebollin', '1 Cucharada de jugo de limón', '1 Cucharada de aceite de oliva ', 'Sal y pimienta'],
        steps: ['Colocar en un bowl el jugo de limón , aceite de oliva sal y pimienta y revolvemos. ', 'En otro bowl colocar frijoles, chile pimiento, cebollin y agregar el aderezo ', 'Servir encima de una tostada de pan '],
        category: ['desayunos', 'snacks'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_1425.jpg'
    },
    {
        id: 80,
        title: 'TOSTADA DE FRIJOLES CON QUESO Y TOMATE',
        description: '',
        ingredients: ['2 Rodajas de pan', '½ Taza de frijoles molidos', '¼ Queso para derretir', '10 Tomates Cherry', '2 Hojas de albahaca', '½ Aguacate', 'Aceite de oliva '],
        steps: ['', 'En una rodaja de pan colocar el frijol negro y el queso derretido, hornear por 3min. ', 'Agregar las rodajas de aguacate. ', 'Colocar los tomate Cherry encima, hojitas de albahaca. ', 'Agregar aceite de oliva y sal y pimienta'],
        category: ['desayunos', 'snacks'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_1439.jpg'
    },
    {
        id: 81,
        title: 'TOSTADA DE PINTO CON HUEVO',
        description: '',
        ingredients: ['½ Taza de pinto ', '1 Huevo ', '1 Rodaja de jamón', '¼ Aguacate '],
        steps: ['En un pan colocar el pinto, el jamón, aguacate y huevo frito.'],
        category: ['desayunos', 'snacks'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_1423.jpg'
    },
    {
        id: 82,
        title: 'TOSTADA DE FRIJOLES CON PESTO Y TOMATE',
        description: '',
        ingredients: ['2 Rodajas de pan ', '2 Rodajas de Tomate', '2 Rodajas de Queso  fresco', '1 Rodaja de queso parmesano', '¼ Taza de pesto ', '1 Taza de frijoles blancos'],
        steps: ['En un bowl colocar el frijol blanco y revolver con el pesto. ', 'Colocar en un plato las 2 rodajas de pan.', 'Agregar el queso al pan, la rodaja de tomate y terminar con la combinación de frijoles con pesto. ', 'Colocar encima queso parmesano y hojitas de albahaca'],
        category: ['desayunos', 'snacks'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_6540.jpg'
    },
    {
        id: 83,
        title: 'BOWL DE QUINOA Y ENSALADA DE FRIJOLES',
        description: '',
        ingredients: [' 1 Taza de quinoa', '1 Taza de lechuga', '½ Taza de aderezo (puede ser a su elección)', '½ Taza de tomate picado ', '½ Taza de cebolla', '½ Taza de frijoles negros', '½ Taza de garbanzos', '2 Cucharadas de culantro', '2 Cucharadas de salsa de soya', '1 Cucharada de aceite de oliva '],
        steps: ['En un bowl colocar el tomate, cebolla, frijoles negros, garbanzos, culantro, salsa de soya y aceite de oliva, revolver. ', 'En un plato colocar la quinoa, cebolla y servir con aderezo al gusto.'],
        category: ['almuerzos y cenas'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_5954.jpg'
    },
    {
        id: 84,
        title: 'CHIFRIJO',
        description: '',
        ingredients: ['1 Taza de frijol Kidney', '1 Tomate', '½ Cebolla ', '2 Cucharadas de culantro ', '1 Limón ', '1 Taza de chicharrón ', 'Chips para servir '],
        steps: ['En un bowl para servir colocar una capa de arroz. ', 'Agregar frijoles con caldo', 'En un bowl poner el tomate picado, cebolla picada, culantro, agregar el jugo de limón y sal. ', 'Agregar pico de gallo y servir con cjips '],
        category: ['almuerzos y cenas'],
        type: '  Frijoles Kidney',
        img: '/img/recipes/IMG_8138.jpg'
    },
    {
        id: 85,
        title: 'SOPA DE LASAÑA CON FRIJOLES',
        description: '',
        ingredients: ['1 Cucharada de aceite ', '1 Taza de carne molida ', '1 Cucharada de ajo ', '1 Taza de hongos', '2 Tazas de salsa de tomate natural ', '4 Tazas de agua caliente ', '2 Cucharadas de cebolla blanca picada ', 'Pasta de lasagna quebrada', '1 Taza de frijoles blancos ', '1 Cucharada de mantequilla'],
        steps: ['En un bowl colocar el tomate, cebolla, frijoles negros, garbanzos, culantro, salsa de soya y aceite de oliva, revolver. ', 'En un plato colocar la quinoa, cebolla y servir con aderezo al gusto.'],
        category: ['almuerzos y cenas'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_1022.jpg'
    },
    {
        id: 86,
        title: 'FRIJOLES BLANCOS EN ESCABECHE',
        description: '',
        ingredients: ['2 Tazas de frijoles blancos ', '3 Tazas de vinagre blanco ', '1 Taza de salsa de tomate ', '½ Taza de aceite de oliva ', '1 Ajo picado finamente ', '1 Taza de cebolla partidas en juliana', '2 Cucharadas de cebollín ', 'Sal y pimienta '],
        steps: ['En un recipiente colocar el vinagre y los frijoles, ajo y revolver. ', 'Agregar el tomate, la cebolla, cebollín y aceite de oliva.', 'Sal pimentar.'],
        category: ['acompañamientos', 'snacks'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_4616.jpg'
    },
    {
        id: 87,
        title: 'ENSALADA DE FRIJOLES ',
        description: '',
        ingredients: ['Ingredientes', '1 ½ Taza frijoles negros cocinados', '1 ½ Taza frijoles blancos cocinados', '1 Chile dulce/pimiento picado', '¼ Taza de cebolla picada', '1 Taza de tomates Cherry picados', '½ Jalapeño picado', '½ Taza de culantro picado', '', 'Aderezo', '3 Cucharadas de aceite de oliva', '¼ Taza de jugo de limón', '1 Cucharada de miel', '1 Cucharada de ajo picado', 'Sal y pimienta al gusto'],
        steps: ['Partir, la cebolla, el tomate, chile pimiento y jalapeño', 'En un bowl colocar todos los ingredientes del aderezo y revolver.', 'En un bowl por aparte colocar frijoles, chile dulce, cebolla morada, tomates Cherry picados, jalapeño y culantro, revolver. ', 'Agregar el aderezo a la mezcla y dejar reposar por 30min antes de servir.'],
        category: ['ensaladas', 'snacks', 'acompañamientos'],
        type: '',
        img: '/img/recipes/IMG_0009.jpg'
    },
    {
        id: 88,
        title: 'TOSTADA DE FRIJOLES Y KALE ',
        description: '',
        ingredients: ['Ingredientes frijoles', '- 1 taza de butter beans', '- 1/2 taza de vinagre', '- 2 cucharadas de culantro', '- 1 ajo picado finamente', '', 'Kale', '- 1 taza de kale', '- 2 cucharadas de salsa de soya', '- 1 cucharada de aceite de ajonjolí', '- 1 cucharada de aceite de oliva', '', 'Tostada', '2 rodajas de pan', '2 cucharadas de aceite de oliva', '1/2 aguacate'],
        steps: ['En un sarten colocar aceite y colocar el pan por cada lado. ', 'Saltear el kale con la salsa de soya, aceite de ajonjolí con aceite de oliva. ', 'En un bowl colocar los frijoles, vinagre, culanto y ajo picado. ', 'En un plato colocar el pan, agregar kale, aguacate, la ensalada, queso parmesano y aguacate'],
        category: ['snacks'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_4360.jpg'
    },
    {
        id: 89,
        title: 'ROLLOS PRIMAVERA CON FRIJOLES',
        description: '',
        ingredients: ['1/2 taza de frijoles negros', '1 zanahoria', '1/4 de repollo morado', '2 cucharadas de ajonjolí', '1 pepino', '1/2 taza de perejil', '1 Limón', '1/4 de taza de salsa de soya'],
        steps: ['Cortar finamente la zanahoria, el repollo y pepino', 'Limpiar las hojas de culantro y separarlas del tallo.', 'Remojar las laminas de tela de arroz por 3 minutos en agua tibia', 'Poner en una tabla las laminas ya humedas y suavizadas, colocar dentro la zanahoria, el repollo, pepino y un poco de ajonjoli.', 'Enrrollar como si se estuviera haciendo un burrito.', '', 'Para la salsa colocar:', 'Salsa de soya', 'limón', 'Una pisca del ajonjoli'],
        category: ['snacks'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_7036.jpg'
    },
    {
        id: 90,
        title: 'OMELLETE CON VEGETALES Y FRIJOLES',
        description: '',
        ingredients: ['1/4 de taza de frijol negro', '2 huevos', '1 cucharadita de aceite de oliva', '2 rodajas de tomate', '1/2 taza de tomate cherry', '1/2 taza de espinaca', '2 cucharadas de cebollín', 'Sal y pimienta al gusto'],
        steps: ['Poner a calentar el aceite y saltear los vegetales por 3min.', 'Agregar los frijoles y retirar', 'En otro sartén colocar los huevos (revueltos previamente) cocinar por 5min a fuego bajo sin mover el omelette.', 'Colocar las rodajas de tomate.', 'Agregar los ingredientes y cerrar.', '', '*se puede agregar queso para derretir si se prefiere.'],
        category: ['desayunos'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_7145.jpg'
    },
    {
        id: 91,
        title: 'BURRITO DE FRIJOLES',
        description: '',
        ingredients: [' 2 tomates', ' 1/2 taza de queso mozzarella', ' 1/2 cebolla', ' 1 Limón', ' 1/2 jalapeño', ' 2 cucharadas de cilantro', ' 1/2 taza de frijoles', ' 3 tortillas de harina'],
        steps: ['Colocar en un bowl tomate, cilantro, frijoles y limón, revólver y agregar sal y pimienta.', 'Colocar en una tortilla de harina el queso y la ensalada preparada anteriormente.', 'Colocar queso mozarrella y cerrar.', 'En un sartén calentar el burrito por 3 minutos cada lado', '', '¡Disfrutar!'],
        category: ['snacks', 'almuerzos y cenas'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_6934.jpg'
    },
    {
        id: 92,
        title: 'ENSALADA DE PEPINO, CEBOLLA Y FRIJOLES BLANCOS ',
        description: '',
        ingredients: ['1 pepino', ' 1 taza de palmito', ' 1 Taza de frijoles', ' 1/2 Cebolla morada', ' 2 Cucharadas de culantro', ' 1/2 aguacate', ' 1 Limón'],
        steps: ['Colocar en un bowl el limón, culantro y aceite de oliva, revolver hasta crear una consistencia homogenea.', ' Agregar el pepino y dejar reposar por 5minutos.', ' Agregar la cebolla picada finamente, el frijol cocido y el palmito picado en cuadritos.', ' Revolver y dejar reposar 15min antes de servir.'],
        category: ['ensaladas', 'snacks'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_0232.jpg'
    },
    {
        id: 93,
        title: 'ENSALADA DE FRIJOLES, ALBAHACA Y TOMATE',
        description: '',
        ingredients: [' 1 taza de frijoles blancos (cocidos)', ' 1 taza de tomates cherry partidos a la mitad.', ' 2 ajos picados finamente', ' Jugo de 1 limón', ' Albahaca picada y tomillo al gusto', ' 2 cucharadas de aceite de oliva', ''],
        steps: ['', 'Colocar en un bowl el frijol.', ' Agregar los tomates y el limón', ' Agregar la albahaca y revolver', ' Agregar el ajo', ' Condimentar con sal y pimienta', 'Esperar 15 minutos antes de servir, para que todos los sabores se combinen.'],
        category: ['ensaladas'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_007.jpg'
    },
    {
        id: 94,
        title: 'TOSTADA DE FRIJOLES BLANCOS  Y ACEITE DE OLIVA ',
        description: '',
        ingredients: ['1 taza de frijoles blancos', '2 cucharaditas de cilantro finamente picado', '2 dientes de ajo', '3 cucharadas de limón', '2 cucharadas de aceite de oliva', 'Sal y pimienta al gusto', ''],
        steps: ['', 'Preparación', 'Combinar en un bowl el cilantro, el ajo, limón y aceite de oliva.', 'Agregar los frijoles blancos, sal y pimienta al gusto. *Servir con chips o sobre una tostada de pan'],
        category: ['snacks'],
        type: '',
        img: '/img/recipes/IMG_009.jpg'
    },
    {
        id: 95,
        title: 'FRIJOLES BLANCOS, TOSTADAS CON BROCOLI',
        description: '',
        ingredients: ['1cabeza de brocoli', '1 taza de frijoles blancos', ' 2 limones, sal, pimienta', ' 1 ajo', ' 1/2 Limón', ' aceite de oliva'],
        steps: ['Pique la cabeza de brócoli en trozos y pásela por agua hirviendo un par de minutos.', 'Escurra.', ' En una bandeja de horno coloque los trozos de brócoli, los frijoles blancos y 1/2 limón partido en rodajas.', ' Bañe todo con el jugo de otro limón y aceite de oliva.', ' Sazone con sal y pimienta.', ' Hornee por 20 minutos con el horno a 350. ¡Delicioso y nutritivo!'],
        category: ['almuerzos y cenas'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_012.jpg'
    },
    {
        id: 96,
        title: 'SANDWICH DE FRIJOLES CON FRIJOLES ',
        description: '',
        ingredients: ['1 Taza de frijoles negros', ' 2 Rodajas de queso', ' 1 Tomate', ' 1 Lechuga', ' 1/2 Pepino', '', 'Aderezo', ' Aceite de oliva', 'Culantro', ' Limón', ' Ajo', ' Sal y pimienta'],
        steps: ['Preparación aderezo', ' Colocar en un recipiente jugo limón, ajo finamente picado y culantro revolver ingredientes.', ' Agregar el aceite de oliva y revolver', '', 'Sándwich', ' Colocar dentro del pan pita la lechuga, tomate en rodajas y pepino.', ' Agregar el frijol y colocar aderezo a su gusto.', ' Sal pigmentar.'],
        category: ['almuerzos y cenas'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_9500.jpg'
    },
    {
        id: 97,
        title: 'CHALUPAS',
        description: '',
        ingredients: ['1 taza de frijol negro molido', '-Lechuga', '-6 tortillas tostadas', '-2 tomates', '-1/2 cebolla', '-2 cucharadas de culantro picado', '-1 limón', '-1 pechuga de pollo cocida', '-1/2 aguacate'],
        steps: ['Picar los tomates, la cebolla y el culantro/cilantro. Colocarlos en un recipiente y agregar Limón y sal. Meter a la refri la preparación . Desmenuzar el pollo cocido y salpimentar.', 'Picar la lechuga y el aguacate', '', 'Servir', ' Colocar frijoles molidos en la tostada', ' Agregar lechuga, encima pollo, la mezcla de tomate, queso y aguacate.'],
        category: ['almuerzos y cenas'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_8048.jpg'
    },
    {
        id: 98,
        title: 'TACOS DE FRIJOLES  ',
        description: '',
        ingredients: ['10 tortillas', '2 tazas de frijoles molidos rojos', '½ taza de queso para derretir', '1 Taza de aceite', '2 Tomates', '½ cebolla', 'Culantro', 'Sal y pimienta'],
        steps: ['Calentar las tortillas (es necesario hacerlo para que no se quiebren las tortillas)', 'Poner frijol y queso, enrollar los tacos y cerrar con palillos.', 'Poner a calentar el aceite.', 'Freír los tacos por 5 min cada lado, pueden ser en freidora de aire (agregar aceite en spray)', 'En un bowl colocar el tomate picado, con la cebolla y culantro con limón. (Salpimentar al gusto)'],
        category: ['almuerzos y cenas'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_8370.jpg'
    },
    {
        id: 99,
        title: 'MINI PIZZAS DE ZUCCHINIS Y FRIJOLES',
        description: '',
        ingredients: ['1 zucchini', '1/2 taza de frijoles rosados', '1 taza de salsa de tomate natural', '6 hojas de albahaca', '1 taza de queso mozarella', '8 tomates cherry', '1 cucharadita de aceite de oliva', 'Sal y pimienta al gusto'],
        steps: ['Partir los zucchinis en Rodas', 'Colocar en un recipiente para hornear.', 'Colocar salsa de tomate natural sobre las rodajas de zucchini.', 'Agregar queso', 'Poner encima frijoles rosados y rodajas de tomate Cherry', 'Sal pigmentar', 'Hornear por 15min a 250', 'Servir con albahaca blanca encima.'],
        category: ['almuerzos y cenas'],
        type: ' Frijoles rosados',
        img: '/img/recipes/IMG_7176.jpg'
    },
    {
        id: 100,
        title: 'WRAP DE LECHUGA Y FRIJOLES BLANCOS ',
        description: '',
        ingredients: ['1 Taza de frijoles blancos', '2 Cucharadas de vinagre', '1/2 Cebolla morada', '1 Diente de ajo', '2 Cucharadas de culantro picado finamente', '4 Hojas de lechuga', '5 tomates cherry', 'Sal y pimienta al gusto.'],
        steps: [' Picar finamente el cilantro, ajo y la cebolla.', ' Partir a la mitad los tomates cherry.', ' Colocar en un bowl los ingredientes anteriores y agregar vinegar, dejar reposar por 15min.', ' Agregar los frijoles y sal pigmentar.', ' Colocar en las hojas de lechuga.'],
        category: ['sopas y cremas'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_7404.jpg'
    },
    {
        id: 101,
        title: 'CAMOTES RELLENOS DE FRIJOLES',
        description: '',
        ingredients: ['1 Camote', ' 2 tomates', ' 1/2 taza de frijoles negros', ' 1 cebolla', ' 1 ajo', ' Culantro', ' Limón', ' 1/2 taza de queso', ' Aceite de oliva', ' Jalapeño', ' Sal y pimienta'],
        steps: ['Hornear el camote por 40min a 450 (antes de meter al horno pinchar el camote con un tenedor)', ' Sacar el camote con cuidado y partir con un cuchillo a la mitad', ' Colocar el queso, agregar tomates y ajo y hornear por 10min a 350', ' Sacar y agregar los frijoles, hornear por 10min más', ' Agregar Culantro y jalapeños'],
        category: ['acompañamientos'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_7620.jpg'
    },
    {
        id: 102,
        title: 'CREMA DE CALABAZA Y FRIJOLES',
        description: '',
        ingredients: [' 3 Tazas de calabaza', '10 espárragos', ' 2 tazas de frijol blanco', ' 1/2 cebolla morada', ' 1 cucharada de culantro/cilantro', ' 1/4 taza de queso para derretir', ' 2 ajos', ' Sal y pimienta'],
        steps: ['Sofreír el ajo', 'Agregar la calabaza y 3 tazas de agua, hervir hasta que esté cocinada, retirar la cáscara y licuar con 2 tazas del agua donde se cocino.', 'Saltear los espárragos con un poco de aceite durante 5min.', 'Poner a hervir durante 5 min y agregar los frijoles cocinados y el culantro, dejar hervir por 20min.', 'Servir con queso y cebolla.', 'Agregar los espárragos.'],
        category: ['sopas y cremas'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_7635.jpg'
    },
    {
        id: 103,
        title: 'TOMATES RELLENOS DE QUESO Y FRIJOLES',
        description: '',
        ingredients: ['2 Tomates', '1/2 taza de frijol negro cocido', '1/2 cebolla morada', '2 dientes de ajo', 'Zanahoria rallada', 'Culantro', '2 Cucharaditas de aceite de oliva', 'Sal y pimienta', '1/4 taza de elotitos'],
        steps: ['Quitar la parte de arriba del tomate y hacer espacio con una cuchara para rellenar el tomate (picar lo que sacamos del tomate)', 'Colocar el queso mozzarella (o el queso para derretir que deseen) y hornear a 150 por 15min, agregar aceite de oliva sal y pimienta encima de los tomates.', 'Agregar en un bowl los frijoles, cebolla, cilantro, ajo, zanahoria rallada y salpimentar.', 'Agregar a la ensalada el tomate que quitamos para hacer el orificio.', 'Dejar reposando la ensalada mientras salen los tomates del horno.', 'Sacar los tomates del horno y rellenarnos con la ensalada.'],
        category: ['acompañamientos'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_7426.jpg'
    },
    {
        id: 104,
        title: 'SANDWICH DE FRIJOLES CON QUESO DERRETIDO',
        description: '',
        ingredients: [' 2 rodajas de pan de masa madre', '4 cucharadas de frijoles negros molidos', '1/4 taza de queso Mozzarela o alguno que derrita, mantequilla para untar al pan.'],
        steps: [' Unte el pan con mantequilla por el lado de afuera.', ' En el otro lado coloque abundantes frijoles molidos y queso.', ' Ponga encima la otra tapa del pan y lleve a una plancha o sartén bien caliente hasta que el pan quede doradito y el queso se derrita.', 'Esta receta es fácil, rápida y otro nivel de deliciosa.', ''],
        category: ['almuerzos y cenas'],
        type: '',
        img: '/img/recipes/IMG_3278.jpg'
    },
    {
        id: 105,
        title: 'CURRY DE FRIJOLES',
        description: '',
        ingredients: ['2 tazas de Frijoles Lima cocidos', '3 cucharadas de curry', '1 cucharada de comino', '1/2 cda de cúrcuma', '1 cda de sal', '1/2 cda de jengibre en polvo', '2 tazas de leche de coco', '3 tomates pelados', '3 dientes de ajo', '4 cdas de aceite', '1/2 cebolla morada', 'arroz blanco y cilantro para servir.'],
        steps: ['En un sartén profundo caliente el aceite, agregue la cebolla y el ajo, agregue las especias, y sofría por 2 minutos a fuego medio.', 'Aparte hierva los tomates, quitele la cascara y licúelos.', 'Agregue el tomate a la mezcla, luego la leche de coco.', 'Hierva por 10 minutos. Agregue los frijoles y mantenga en el fuego 10 minutos más.', 'Sirva con arroz blanco y cilantro.'],
        category: ['snacks', 'postres'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_3297.jpg'
    },
    {
        id: 106,
        title: 'PASTA CON FRIJOLES Y ZUCCHINI',
        description: '',
        ingredients: ['2 tazas de frijoles rosados cocidos-', '2 dientes de ajo', '2 cditas aceite de oliva', '2 cdas de cilantro', '1 taza de zuchinni en cubitos', '2 cdas de parmesano', '350 g de spaghetti'],
        steps: ['Cocine el spaghetti al dente.', 'Aparte, en un sartén caliente el aceite y sofría el ajo hasta que esté dorado, agregue los frijoles y salteelos por 5 minutos, luego agruegue el zuchini.', 'Agregue la pasta y el queso parmesano.', 'Sazone con sal y pimienta y disfrute.'],
        category: ['almuerzos y cenas'],
        type: ' Frijoles rojos',
        img: '/img/recipes/IMG_3317.jpg'
    },
    {
        id: 107,
        title: 'RELLENITOS DE FRIJOLES',
        description: '',
        ingredients: ['2 plátanos maduros', '1 cda de canela', '2cdas de harina', '1/2 de frijoles negros molidos', 'Aceite para freír.', '.'],
        steps: ['Hierva los plátanos maduros, una vez que estén cocinados májelos y revuélvalos con la canela y la harina', 'Deje enfriar. Forme tortitas, rellene con los frijoles molidos y dóblelas como empanaditas.', 'Fría en un sartén con aceite muy caliente hasta que queden doraditas'],
        category: ['snacks'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_3324.jpg'
    },
    {
        id: 108,
        title: 'PAPAS SALTEADAS CON FRIJOL',
        description: '',
        ingredients: [' 2 tazas de frijoles negros cocidos', ' 1 Cucharada de cebollín', ' 5 papas pequeñas cocidas con cascara y partidas a la mitad', ' 3 cucharadas de aceite de oliva', ' 2 ajos picados finamente', ' 1 limón', ' ½ cebolla picada en julianas', ' 3 rodajas de tocino', ' ½ Taza de culantro picado finamente', 'Sal y pimienta al gusto'],
        steps: [' Sofreír la cebolla y el ajo con el aceite de oliva', ' Agregar las papas previamente cocidas y partidas a la mitad, saltear por 7minutos hasta que estén doradas.', ' Partir el tocino fino y sofreír en otro sarten hasta que este dorado, alrededor de 5minutos', ' Colocar en un bowl las papás, agregar, el jugo del limón, el cebollín picado finamente, culantro, sal y pimienta al gusto.', ' Servir como ensalada o acompañamiento de comida.'],
        category: ['acompañamientos'],
        type: ' Frijoles negros',
        img: '/img/recipes/IMG_5952.jpg'
    },
    {
        id: 109,
        title: 'ENSALADA DE FRIJOLES, QUINOA Y QUESO ',
        description: '',
        ingredients: ['1 taza de quinoa cocida', '1 taza de frijoles light red kidney', '½ taza de tomate cherry partidos a la mitad', '2 cucharadas de albahaca picada finamente', 'Queso mozzarella fresco', '2 ajos picados finamente', '2 limones', '4 rodajas de pepinos', 'Sal y pimienta al gusto'],
        steps: ['Revólver, quinoa y frijoles.', ' Agregar tomate cherry, albahaca, ajo y revólver.', ' Agregar pepino y Limón.', ' Revólver y dejar reposar por 15min.', ' Servir con queso mozarrella fresca.', ' Sal Pimentar al gusto'],
        category: ['ensaladas'],
        type: '  Frijoles Kidney',
        img: '/img/recipes/IMG_5962.jpg'
    },
    {
        id: 110,
        title: 'SOPA DE FRIJOLES Y CURRY',
        description: '',
        ingredients: ['1 Ajo', '½ Cebolla', '1 Cucharadita de Curry', '1 Cucharadita de Jengibre', '3 Cucharadas de Aceite de oliva', '3 Tomates Cocidos', '½ taza de culantro Culantro', '2 Tazas de leche de Coco', '1 TazaSpaguettis de arroz', '1 Cucharada de Chilli Flakes', '2 Tazas de frijoles blancos'],
        steps: ['Saltear ajo, cebolla con el aceite de oliva.', 'Agregar curry y jengibre en polvo y sofreír por 1minuto.', 'Agregar los 3 tomates cocidos y licuados, sofreír por 3 minutos', 'Agregar la leche de coco y una taza de agua dejar hervir por 15 minutos', 'Agregar los frijoles y hervir por 3minutos', 'Salpimentar', '', '*Servir en un bowl con los spaguettis de arroz (previamente hidratados).', '*Agregar culantro y flakes de chilli.'],
        category: ['sopas y cremas'],
        type: 'Frijoles blancos',
        img: '/img/recipes/IMG_6002.jpg'
    }
];

/* const recipes = [
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
        type: '',
        img: '/img/recipes/IMG_4249.jpg'
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
        img: '/img/recipes/IMG_4268.jpg'
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
        img: '/img/recipes/IMG_4289.jpg'
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
        img: '/img/recipes/IMG_4304.jpg'
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
        img: '/img/recipes/IMG_1547-2.jpg'
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
        category: ['sopas y cremas', 'Almuerzos y cenas'],
        img: '/img/recipes/IMG_6359.jpg'
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
        img: '/img/recipes/IMG_1584.jpg' 
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
        img: '/img/recipes/IMG_1579.jpg' ,
    }
]; */



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



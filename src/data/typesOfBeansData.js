export const tiposDeFrijoles = [
    
    {
        id: 1,
        title: 'Red kidney',
        img: '/img/tipos/RedKidney.jpg',
    },

    {
        id: 2,
        title: 'Pink beans',
        img: '/img/tipos/PinkBeans.jpg',
    },

    {
        id: 3,
        title: 'Navy beans',
        img: '/img/tipos/NavyBeans.jpg',
    },

    {
        id: 4,
        title: 'Greath northern',
        img: '/img/tipos/Greath Northern.jpg',
    },
    {
        id: 5,
        title: 'Light red Kidney',
        img: '/img/tipos/LightRedKidney.jpg',
    },
    {
        id: 6,
        title: 'Mayacoba',
        img: '/img/tipos/Mayacoba.jpg',
    },

    {
        id: 7,
        title: 'Pinto beans',
        img: '/img/tipos/PintoBeans.jpg',
    },

    {
        id: 8,
        title: 'Small red',
        img: '/img/tipos/SmallRed.jpg',
    },

    {
        id: 9,
        title: 'White kidney',
        img: '/img/tipos/White Kidney.jpg',
    },
   
    {
        id: 10,
        title: 'Black beans',
        img: '/img/tipos/BlackBeans.jpg',
    },
    {
        id: 11,
        title: 'Black eyed beans',
        img: '/img/tipos/BlackEyedBeans.jpg',
    },
    {
        id: 12,
        title: 'Cranberry beans',
        img: '/img/tipos/CranberryBeans.jpg',
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

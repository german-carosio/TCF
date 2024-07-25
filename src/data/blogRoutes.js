// src/data/blogRoutes.js
import BlogPost1 from '../components/Blog/BlogPost1';

const blogRoutes = [
  {
    path: '/blog/1',
    component: BlogPost1,
    title: 'Título de la entrada 1',
    date: '2024-07-01',
    image: 'img/blog/img1.png',
    summary: 'Los frijoles son una excelente fuente de proteína vegetal, contienen el doble (o más) proteína que otros granos.  Por ejemplo, 100 calorías de frijoles contienen 7 gramos de proteína, que es parecido a comer 1 huevo o 1 taza de leche.  Cien calorías de arroz o tortillas de maíz contienen apenas dos gramos de proteína..'
  },
  
  // Agrega más entradas según sea necesario
];

export default blogRoutes;


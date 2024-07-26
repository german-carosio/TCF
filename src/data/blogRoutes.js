// src/data/blogRoutes.js
import BlogPost1 from '../components/Blog/BlogPost1';

const blogRoutes = [
  {
    path: '/blog/1',
    component: BlogPost1,
    title: 'Frijoles & proteína',
    date: '2 de octubre 2023',
    image: 'img/blog/img1.png',
    summary: 'Los frijoles son una excelente fuente de proteína vegetal, contienen el doble (o más) proteína que otros granos.  Por ejemplo, 100 calorías de frijoles contienen 7 gramos de proteína, que es parecido a comer 1 huevo o 1 taza de leche.  Cien calorías de arroz o tortillas de maíz contienen apenas dos gramos de proteína..'
  },
  
  // Agrega más entradas según sea necesario
];

export default blogRoutes;


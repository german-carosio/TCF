
import Margin from '../Margin/Margin';
import { Helmet } from 'react-helmet-async';
import Boton2 from '../Boton2/Boton2';
import { useNavigate } from 'react-router-dom';
import styles from './BlogPost1.module.css';

const BlogPost1 = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Frijoles & proteina - Todo con frijol</title>
        <meta name="description" content="Descripción de la entrada 1." />
        <meta name="keywords" content="blog, entrada 1, todo con frijol" />
      </Helmet>
      <Margin>
        <div className={styles.cabecera}>
          <h1>Blog | Sigue las noticias de Todo con frijol</h1>
        </div>

        <section className={styles.container}>
          <div className={styles.entrada}>
            <div className={styles.txt}>
              <p>2 de octubre 2023</p>
              <h2>Frijoles & proteina</h2>
            </div>

            <div className={styles.entradaImage}>
              <img src="/img/blog/img1.png" alt="" />
            </div>

            <div className={styles.contenido}>
              <p>Los frijoles son una excelente fuente de proteína vegetal, contienen el doble (o más) proteína que otros granos.  Por ejemplo, 100 calorías de frijoles contienen 7 gramos de proteína, que es parecido a comer 1 huevo o 1 taza de leche.  Cien calorías de arroz o tortillas de maíz contienen apenas dos gramos de proteína. <br /><br />
                ¿Sabías que el arroz y los frijoles combinados son una fuente completa de proteína? Y ¿qué significa esto exactamente? Las proteínas vegetales contienen todos los aminoácidos, que son los componentes de las proteínas. Pero, contienen cantidades relativamente bajas de algunos de ellos. Los frijoles son altos en aminoácidos de los que el arroz solo tiene pocos, y viceversa. Entonces, los frijoles y el arroz – u otros granos –  ¡son complementarios! Para proveer la cantidad correcta de todos los aminoácidos no es necesario comerlos en el mismo plato, solo tener una dieta balanceada durante el día y la semana. <br /> <br />
                Un beneficio de los frijoles es que – a diferencia de las proteínas animales – también son ricos en fibra.  Ser ricos tanto en fibra como en proteína ayuda a mejorar tu saciedad. <br /> <br />
                En estos días les vamos a compartir una receta alta en proteína, acá les compartiremos la información nutricional de la receta.</p> <br />

              <h2>Smoothie de proteína </h2> <br />

              <p>Los frijoles son una excelente fuente de proteína para agregar a tu batido. Además de agregar proteína, le añade una textura cremosa.   Una ventaja de este batido, es que al ser los frijoles un ingrediente alto en proteína y fibra, ayuda muchísimo a la saciedad....</p>
            </div>
            <Boton2
              title="Volver"
              url="#"
              onClick={() => navigate(-1)}
              textColor="#4C772D"
              borderColor="#4C772D"
            />
          </div>

        </section>

      </Margin>
    </>
  );
};

export default BlogPost1;



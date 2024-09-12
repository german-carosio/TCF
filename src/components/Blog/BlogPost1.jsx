
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
      <title>Emprendimiento Frijol 2024 - Concurso y Premios | Todo con Frijol</title>
        <meta name="description" content="Participa en la quinta edición del concurso Emprendimiento Frijol. Descubre cómo puedes ganar premios que potenciarán tu negocio en 2024. Conoce los requisitos y la fecha límite para participar." />
        <meta name="keywords" content="concurso frijol, emprendimiento frijol 2024, premios emprendedores, concurso de negocios, Todo con Frijol" />
      </Helmet>
      <Margin>
        <div className={styles.cabecera}>
          <h1>Blog | Sigue las noticias de Todo con frijol</h1>
        </div>

        <article className={styles.container}>
          <div className={styles.entrada}>
            <div className={styles.txt}>
              <p className={styles.cardDate}>11 de septiembre 2024</p>
              <h2>Emprendimiento Frijol - 2024</h2>
            </div>

            <div className={styles.entradaImage}>
              <img src="/img/blog/blog1/EMPRENDIMIENTO FRIJOL-34.jpg" alt="emprendimiento frijol" />
            </div>

            <div className={styles.contenido}>
            <p className={styles.atencion}>¡Atención emprendedores!</p>
              <p>Este año lanzamos la quinta edición de nuestro concurso <strong>Emprendimiento Frijol</strong>. Nos emociona ver la creatividad de los concursantes en torno a este súper alimento que tanto amamos por su versatilidad y sabor.</p>
              <p>Los ganadores de las últimas cuatro ediciones han sido de Guatemala, Costa Rica y El Salvador.</p>
              <p>Creamos <strong>Emprendimiento Frijol</strong> con la visión de impulsar a emprendedores que trabajan con frijoles. En 2020 lanzamos la primera edición de nuestro concurso, donde Johanna, con su proyecto <strong>FRAN Artesanal</strong>, fue la ganadora. Fuimos testigos de primera mano de cómo su negocio creció gracias al concurso y al premio, y eso mismo queremos hacer por su emprendimiento.</p>
              <p>En 2020 lanzamos la primera edición de nuestro concurso, donde Johanna, con su proyecto FRAN Artesanal, fue la ganadora. Fuimos testigos de primera mano de cómo su negocio creció gracias al concurso y al premio, y eso mismo queremos hacer por su emprendimiento.</p>
              
              <img src="/img/blog/blog1/EMPRENDIMIENTO FRIJOL-35.jpg" alt="emprendimiento frijol" /> <br /> <br />
              
              <h3>¿Quiénes pueden participar?</h3>
              <p>Emprendedores que vendan un producto que contenga frijoles, incluyendo restaurantes con platillos que utilicen frijoles como ingrediente principal.</p>

              <h3>Requisitos para participar:</h3>
              <ul>
                <li>Envíanos toda la información de tu producto o servicio con frijoles, incluyendo una descripción y fotografía.</li>
                <li>Ventaja competitiva de tu producto.</li>
                <li>Una breve explicación de por qué usas frijoles y qué te llevó a utilizarlos en tu producto o platillo.</li>
                <li>* Si tu negocio es un restaurante, puedes incluir un platillo de tu menú donde los frijoles sean protagonistas.</li>
              </ul>

              <p>No olvides incluir tu información personal:</p>
              <ul>
                <li>Nombre Completo</li>
                <li>País de residencia</li>
                <li>Usuario de redes sociales (del negocio)</li>
                <li>Correo de contacto</li>
              </ul>

              <p>Envíanos la información al correo: <strong>concursotodoconfrijol@gmail.com</strong></p>

              <p>Un solo ganador recibirá un premio que le hará ganar herramientas que potencien su negocio: </p>


              <h3>Premio:</h3>
              <ul>
                <li><i className="fas fa-camera"></i> <strong>1 sesión de fotos y video</strong></li>
                <li><i className="fas fa-bullhorn"></i> <strong>1 gira de relaciones públicas</strong>, para que los principales medios de comunicación de tu país den visibilidad al negocio ganador del concurso</li>
                <li><i className="fas fa-chart-line"></i> <strong>1 asesoría de estrategia de negocios</strong></li>
                <li><i className="fas fa-share-alt"></i> <strong>1 asesoría de manejo de redes sociales</strong></li>
              </ul>

              <p><strong>Países participantes:</strong> Costa Rica, Guatemala, El Salvador, Honduras, República Dominicana y Panamá.</p>
              <p>Recibiremos propuestas hasta el <strong>30 de septiembre de 2024</strong> y el ganador se anunciará la primera semana de octubre. <br /> Aplican restricciones.</p>


                <img src="/img/blog/blog1/EMPRENDIMIENTO FRIJOL-36.jpg" alt="emprendimiento frijol" />
            </div>
            <Boton2
                        title="Volver"
                        url="#"
                        onClick={() => navigate(-1)}
                        textColor="#4C772D"
                        borderColor="#4C772D"
                        hoverColor="var(--verde)"
                    />
          </div>

        </article>

      </Margin>
    </>
  );
};

export default BlogPost1;



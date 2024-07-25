
import Margin from '../Margin/Margin';
import { Helmet } from 'react-helmet-async';
import Boton2 from '../Boton2/Boton2';
import { useNavigate } from 'react-router-dom';

const BlogPost1 = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Entrada 1 - Todo con frijol</title>
        <meta name="description" content="Descripción de la entrada 1." />
        <meta name="keywords" content="blog, entrada 1, todo con frijol" />
      </Helmet>
      <Margin>
      <img src="/img/blog/img1.png" alt="" />
      <h1>Entrada 1</h1>
      <p>Contenido de la entrada 1...</p>
      {/* Formato y contenido específicos de esta entrada */}
      <Boton2 
                        title="Volver"
                        url="#"
                        onClick={() => navigate(-1)}
                        textColor="#4C772D"
                        borderColor="#4C772D"
                    />
                    
    </Margin>
    </>
  );
};

export default BlogPost1;



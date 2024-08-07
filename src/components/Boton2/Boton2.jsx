import React from 'react';
import styles from './Boton2.module.css';
import { Link } from 'react-router-dom';
import { useNavContext } from '../../context/NavContext';

const Boton2 = ({ title, url, onClick, textColor , borderColor, hoverColor }) => {
    const { handleNavLinkClick } = useNavContext();

    const handleClick = (e) => {
        if (onClick) {
            e.preventDefault();
            onClick();
            // Asegúrate de hacer scroll hacia arriba después de navegar hacia atrás
            window.scrollTo(0, 0);
        }
        handleNavLinkClick(url);
    };

    return (
        <Link to={url} onClick={handleClick}>
             <button
                className={styles.btn}
                style={{ color: textColor, borderColor: borderColor }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = hoverColor;
                    e.target.style.color = "#fff";
                    e.target.style.borderColor = hoverColor;
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = textColor;
                    e.target.style.borderColor = borderColor;
                }}
            >
                   {title}
                   </button>
        </Link>
    );
};

export default Boton2;



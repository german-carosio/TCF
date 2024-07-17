import React from 'react';
import styles from './Boton2.module.css';
import { Link } from 'react-router-dom';
import { useNavContext } from '../../context/NavContext';

const Boton2 = ({ title, url, onClick, textColor = '#000', borderColor = '#000' }) => {
    const { handleNavLinkClick } = useNavContext();

    const handleClick = (e) => {
        if (onClick) {
            e.preventDefault();
            onClick();
        }
        handleNavLinkClick(url);
    };

    return (
        <Link to={url} onClick={handleClick}>
            <button className={styles.btn} style={{ color: textColor, borderColor: borderColor }}>
                {title}
            </button>
        </Link>
    );
};

export default Boton2;


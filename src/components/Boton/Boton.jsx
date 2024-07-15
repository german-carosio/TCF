import React from 'react';
import styles from './Boton.module.css';
import { Link } from 'react-router-dom';
import { useNavContext } from '../../context/NavContext';

const Boton = ({ title, url }) => {
    const { handleNavLinkClick } = useNavContext();

    const handleClick = () => {
        handleNavLinkClick(url);
    };

    return (
        <Link to={url} className={styles.button} onClick={handleClick}>
            <button className={styles.btn}>{title}</button>
        </Link>
    );
};

export default Boton;

import React from 'react';
import styles from './Boton2.module.css';
import { Link } from 'react-router-dom';
import { useNavContext } from '../../context/NavContext';

const Boton2 = ({ title, url }) => {
    const { handleNavLinkClick } = useNavContext();

    const handleClick = () => {
        handleNavLinkClick(url);
    };

    return (
        <Link to={url}  onClick={handleClick}>
            <button className={styles.btn}>{title}</button>
        </Link>
    );
};

export default Boton2;

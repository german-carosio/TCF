import React from 'react';
import styles from './Footer.module.css'; // Importa el archivo CSS modular

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src="/img/web/us dry bean.svg" alt="us dry bean" />
            <div className={styles.socialIcons}>
                <a href="https://www.instagram.com/todoconfrijol" target="_blank" className={styles.icon}><i className="fab fa-instagram"></i></a>
                <a href="https://ar.pinterest.com/todoconfrijol" target="_blank" className={styles.icon}><i className="fab fa-pinterest"></i></a>
                <a href="https://www.facebook.com/todoconfrijol" target="_blank" className={styles.icon}><i className="fab fa-facebook"></i></a>
            </div>
        </footer>
    );
}

export default Footer;



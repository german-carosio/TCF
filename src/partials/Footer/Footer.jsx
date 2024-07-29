import React from 'react';
import styles from './Footer.module.css'; // Importa el archivo CSS modular

const Footer = () => {
    return (
        <footer className={styles.container}>
            <section className={styles.container2}>
                <img src="/img/web/us dry bean.svg" alt="us dry bean" />
                <div className={styles.txt}>
                    <p>Todo con frijol www.todoconfrijol.com <br />
                        Copyright © 2024 Todo con frijol US Dry Bean Council</p>
                </div>
                <div className={styles.socialIcons}>
                    <p>¡Contáctanos!</p>
                    <div>
                        <div className={styles.iconContainer}>
                            <a href="https://www.instagram.com/todoconfrijol" target="_blank" className={styles.icon}><i className="fab fa-instagram"></i></a>
                        </div>

                        <div className={styles.iconContainer}>
                            <a href="https://www.facebook.com/todoconfrijol" target="_blank" className={styles.icon}><i className="fab fa-facebook"></i></a>
                        </div>

                        <div className={styles.iconContainer}>
                            <a href="https://ar.pinterest.com/todoconfrijol" target="_blank" className={styles.icon}><i className="fab fa-pinterest"></i></a>
                        </div>
                    </div>

                </div>
            </section>

        </footer>
    );
}

export default Footer;



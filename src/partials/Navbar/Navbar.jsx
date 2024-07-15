import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useNavContext } from '../../context/NavContext'; // Importa el contexto

const Navbar = () => {
    const { activeLink, handleNavLinkClick, isOpen, setIsOpen } = useNavContext(); // Utiliza el contexto

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to="/" onClick={() => handleNavLinkClick('/')}>
                    <img className={styles.logo} src='/img/web/Logo.svg' alt="Logo Todo con frijol" />
                </Link>

                <div className={styles.btnMenu}>
                    {!isOpen ? (
                        <button aria-label="Open menu" className={styles.openMenu} onClick={toggleMenu}>
                            <i className="fas fa-bars"></i>
                        </button>
                    ) : (
                        <button aria-label="Close menu" className={`${styles.closeMenu} ${styles.show}`} onClick={closeMenu}>
                            <i className="fas fa-times"></i>
                        </button>
                    )}
                </div>

                <ul className={`${styles.menu} ${isOpen ? styles.menuVisible : ''}`}>
                    <li className={`${styles.menuItem} ${activeLink === '/recipes' ? styles.activeMenuItem : ''}`}>
                        <Link to="/recipes" className={styles.menuLink} onClick={() => handleNavLinkClick('/recipes')}>
                            Recetas
                        </Link>
                    </li>
                    <li className={`${styles.menuItem} ${activeLink === '/tipos' ? styles.activeMenuItem : ''}`}>
                        <Link to="/tipos" className={styles.menuLink} onClick={() => handleNavLinkClick('/tipos')}>
                            Tipos
                        </Link>
                    </li>
                    <li className={`${styles.menuItem} ${activeLink === '/benefits' ? styles.activeMenuItem : ''}`}>
                        <Link to="/benefits" className={styles.menuLink} onClick={() => handleNavLinkClick('/benefits')}>
                            Beneficios
                        </Link>
                    </li>
                    <li className={`${styles.menuItem} ${activeLink === '/about-us' ? styles.activeMenuItem : ''}`}>
                        <Link to="/about-us" className={styles.menuLink} onClick={() => handleNavLinkClick('/about-us')}>
                            Nosotros
                        </Link>
                    </li>
                    <li className={`${styles.menuItem} ${activeLink === '/blog' ? styles.activeMenuItem : ''}`}>
                        <Link to="/blog" className={styles.menuLink} onClick={() => handleNavLinkClick('/blog')}>
                            Blog
                        </Link>
                    </li>
                    <li className={`${styles.menuItem} ${activeLink === '/contact' ? styles.activeMenuItem : ''}`}>
                        <Link to="/contact" className={styles.menuLink} onClick={() => handleNavLinkClick('/contact')}>
                            Contacto
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;










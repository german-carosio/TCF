import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    // Estado para controlar si el menú principal está abierto o cerrado
    const [isOpen, setIsOpen] = useState(false);

    // Estado para controlar si el submenú está abierto o cerrado
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    // Función para alternar la apertura y cierre del menú principal
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        
        // Si el submenú está abierto, ciérralo al abrir el menú principal
        if (isSubMenuOpen) {
            setIsSubMenuOpen(false);
        }
    };

    // Función para cerrar el menú principal
    const closeMenu = () => {
        setIsOpen(false);
        
        // Si el submenú está abierto, ciérralo al cerrar el menú principal
        if (isSubMenuOpen) {
            setIsSubMenuOpen(false);
        }
    };

    // Función para alternar la apertura y cierre del submenú
    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    // Función para cerrar el submenú
    const closeSubMenu = () => {
        setIsSubMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            {/* Contenedor del menú */}
            <nav className={styles.nav}>
                {/* Enlace del logotipo */}
                <Link to="/"><img className={styles.logo} src='/img/web/Logo.svg' alt="" /></Link>

                {/* Botón de menú para dispositivos móviles */}
                <div className={styles.btnMenu}>
                    {/* Botón para abrir o cerrar el menú */}
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

                {/* Lista de elementos de menú */}
                <ul className={`${styles.menu} ${isOpen ? styles.menuVisible : ''}`}>
                    {/* Elementos de menú */}
                    <li className={styles.menuItem}><Link to="/recipes" className={styles.menuLink} onClick={closeMenu}>Recetas</Link></li>
                    <li className={styles.menuItem}><Link to="/about" className={styles.menuLink} onClick={closeMenu}>Tipos</Link></li>
                    <li className={styles.menuItem}><Link to="/about" className={styles.menuLink} onClick={closeMenu}>Beneficios</Link></li>
                    <li className={styles.menuItem}><Link to="/about" className={styles.menuLink} onClick={closeMenu}>Nosotros</Link></li>
                    <li className={styles.menuItem}><Link to="/about" className={styles.menuLink} onClick={closeMenu}>Blog</Link></li>
                    <li className={styles.menuItem}><Link to="/contact" className={styles.menuLink} onClick={closeMenu}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;








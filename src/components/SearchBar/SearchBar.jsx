import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch, filterRef }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isFixed, setIsFixed] = useState(false);
    const [dimensions, setDimensions] = useState({ width: '100%', height: 'auto' });
    const navigate = useNavigate();
   

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        if (searchTerm) {
            onSearch(searchTerm);
            navigate(`/recipes?search=${searchTerm}`);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const filterTop = filterRef.current?.offsetTop || 0;
            if (window.scrollY > filterTop) {
                setIsFixed(true);
                const { width, height } = filterRef.current.getBoundingClientRect();
                setDimensions({ width: `${width}px`, height: `${height}px` });
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [filterRef]);

    useEffect(() => {
        window.scrollTo(0, 0); // Desplazarse al inicio de la página al montar el componente
    }, []);

    return (
        <div
            className={`${styles.search} ${isFixed ? styles.fixed : ''}`}
            ref={filterRef}
            style={isFixed ? { width: dimensions.width, height: dimensions.height } : {}}
        >
            <div className={styles.inputContainer}>
                <i className={`fas fa-search ${styles['search-icon']}`}></i>
                <input
                    type="text"
                    placeholder="Busca recetas por comida, tipo de frijol, ingrediente..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    
                />
            </div>
        </div>
    );
};

export default SearchBar;












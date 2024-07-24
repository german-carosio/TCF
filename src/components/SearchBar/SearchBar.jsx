import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch, filterRef }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isFixed, setIsFixed] = useState(false);
    const [dimensions, setDimensions] = useState({ width: '100%', height: 'auto' });
    const navigate = useNavigate();
    const inputRef = useRef(null);

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
        inputRef.current.focus();
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
                    ref={inputRef}
                />
            </div>
        </div>
    );
};

export default SearchBar;












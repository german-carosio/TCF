import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className={styles.search}>
            <input
                type="text"
                placeholder="Buscar recetas por nombre, tipo de frijol o momento del día"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
           {/*  <button onClick={handleSearch}>Buscar</button> */}
        </div>
    );
};

export default SearchBar;








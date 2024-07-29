import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipesContext } from '../../context/RecipesContext';
import styles from './FilterContainer.module.css';

const FilterContainer = ({ selectedCategory, setSelectedCategory, searchTerm }) => {
    const { categories } = useRecipesContext();
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(categoryName);
        if (categoryName === '') {
            navigate('/recipes');
        } else {
            const category = categories.find(category => category.name === categoryName);
            navigate(`/recipes/category/${category.url}`);
        }
        setIsDropdownOpen(false); // Cierra el desplegable al hacer clic en una categoría
    };

    const displayedCategories = categories.slice(0, 4);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={styles.filterContainer}>
            <div className={styles.dropdownToggle} onClick={toggleDropdown}>
                Categorías
                <i className={`fas ${isDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
            </div>
            <div className={`${styles.filter} ${isDropdownOpen ? styles.show : ''}`}>
                <button
                    className={`${styles.categoryButton} ${selectedCategory === '' && !searchTerm ? styles.active : ''}`}
                    onClick={() => handleCategoryClick('')}
                >
                    Todas
                </button>
                {displayedCategories.map((category) => (
                    <button
                        key={category.id}
                        className={`${styles.categoryButton} ${selectedCategory === category.name && !searchTerm ? styles.active : ''}`}
                        onClick={() => handleCategoryClick(category.name)}
                    >
                        {category.displayName}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FilterContainer;









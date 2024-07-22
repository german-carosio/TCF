// CategoryFilter.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipeContext } from '../../context/RecipeContext';
import styles from './CategoryFilter.module.css';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
    const { categories } = useContext(RecipeContext);
    const navigate = useNavigate();

    const handleCategoryChange = (category) => {
        onCategoryChange(category);
        navigate(`/recipes/${category}`);
    };

    return (
        <div className={styles.filter}>
            <button
                className={`${styles.categoryButton} ${selectedCategory === '' ? styles.active : ''}`}
                onClick={() => handleCategoryChange('')}
            >
                Todas
            </button>
            {categories.map((category, index) => (
                <button
                    key={index}
                    className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
                    onClick={() => handleCategoryChange(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;

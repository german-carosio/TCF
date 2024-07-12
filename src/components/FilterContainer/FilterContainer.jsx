import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipesContext } from '../../context/RecipesContext';
import styles from './FilterContainer.module.css';

const FilterContainer = ({ selectedCategory, setSelectedCategory, isDetailPage = false, searchTerm }) => {
    const { categories } = useRecipesContext();
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(categoryName);
        if (categoryName === '') {
            navigate('/recipes');
        } else {
            const category = categories.find(category => category.name === categoryName);
            navigate(`/recipes/category/${category.url}`);
        }
    };

    return (
        <>
            <h1 className={styles.title}>Incorpora los frijoles de maneras originales y deliciosas</h1>
            <div className={styles.filter}>
                <button
                    className={`${styles.categoryButton} ${!isDetailPage && selectedCategory === '' && !searchTerm ? styles.active : ''}`}
                    onClick={() => handleCategoryClick('')}
                >
                    Todas
                </button>
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={`${styles.categoryButton} ${!isDetailPage && selectedCategory === category.name && !searchTerm ? styles.active : ''}`}
                        onClick={() => handleCategoryClick(category.name)}
                    >
                        {category.displayName}
                    </button>
                ))}
            </div>
        </>
    );
};

export default FilterContainer;





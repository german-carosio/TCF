import React from 'react';
import Card from '../Card/Card';
import styles from './List.module.css';

const List = ({ data, url }) => {


    return (
        <div className={styles.recipeList}>
            <div className={styles.recipesGrid}>
                {data.map(item => (
                    <Card key={item.id} data={item} detailUrl={url} />
                ))}
            </div>
        </div>
    );
};

export default List;















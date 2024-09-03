import React, { useEffect, useState } from 'react';
import CardType from '../CardType/CardType';
import styles from './ListType.module.css';

const List = ({ data, url }) => {
    // Invertimos los datos una vez al inicio
    const reversedData = [...data].reverse();

    return (
        <div className={styles.recipeList}>
            <div className={styles.recipesGrid}>
                {reversedData.map(item => (
                    <CardType key={item.id} data={item} detailUrl={url} />
                ))}
            </div>
        </div>
    );
};

export default List;























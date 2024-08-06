import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../Card/Card';
import styles from './List.module.css';

const List = ({ data, url }) => {
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [allItems, setAllItems] = useState([]);

    useEffect(() => {
        // Invertimos los datos una vez al inicio
        const reversedData = [...data].reverse();
        setAllItems(reversedData);
        setItems(reversedData.slice(0, 20));
    }, [data]);

    const fetchMoreData = () => {
        if (items.length >= allItems.length) {
            setHasMore(false);
            return;
        }
        setTimeout(() => {
            setItems(prevItems => [
                ...prevItems,
                ...allItems.slice(prevItems.length, prevItems.length + 20)
            ]);
        }, 1000);
    };

    return (
        <div className={styles.recipeList}>
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={<p>... ...</p>}
            >
                <div className={styles.recipesGrid}>
                    {items.map(item => (
                        <Card key={item.id} data={item} detailUrl={url} />
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default List;























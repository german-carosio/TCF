// Container.jsx
import React from 'react';
import styles from "./Margin.module.css";

const Margin = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default Margin;

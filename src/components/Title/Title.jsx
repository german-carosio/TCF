import React from 'react'
import styles from "./Title.module.css";

const Title = ({txt}) => {
  return (
    <>
      <h1 className={styles.title}>{txt}</h1>
    </>
  )
}

export default Title

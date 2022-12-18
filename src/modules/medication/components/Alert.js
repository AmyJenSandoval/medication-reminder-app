import React from "react";
import styles from "../styles/Alert.module.css";

export const Alert = () => {
  return (
    <div className={styles.container}>
      <h1>Mediminder:</h1>
      <p className={styles.body}>Take your 6:00AM med and mark as taken </p>
    </div>
  );
};

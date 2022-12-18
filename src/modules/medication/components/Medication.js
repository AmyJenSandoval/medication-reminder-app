import React from "react";
import styles from "../styles/Medication.module.css";

export const Medication = () => {
  return (
    <div className={styles.container}>
      <h1>Medication</h1>
      <form className={styles.searchForm}>
        <input
          className={styles.search}
          placeholder="Search by medication"
          type="text"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

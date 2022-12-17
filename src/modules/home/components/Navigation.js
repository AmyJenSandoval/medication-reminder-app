import React from "react";
import styles from "../styles/Navigation.module.css";
import { Link } from "react-router-dom";
import { homePath } from "../routes/HomeRoute";

export const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <header>Mediminder: Medication Reminder App</header>
      </div>
      <div className={styles.nav}>
        <nav>
          <Link to={homePath}>Home</Link>
        </nav>
      </div>
    </div>
  );
};

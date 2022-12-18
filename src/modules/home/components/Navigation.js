import React from "react";
import styles from "../styles/Navigation.module.css";
import { Link } from "react-router-dom";
import { homePath } from "../routes/HomeRoute";
import { loginPath } from "../../login/routes/LoginRoute";
import { registerPath } from "../../register/routes/RegisterRoute";
import { medicationPath } from "../../medication/routes/MedicationRoute";

export const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <header>Mediminder: Medication Reminder App</header>
      </div>
      <div className={styles.nav}>
        <nav>
          <Link to={homePath}>Home</Link>
          <Link to={loginPath}>Login</Link>
          <Link to={registerPath}>Register</Link>
          <Link to={medicationPath}>My Medications</Link>
        </nav>
      </div>
    </div>
  );
};

import React from "react";
import { MedicationCard } from "../../medication/components/MedicationCard";
import styles from "../styles/Home.module.css";

export const Home = () => {
  return (
    <div className={styles.container}>
      <header>
        <h1>Today</h1>
      </header>
      <div>
        <MedicationCard />
      </div>
    </div>
  );
};

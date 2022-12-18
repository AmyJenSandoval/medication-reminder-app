import React from "react";
import styles from "../styles/Register.module.css";
import { Link } from "react-router-dom";
import { loginPath } from "../../login/routes/LoginRoute";

export const Register = () => {
  return (
    <div className={styles.container}>
      <img
        src="./images/kateryna-hliznitsova-Nqj2XWHy4K0-unsplash.jpg"
        alt="cupped hands holding two red gel pills"
        className={styles.img}
      />

      <div className={styles.heading}>
        <h1>
          <span>WELCOME TO</span>
          <br></br>
          Mediminder
        </h1>
      </div>

      <form className={styles.form}>
        <input
          name="firstName"
          className={styles.input}
          type="text"
          placeholder="First name"
          required
        />

        <input
          name="lastName"
          className={styles.input}
          type="text"
          placeholder="Last name"
          required
        />

        <input
          name="email"
          className={styles.input}
          type="text"
          placeholder="Email"
          required
        />

        <input
          name="password"
          className={styles.input}
          type="password"
          placeholder="Password"
          required
        />

        <button className={styles.registerButton} type="submit">
          Register
        </button>
      </form>

      <Link to={loginPath} className={styles.returnToLoginButton}>
        Already have an account?
      </Link>
    </div>
  );
};

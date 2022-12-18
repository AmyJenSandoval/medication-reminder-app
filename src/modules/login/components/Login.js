import React from "react";
import styles from "../styles/Login.module.css";

export const Login = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to Mediminder</h1>
      <form>
        <input
          aria-label="email"
          name="email"
          className={styles.input}
          type="text"
          placeholder="Email"
          required
        />

        <input
          aria-label="password"
          name="password"
          className={styles.input}
          type="password"
          placeholder="Password"
          required
        />
        <button className={styles.forgotPasswordButton}>
          Forgot password?
        </button>

        <button className={styles.signUpButton} type="submit">
          Sign Up
        </button>

        <button className={styles.logInButton}>Log In</button>
      </form>
    </div>
  );
};

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => (
  <ul className={styles.items}>
    <li className={styles.item}>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.active}
      >
        Home
      </NavLink>
    </li>
    <li className={styles.item}>
      <NavLink
        to="/movies"
        className={styles.link}
        activeClassName={styles.active}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Nav;

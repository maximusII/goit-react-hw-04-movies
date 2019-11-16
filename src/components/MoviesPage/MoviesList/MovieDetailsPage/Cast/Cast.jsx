import React from "react";
import styles from "./Cast.module.css";

const Cast = ({ cast }) => {
  return (
    <ul className={styles.page}>
      {cast.map(char => (
        <li key={char.id} className={styles.char}>
          <img
            src={"https://image.tmdb.org/t/p/w500" + char.profile_path}
            alt={char.name}
          />
          <p>{char.name}</p>
          <p>Character: {char.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;

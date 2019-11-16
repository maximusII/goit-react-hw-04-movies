import React from "react";
import styles from "./Reviews.module.css";

const Reviews = ({ review }) => {
  return (
    <ul className={styles.page}>
      {review.map(el => (
        <li key={el.id} className={styles.char}>
          {/* <img
            src={"https://image.tmdb.org/t/p/w500" + char.profile_path}
            alt={char.name}
            // align="left"
          /> */}
          <p>Author: {el.author}</p>
          <p>{el.content}</p>
        </li>
      ))}
    </ul>
  );
  // return <h1>Hello</h1>;
};

export default Reviews;

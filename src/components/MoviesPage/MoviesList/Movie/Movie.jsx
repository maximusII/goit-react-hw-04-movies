import React from "react";
import styles from "./Movie.module.css";

const Movie = ({
  overview,
  genres,
  name,
  title,
  poster_path,
  release_date,
  vote_average
}) => {
  return (
    <article className={styles.page}>
      <img
        src={"https://image.tmdb.org/t/p/w500" + poster_path}
        alt={name ? name : title}
        align="left"
      />
      <h2>
        {name ? name : title} {`(${release_date.substring(0, 4)})`}
      </h2>
      <p>{`User score: ${vote_average * 10}%`}</p>
      <p>
        <b>Overview:</b> {overview ? overview : "No overview"}
      </p>
      <p>
        <b>Genres:</b>{" "}
        {genres ? genres.map(el => el.name).join(", ") : "No information"}
      </p>
    </article>
  );
};

export default Movie;

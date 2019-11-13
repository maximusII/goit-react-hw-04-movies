import React from "react";
import styles from "./MoviesList.module.css";
import { Link } from "react-router-dom";

const MoviesList = ({ movies = [] }) => (
  <ul className={styles.items}>
    {movies.map(movie => (
      <li key={movie.id}>
        <Link to={`/movies/${movie.id}`}>
          {movie.name ? movie.name : movie.title}
        </Link>
      </li>
    ))}
  </ul>
);

export default MoviesList;

import React from "react";

const Movie = ({ overview, genres, name, title, poster_path }) => {
  return (
    <article>
      <h2>{name ? name : title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + poster_path}
        alt={name ? name : title}
      />
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

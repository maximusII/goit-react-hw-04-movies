import React from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import Nav from "./Nav/Nav";
import HomePage from "./HomePage/HomePage";
import MoviesPage from "./MoviesPage/MoviesPage";
// import NotFoundPage from "./NotFoundPage/NotFoundPage";
import MovieDetailsPage from "./MoviesPage/MoviesList/MovieDetailsPage/MovieDetailsPage";

function App() {
  return (
    <div className={styles.app}>
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

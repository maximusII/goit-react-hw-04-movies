import React, { Component } from "react";
import styles from "./HomePage.module.css";
import { fetchMovies } from "../../services/fetcher";
import MoviesList from "../MoviesPage/MoviesList/MoviesList";

// const HomePage = () => {
//   return <h1>Home</h1>;
// };

// export default HomePage;

class HomePage extends Component {
  state = { movies: [] };

  componentDidMount() {
    fetchMovies()
      .then(alldata => alldata.data)
      .then(data => data.results)
      .then(movies => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h1>Home</h1>
        <MoviesList movies={movies} />
      </div>
    );
  }
}

export default HomePage;

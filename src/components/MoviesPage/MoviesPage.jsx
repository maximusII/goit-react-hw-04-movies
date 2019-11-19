import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { fetchSearchMovie } from '../../services/fetcher';
import MoviesList from './MoviesList/MoviesList';
// import styles from "./MoviesPage.module.css";

class MoviesPage extends Component {
  state = { query: '', movies: [] };

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ query: '' });
    fetchSearchMovie(this.state.query)
      .then(alldata => alldata.data)
      .then(data => data.results)
      .then(movies => this.setState({ movies }));
  };

  render() {
    const { query, movies } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            value={query}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default withRouter(MoviesPage);

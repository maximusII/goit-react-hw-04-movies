import React, { Component } from "react";
import { fetchMovieWithId } from "../../../services/fetcher";
import Movie from "../Movie/Movie";

class MovieDetailsPage extends Component {
  state = { movie: null };

  componentDidMount() {
    fetchMovieWithId(this.props.match.params.movieId)
      .then(alldata => alldata.data)
      .then(movie => this.setState({ movie }));
  }

  render() {
    const { movie } = this.state;
    return (
      <div>
        <button type="button">Go back</button>
        <h1>MovieDetailsPage</h1>
        {movie && <Movie {...movie} />}
      </div>
    );
  }
}

export default MovieDetailsPage;
